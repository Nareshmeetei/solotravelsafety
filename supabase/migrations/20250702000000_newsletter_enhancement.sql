/*
  # Newsletter Enhancement Migration

  1. Enhanced Newsletter Table
    - Better tracking of newsletter signups
    - Status tracking (active, unsubscribed, etc.)
    - Source tracking (hero form, popup, etc.)
    - IP address and user agent for analytics

  2. MCP Integration
    - Functions for MCP server to query newsletter data
    - Analytics functions for newsletter performance
*/

-- Drop existing tables if they exist (for clean slate)
DROP TABLE IF EXISTS public.newsletter_signups;
DROP TABLE IF EXISTS public.email_signups;

-- Create enhanced newsletter_signups table
CREATE TABLE IF NOT EXISTS public.newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'pending')),
  source text DEFAULT 'hero_form' CHECK (source IN ('hero_form', 'popup', 'footer', 'api', 'manual')),
  ip_address inet,
  user_agent text,
  subscribed_at timestamp with time zone DEFAULT now(),
  unsubscribed_at timestamp with time zone,
  last_email_sent_at timestamp with time zone,
  email_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS newsletter_signups_email_idx ON public.newsletter_signups(email);
CREATE INDEX IF NOT EXISTS newsletter_signups_status_idx ON public.newsletter_signups(status);
CREATE INDEX IF NOT EXISTS newsletter_signups_created_at_idx ON public.newsletter_signups(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_signups
CREATE POLICY "Newsletter signups are viewable by everyone" 
  ON public.newsletter_signups FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can insert newsletter signups" 
  ON public.newsletter_signups FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Only admins can update newsletter signups" 
  ON public.newsletter_signups FOR UPDATE 
  USING (auth.role() = 'service_role');

CREATE POLICY "Only admins can delete newsletter signups" 
  ON public.newsletter_signups FOR DELETE 
  USING (auth.role() = 'service_role');

-- Function to add newsletter signup with conflict handling
CREATE OR REPLACE FUNCTION public.add_newsletter_signup(
  p_email text,
  p_source text DEFAULT 'hero_form',
  p_ip_address inet DEFAULT NULL,
  p_user_agent text DEFAULT NULL
)
RETURNS json AS $$
DECLARE
  result json;
BEGIN
  INSERT INTO public.newsletter_signups (
    email, 
    source, 
    ip_address, 
    user_agent
  ) VALUES (
    p_email, 
    p_source, 
    p_ip_address, 
    p_user_agent
  )
  ON CONFLICT (email) DO UPDATE SET
    status = CASE 
      WHEN public.newsletter_signups.status = 'unsubscribed' THEN 'active'
      ELSE public.newsletter_signups.status
    END,
    source = p_source,
    updated_at = now()
  RETURNING json_build_object(
    'id', id,
    'email', email,
    'status', status,
    'source', source,
    'subscribed_at', subscribed_at
  ) INTO result;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get newsletter statistics for MCP
CREATE OR REPLACE FUNCTION public.get_newsletter_stats()
RETURNS json AS $$
DECLARE
  result json;
BEGIN
  SELECT json_build_object(
    'total_signups', COUNT(*),
    'active_signups', COUNT(*) FILTER (WHERE status = 'active'),
    'unsubscribed', COUNT(*) FILTER (WHERE status = 'unsubscribed'),
    'bounced', COUNT(*) FILTER (WHERE status = 'bounced'),
    'pending', COUNT(*) FILTER (WHERE status = 'pending'),
    'signups_today', COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE),
    'signups_this_week', COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'),
    'signups_this_month', COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'),
    'source_breakdown', (
      SELECT json_object_agg(source, count)
      FROM (
        SELECT source, COUNT(*) as count
        FROM public.newsletter_signups
        GROUP BY source
      ) sources
    )
  ) INTO result
  FROM public.newsletter_signups;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get recent newsletter signups for MCP
CREATE OR REPLACE FUNCTION public.get_recent_newsletter_signups(limit_count integer DEFAULT 10)
RETURNS json AS $$
DECLARE
  result json;
BEGIN
  SELECT json_agg(
    json_build_object(
      'id', id,
      'email', email,
      'status', status,
      'source', source,
      'subscribed_at', subscribed_at,
      'ip_address', ip_address,
      'user_agent', user_agent
    )
  ) INTO result
  FROM (
    SELECT *
    FROM public.newsletter_signups
    ORDER BY created_at DESC
    LIMIT limit_count
  ) recent_signups;
  
  RETURN COALESCE(result, '[]'::json);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to search newsletter signups for MCP
CREATE OR REPLACE FUNCTION public.search_newsletter_signups(search_query text)
RETURNS json AS $$
DECLARE
  result json;
BEGIN
  SELECT json_agg(
    json_build_object(
      'id', id,
      'email', email,
      'status', status,
      'source', source,
      'subscribed_at', subscribed_at
    )
  ) INTO result
  FROM (
    SELECT *
    FROM public.newsletter_signups
    WHERE email ILIKE '%' || search_query || '%'
    ORDER BY created_at DESC
    LIMIT 50
  ) search_results;
  
  RETURN COALESCE(result, '[]'::json);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update the updated_at trigger for newsletter_signups
CREATE OR REPLACE FUNCTION public.handle_newsletter_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_newsletter_updated_at 
  BEFORE UPDATE ON public.newsletter_signups
  FOR EACH ROW EXECUTE PROCEDURE public.handle_newsletter_updated_at();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.newsletter_signups TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.add_newsletter_signup(text, text, inet, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_newsletter_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_recent_newsletter_signups(integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.search_newsletter_signups(text) TO anon, authenticated; 