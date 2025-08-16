-- Fix database trigger to match actual table schema
-- This SQL should be run in Supabase SQL Editor

-- Drop existing trigger and function if they exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_confirmed ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.handle_email_confirmation();

-- Create corrected function to handle new user signup
-- This matches the actual profiles table structure (id only, no user_id)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    NOW(),
    NOW()
  );
  RETURN NEW;
EXCEPTION
  WHEN others THEN
    -- Log the error but don't prevent user creation
    RAISE WARNING 'Failed to create profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to handle email confirmation
-- This updates the profile when email is confirmed
CREATE OR REPLACE FUNCTION public.handle_email_confirmation()
RETURNS TRIGGER AS $$
BEGIN
  -- Only update if email confirmation status changed from unconfirmed to confirmed
  IF OLD.email_confirmed_at IS NULL AND NEW.email_confirmed_at IS NOT NULL THEN
    UPDATE public.profiles 
    SET 
      email = NEW.email,
      updated_at = NOW()
    WHERE id = NEW.id;
    
    -- Log successful confirmation
    RAISE NOTICE 'Email confirmed for user %', NEW.id;
  END IF;
  RETURN NEW;
EXCEPTION
  WHEN others THEN
    -- Log the error but don't prevent the confirmation
    RAISE WARNING 'Failed to update profile for confirmed user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
-- This fires AFTER a user is inserted into auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create trigger for email confirmation
-- This fires AFTER a user's email_confirmed_at is updated
CREATE TRIGGER on_auth_user_confirmed
  AFTER UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_email_confirmation();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated;

-- Test the trigger function directly (optional - for debugging)
-- You can comment this out after testing
DO $$
BEGIN
  RAISE NOTICE 'Database triggers have been updated to match the actual profiles table schema';
  RAISE NOTICE 'Profiles table structure: id (UUID), full_name, email, created_at, updated_at';
  RAISE NOTICE 'Triggers will now work correctly with email confirmation flow';
END $$;