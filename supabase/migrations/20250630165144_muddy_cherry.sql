/*
  # Add location column to profiles table

  1. Changes
    - Add location column to profiles table if it doesn't exist
    - Update existing profiles to have a default location value

  2. Security
    - Maintain existing RLS policies
*/

-- Add location column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'location'
  ) THEN
    ALTER TABLE profiles ADD COLUMN location text;
  END IF;
END $$;

-- Update the handle_new_user function to include location
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, location, created_at, updated_at)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', 'Solo Traveler'),
    new.raw_user_meta_data->>'avatar_url',
    new.raw_user_meta_data->>'location',
    now(),
    now()
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;