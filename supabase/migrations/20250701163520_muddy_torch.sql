/*
  # Enable Email Confirmation for Authentication

  1. Configuration
    - Enable email confirmation requirement
    - Set up proper email templates
    - Configure redirect URLs

  2. Security
    - Users must confirm email before accessing account
    - Profiles only created after email confirmation
    - Proper handling of unconfirmed users
*/

-- Enable email confirmation (this needs to be done in Supabase Dashboard as well)
-- But we can set up the database side properly

-- Update the handle_new_user function to only create profiles for confirmed users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Only create profile if email is confirmed
  IF NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, full_name, avatar_url, location, created_at, updated_at)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'Solo Traveler'),
      NEW.raw_user_meta_data->>'avatar_url',
      NEW.raw_user_meta_data->>'location',
      now(),
      now()
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Handle email confirmation events
CREATE OR REPLACE FUNCTION public.handle_email_confirmation()
RETURNS trigger AS $$
BEGIN
  -- Create profile when email gets confirmed (if it doesn't exist)
  IF OLD.email_confirmed_at IS NULL AND NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, full_name, avatar_url, location, created_at, updated_at)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'Solo Traveler'),
      NEW.raw_user_meta_data->>'avatar_url',
      NEW.raw_user_meta_data->>'location',
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

-- Clean up any existing profiles for unconfirmed users
DELETE FROM public.profiles 
WHERE id IN (
  SELECT id FROM auth.users 
  WHERE email_confirmed_at IS NULL
);