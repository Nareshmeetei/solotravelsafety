-- Add username change tracking to profiles table
-- This allows users to change their username only twice

-- Add new columns to track username changes
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS username_change_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_username_change timestamptz,
ADD COLUMN IF NOT EXISTS original_username text;

-- Update existing profiles to set original_username if not set
UPDATE profiles 
SET original_username = full_name 
WHERE original_username IS NULL;

-- Create a function to check if username change is allowed
CREATE OR REPLACE FUNCTION check_username_change_limit()
RETURNS trigger AS $$
BEGIN
  -- If this is a username change (full_name is being updated)
  IF OLD.full_name IS DISTINCT FROM NEW.full_name THEN
    -- Check if user has exceeded the limit (2 changes allowed)
    IF NEW.username_change_count >= 2 THEN
      RAISE EXCEPTION 'Username change limit exceeded. You can only change your username twice.';
    END IF;
    
    -- Increment the change count
    NEW.username_change_count = OLD.username_change_count + 1;
    NEW.last_username_change = now();
    
    -- Set original username if this is the first change
    IF OLD.username_change_count = 0 THEN
      NEW.original_username = OLD.full_name;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to enforce username change limit
DROP TRIGGER IF EXISTS enforce_username_change_limit ON profiles;
CREATE TRIGGER enforce_username_change_limit
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE PROCEDURE check_username_change_limit();

-- Add comment to explain the functionality
COMMENT ON COLUMN profiles.username_change_count IS 'Number of times the user has changed their username (max 2)';
COMMENT ON COLUMN profiles.last_username_change IS 'Timestamp of the last username change';
COMMENT ON COLUMN profiles.original_username IS 'The original username when the account was created'; 