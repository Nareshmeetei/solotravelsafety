/*
  # Enable Email Confirmation for Authentication

  1. Configuration
    - Enable email confirmation requirement for new signups
    - Configure email templates and settings
    - Set up proper redirect URLs

  2. Security
    - Users must confirm email before accessing the platform
    - Prevent unverified accounts from signing in
    - Maintain existing RLS policies
*/

-- Note: Email confirmation settings are typically configured in the Supabase Dashboard
-- under Authentication > Settings, but we can document the required settings here:

/*
  Required Supabase Auth Settings:
  
  1. In Supabase Dashboard > Authentication > Settings:
     - Enable "Confirm email" under Email Auth
     - Set "Site URL" to your domain (e.g., https://solotravelsafety.com)
     - Configure email templates as needed
  
  2. Email Templates (optional customization):
     - Confirmation email template
     - Password reset email template
     - Email change confirmation template
  
  3. URL Configuration:
     - Site URL: https://solotravelsafety.com
     - Redirect URLs: https://solotravelsafety.com/auth/callback
*/

-- Update the handle_new_user function to only create profiles for confirmed users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Only create profile if email is confirmed
  IF NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, full_name, avatar_url, created_at, updated_at)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'Solo Traveler'),
      NEW.raw_user_meta_data->>'avatar_url',
      now(),
      now()
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Also handle email confirmation events
CREATE OR REPLACE FUNCTION public.handle_email_confirmation()
RETURNS trigger AS $$
BEGIN
  -- Create profile when email gets confirmed
  IF OLD.email_confirmed_at IS NULL AND NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, full_name, avatar_url, created_at, updated_at)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'Solo Traveler'),
      NEW.raw_user_meta_data->>'avatar_url',
      now(),
      now()
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for email confirmation
DROP TRIGGER IF EXISTS on_email_confirmed ON auth.users;
CREATE TRIGGER on_email_confirmed
  AFTER UPDATE ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_email_confirmation();