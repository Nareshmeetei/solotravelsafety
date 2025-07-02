/*
  # Fix profile constraints and ensure proper profile creation

  1. Updates
    - Make full_name column nullable to prevent constraint violations
    - Add proper default values for profile creation
    - Ensure profiles are created automatically on user signup

  2. Security
    - Maintain existing RLS policies
    - Ensure proper user access controls
*/

-- Make full_name nullable to prevent constraint violations during profile creation
ALTER TABLE profiles ALTER COLUMN full_name DROP NOT NULL;

-- Add default value for full_name
ALTER TABLE profiles ALTER COLUMN full_name SET DEFAULT 'Solo Traveler';

-- Create a function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, created_at, updated_at)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', 'Solo Traveler'),
    new.raw_user_meta_data->>'avatar_url',
    now(),
    now()
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Update existing users who might not have profiles
INSERT INTO public.profiles (id, full_name, avatar_url, created_at, updated_at)
SELECT 
  id,
  COALESCE(raw_user_meta_data->>'full_name', 'Solo Traveler'),
  raw_user_meta_data->>'avatar_url',
  created_at,
  updated_at
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.profiles)
ON CONFLICT (id) DO NOTHING;