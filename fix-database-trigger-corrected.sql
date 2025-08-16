-- CORRECTED DATABASE TRIGGER FIX
-- This creates a profile when a user signs up, with proper error handling

-- First, drop existing trigger and function if they exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create the trigger function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER -- Run with elevated privileges
LANGUAGE plpgsql
AS $$
BEGIN
  -- Insert new profile, handle conflicts gracefully
  INSERT INTO public.profiles (
    user_id, 
    full_name, 
    email, 
    created_at, 
    updated_at
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) DO UPDATE SET
    full_name = COALESCE(NEW.raw_user_meta_data->>'full_name', profiles.full_name),
    email = NEW.email,
    updated_at = NOW();
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't fail the user creation
    RAISE LOG 'Error creating profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.handle_new_user();

-- Ensure proper permissions
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated;

-- Verify trigger creation
SELECT 
  t.trigger_name,
  t.event_manipulation,
  t.event_object_table,
  t.action_statement,
  p.proname as function_name,
  p.prosecdef as security_definer
FROM information_schema.triggers t
LEFT JOIN pg_proc p ON p.proname = 'handle_new_user'
WHERE t.trigger_name = 'on_auth_user_created';

-- Also check if profiles table has proper constraints
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default,
  character_maximum_length
FROM information_schema.columns
WHERE table_name = 'profiles' 
  AND table_schema = 'public'
ORDER BY ordinal_position;