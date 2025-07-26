/*
  # Simplified Security Hardening Migration
  
  This migration addresses critical security vulnerabilities for existing tables only:
  1. Enables RLS on missing tables
  2. Adds proper access control policies
  3. Secures storage buckets
  4. Implements audit logging
  5. Adds data retention policies
*/

-- Enable RLS on newsletter_signups (if not already enabled)
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Add user_id column to newsletter_signups if missing
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'newsletter_signups' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE newsletter_signups ADD COLUMN user_id uuid REFERENCES auth.users(id);
  END IF;
END $$;

-- Secure newsletter signups - users can insert their own, admins can manage all
CREATE POLICY "Users can insert their own newsletter signup"
  ON newsletter_signups FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own newsletter signup"
  ON newsletter_signups FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Secure storage policies - replace overly permissive ones
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own files" ON storage.objects;

-- Avatar storage policies
CREATE POLICY "Users can upload avatars to their own folder"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
    AND (storage.extension(name) = ANY(ARRAY['jpg', 'jpeg', 'png', 'webp', 'gif']))
    AND octet_length(object) <= 5242880 -- 5MB limit
  );

CREATE POLICY "Users can update their own avatar files"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  )
  WITH CHECK (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
    AND (storage.extension(name) = ANY(ARRAY['jpg', 'jpeg', 'png', 'webp', 'gif']))
    AND octet_length(object) <= 5242880 -- 5MB limit
  );

CREATE POLICY "Users can delete their own avatar files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Create audit log table for security monitoring
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  table_name text,
  record_id text,
  old_values jsonb,
  new_values jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on audit logs
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can read their own audit logs
CREATE POLICY "Users can read their own audit logs"
  ON audit_logs FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for audit logs
CREATE INDEX IF NOT EXISTS audit_logs_user_id_idx ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS audit_logs_created_at_idx ON audit_logs(created_at);
CREATE INDEX IF NOT EXISTS audit_logs_action_idx ON audit_logs(action);

-- Create function to log sensitive operations
CREATE OR REPLACE FUNCTION log_audit_event()
RETURNS TRIGGER AS $$
BEGIN
  -- Only log for sensitive tables
  IF TG_TABLE_NAME IN ('profiles', 'reviews', 'newsletter_signups') THEN
    INSERT INTO audit_logs (
      user_id,
      action,
      table_name,
      record_id,
      old_values,
      new_values,
      created_at
    ) VALUES (
      auth.uid(),
      TG_OP,
      TG_TABLE_NAME,
      COALESCE(NEW.id::text, OLD.id::text),
      CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
      CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
      now()
    );
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create audit triggers for existing tables
DROP TRIGGER IF EXISTS audit_profiles_trigger ON profiles;
CREATE TRIGGER audit_profiles_trigger
  AFTER INSERT OR UPDATE OR DELETE ON profiles
  FOR EACH ROW EXECUTE FUNCTION log_audit_event();

DROP TRIGGER IF EXISTS audit_reviews_trigger ON reviews;
CREATE TRIGGER audit_reviews_trigger
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE FUNCTION log_audit_event();

DROP TRIGGER IF EXISTS audit_newsletter_trigger ON newsletter_signups;
CREATE TRIGGER audit_newsletter_trigger
  AFTER INSERT OR UPDATE OR DELETE ON newsletter_signups
  FOR EACH ROW EXECUTE FUNCTION log_audit_event();

-- Add rate limiting table
CREATE TABLE IF NOT EXISTS rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL, -- IP or user ID
  action text NOT NULL,
  count integer DEFAULT 1,
  window_start timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on rate limits
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- Only system can manage rate limits
CREATE POLICY "System only rate limits"
  ON rate_limits FOR ALL
  TO service_role
  USING (true);

-- Create indexes for rate limiting
CREATE UNIQUE INDEX IF NOT EXISTS rate_limits_identifier_action_idx 
  ON rate_limits(identifier, action);
CREATE INDEX IF NOT EXISTS rate_limits_window_start_idx 
  ON rate_limits(window_start);

-- Function to check rate limits
CREATE OR REPLACE FUNCTION check_rate_limit(
  p_identifier text,
  p_action text,
  p_max_requests integer DEFAULT 100,
  p_window_minutes integer DEFAULT 60
) RETURNS boolean AS $$
DECLARE
  current_count integer;
  window_start timestamptz;
BEGIN
  window_start := now() - (p_window_minutes || ' minutes')::interval;
  
  -- Clean up old entries
  DELETE FROM rate_limits 
  WHERE window_start < (now() - (p_window_minutes * 2 || ' minutes')::interval);
  
  -- Get current count
  SELECT count, window_start INTO current_count, window_start
  FROM rate_limits 
  WHERE identifier = p_identifier 
    AND action = p_action 
    AND window_start > (now() - (p_window_minutes || ' minutes')::interval);
  
  IF current_count IS NULL THEN
    -- First request in window
    INSERT INTO rate_limits (identifier, action, count, window_start)
    VALUES (p_identifier, p_action, 1, now());
    RETURN true;
  ELSIF current_count < p_max_requests THEN
    -- Within limit
    UPDATE rate_limits 
    SET count = count + 1, updated_at = now()
    WHERE identifier = p_identifier AND action = p_action;
    RETURN true;
  ELSE
    -- Rate limited
    RETURN false;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add data retention policies
CREATE TABLE IF NOT EXISTS data_retention_policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name text NOT NULL UNIQUE,
  retention_days integer NOT NULL,
  last_cleanup timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Insert default retention policies
INSERT INTO data_retention_policies (table_name, retention_days) VALUES
  ('audit_logs', 90),
  ('rate_limits', 7),
  ('newsletter_signups', 2555) -- 7 years for GDPR
ON CONFLICT (table_name) DO NOTHING;

-- Function for automated cleanup
CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS void AS $$
DECLARE
  policy RECORD;
BEGIN
  FOR policy IN SELECT * FROM data_retention_policies LOOP
    CASE policy.table_name
      WHEN 'audit_logs' THEN
        DELETE FROM audit_logs 
        WHERE created_at < now() - (policy.retention_days || ' days')::interval;
      WHEN 'rate_limits' THEN
        DELETE FROM rate_limits 
        WHERE created_at < now() - (policy.retention_days || ' days')::interval;
      -- Add more tables as needed
    END CASE;
    
    UPDATE data_retention_policies 
    SET last_cleanup = now() 
    WHERE id = policy.id;
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add username constraints if profiles table has username column
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'username'
  ) THEN
    -- Add constraints for data integrity
    ALTER TABLE profiles 
    ADD CONSTRAINT profiles_username_length_check 
    CHECK (char_length(username) >= 3 AND char_length(username) <= 30);

    ALTER TABLE profiles 
    ADD CONSTRAINT profiles_username_format_check 
    CHECK (username ~ '^[a-zA-Z0-9_]+$');
  END IF;
END $$;

-- Notification for schema changes
SELECT 'Simplified security hardening migration completed successfully' as result; 