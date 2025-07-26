-- Fix username column issue
-- This migration safely adds the username column to the profiles table

-- First, check if username column exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'username'
  ) THEN
    -- Add username column without constraints initially
    ALTER TABLE profiles ADD COLUMN username text;
    
    -- Update existing profiles to set username from full_name if not set
    UPDATE profiles 
    SET username = LOWER(REPLACE(COALESCE(full_name, 'user'), ' ', '')) || '_' || SUBSTRING(id::text, 1, 8)
    WHERE username IS NULL;
    
    -- Make username NOT NULL after setting values
    ALTER TABLE profiles ALTER COLUMN username SET NOT NULL;
    
    -- Add UNIQUE constraint after all profiles have usernames
    ALTER TABLE profiles ADD CONSTRAINT profiles_username_unique UNIQUE (username);
    
    -- Create index for username lookups
    CREATE INDEX IF NOT EXISTS profiles_username_idx ON profiles(username);
    
    RAISE NOTICE 'Username column added successfully';
  ELSE
    RAISE NOTICE 'Username column already exists';
  END IF;
END $$; 