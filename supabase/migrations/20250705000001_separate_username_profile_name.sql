-- Separate profile name (display name) from username (handle)
-- Profile name can be changed unlimited times
-- Username can only be changed twice

-- Add username column to profiles table (without constraints initially)
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS username text;

-- Update existing profiles to set username from full_name if not set
UPDATE profiles 
SET username = LOWER(REPLACE(COALESCE(full_name, 'user'), ' ', '')) || '_' || SUBSTRING(id::text, 1, 8)
WHERE username IS NULL;

-- Make username NOT NULL after setting values
ALTER TABLE profiles 
ALTER COLUMN username SET NOT NULL;

-- Add UNIQUE constraint after all profiles have usernames
ALTER TABLE profiles 
ADD CONSTRAINT profiles_username_unique UNIQUE (username);

-- Create index for username lookups
CREATE INDEX IF NOT EXISTS profiles_username_idx ON profiles(username);

-- Update the function to only track username changes (not profile name)
CREATE OR REPLACE FUNCTION check_username_change_limit()
RETURNS trigger AS $$
BEGIN
  -- If this is a username change (username is being updated)
  IF OLD.username IS DISTINCT FROM NEW.username THEN
    -- Check if user has exceeded the limit (2 changes allowed)
    IF NEW.username_change_count >= 2 THEN
      RAISE EXCEPTION 'Username change limit exceeded. You can only change your username twice.';
    END IF;
    
    -- Increment the change count
    NEW.username_change_count = OLD.username_change_count + 1;
    NEW.last_username_change = now();
    
    -- Set original username if this is the first change
    IF OLD.username_change_count = 0 THEN
      NEW.original_username = OLD.username;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update comments to reflect the new functionality
COMMENT ON COLUMN profiles.username IS 'Unique username/handle (can only be changed once)';
COMMENT ON COLUMN profiles.full_name IS 'Display name (can be changed unlimited times)';
COMMENT ON COLUMN profiles.username_change_count IS 'Number of times the user has changed their username (max 2)';
COMMENT ON COLUMN profiles.last_username_change IS 'Timestamp of the last username change';
COMMENT ON COLUMN profiles.original_username IS 'The original username when the account was created';

-- Create a function to generate unique usernames
CREATE OR REPLACE FUNCTION generate_unique_username(base_username text)
RETURNS text AS $$
DECLARE
  new_username text;
  counter integer := 0;
BEGIN
  new_username := base_username;
  
  -- Keep trying until we find a unique username
  WHILE EXISTS(SELECT 1 FROM profiles WHERE username = new_username) LOOP
    counter := counter + 1;
    new_username := base_username || counter::text;
  END LOOP;
  
  RETURN new_username;
END;
$$ LANGUAGE plpgsql;

-- Update the handle_new_user function to set username
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  generated_username text;
BEGIN
  -- Generate a unique username from the full name
  generated_username := generate_unique_username(
    LOWER(REPLACE(COALESCE(new.raw_user_meta_data->>'full_name', 'user'), ' ', ''))
  );
  
  INSERT INTO public.profiles (id, full_name, username)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', generated_username);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 