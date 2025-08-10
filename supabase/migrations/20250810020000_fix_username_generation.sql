-- Fix username generation in handle_new_user trigger
-- This addresses the signup failure caused by unsanitized usernames

-- 1. Drop the existing broken trigger first
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 2. Create a robust username sanitization function
CREATE OR REPLACE FUNCTION public.sanitize_username(input_text TEXT)
RETURNS TEXT AS $$
DECLARE
  sanitized TEXT;
BEGIN
  -- Return empty string if input is null or empty
  IF input_text IS NULL OR TRIM(input_text) = '' THEN
    RETURN '';
  END IF;
  
  -- Convert to lowercase and remove accents/diacritics
  sanitized := LOWER(TRIM(input_text));
  
  -- Replace accented characters with base equivalents
  sanitized := TRANSLATE(sanitized, 
    'àáâãäåāăąçćĉčđèéêëēěęğĝħìíîïīįĵķłĺļŀñńņňòóôõöøōŕřśŝşšţťŧùúûüūůűŵýÿźżž',
    'aaaaaaaaaccccdeeeeeeggghiiiiiijkllllnnnnooooooorrssssstttuuuuuuwyyzzz'
  );
  
  -- Remove any characters that aren't alphanumeric, underscore, or hyphen
  sanitized := REGEXP_REPLACE(sanitized, '[^a-z0-9_-]', '', 'g');
  
  -- Remove consecutive underscores/hyphens and trim
  sanitized := REGEXP_REPLACE(sanitized, '[_-]+', '_', 'g');
  sanitized := TRIM(sanitized, '_-');
  
  -- Ensure minimum length (pad with random string if needed)
  IF LENGTH(sanitized) < 3 THEN
    sanitized := sanitized || '_' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR (4 - LENGTH(sanitized)));
  END IF;
  
  -- Truncate if too long
  IF LENGTH(sanitized) > 30 THEN
    sanitized := SUBSTRING(sanitized FROM 1 FOR 27) || '_' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 2);
  END IF;
  
  -- Ensure it starts with a letter or number (not underscore/hyphen)
  IF sanitized ~ '^[_-]' THEN
    sanitized := 'u_' || sanitized;
  END IF;
  
  RETURN sanitized;
END;
$$ LANGUAGE plpgsql;

-- 3. Create a function to generate unique usernames
CREATE OR REPLACE FUNCTION public.generate_unique_username(base_name TEXT)
RETURNS TEXT AS $$
DECLARE
  sanitized_base TEXT;
  candidate_username TEXT;
  counter INTEGER := 0;
  max_attempts INTEGER := 100;
BEGIN
  -- Sanitize the base name
  sanitized_base := public.sanitize_username(base_name);
  
  -- If sanitization resulted in empty string, use default
  IF sanitized_base = '' OR sanitized_base IS NULL THEN
    sanitized_base := 'user';
  END IF;
  
  -- Try the base name first
  candidate_username := sanitized_base;
  
  -- Keep trying with incremental numbers until we find a unique one
  WHILE counter < max_attempts LOOP
    -- Check if this username exists
    IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE username = candidate_username) THEN
      RETURN candidate_username;
    END IF;
    
    -- Increment counter and try next variation
    counter := counter + 1;
    candidate_username := sanitized_base || '_' || counter;
  END LOOP;
  
  -- Fallback to random username if all attempts failed
  RETURN 'user_' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8);
END;
$$ LANGUAGE plpgsql;

-- 4. Update the handle_new_user function with proper error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  user_full_name TEXT;
  generated_username TEXT;
BEGIN
  -- Extract full name from metadata, with fallback
  user_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', '');
  
  -- Generate a unique, sanitized username
  generated_username := public.generate_unique_username(user_full_name);
  
  -- Insert the profile with proper error handling
  BEGIN
    INSERT INTO public.profiles (
      id, 
      full_name, 
      email, 
      username,
      profile_name,
      created_at,
      updated_at
    ) VALUES (
      NEW.id,
      user_full_name,
      NEW.email,
      generated_username,
      user_full_name,
      NOW(),
      NOW()
    );
  EXCEPTION
    WHEN OTHERS THEN
      -- Log the error but don't fail the signup
      RAISE WARNING 'Failed to create profile for user %: %', NEW.id, SQLERRM;
      
      -- Try with a completely random username as last resort
      INSERT INTO public.profiles (
        id, 
        full_name, 
        email, 
        username,
        profile_name,
        created_at,
        updated_at
      ) VALUES (
        NEW.id,
        user_full_name,
        NEW.email,
        'user_' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8),
        user_full_name,
        NOW(),
        NOW()
      );
  END;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Add username column if it doesn't exist and populate it
DO $$
DECLARE
  profile_record RECORD;
  new_username TEXT;
BEGIN
  -- Check if username column exists, add it if not
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'username'
  ) THEN
    -- Add username column
    ALTER TABLE public.profiles ADD COLUMN username TEXT;
    
    -- Add profile_name column if it doesn't exist
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name = 'profiles' AND column_name = 'profile_name'
    ) THEN
      ALTER TABLE public.profiles ADD COLUMN profile_name TEXT;
    END IF;
    
    RAISE NOTICE 'Added username and profile_name columns';
  END IF;
  
  -- Fix profiles with null or invalid usernames
  FOR profile_record IN 
    SELECT id, full_name, username 
    FROM public.profiles 
    WHERE username IS NULL 
       OR username = '' 
       OR (LENGTH(username) > 0 AND (LENGTH(username) < 3 OR LENGTH(username) > 30))
  LOOP
    -- Generate new username for this profile
    new_username := public.generate_unique_username(COALESCE(profile_record.full_name, ''));
    
    -- Update the profile
    UPDATE public.profiles 
    SET username = new_username,
        profile_name = COALESCE(profile_record.full_name, ''),
        updated_at = NOW()
    WHERE id = profile_record.id;
    
    RAISE NOTICE 'Updated username for profile % from "%" to "%"', 
      profile_record.id, 
      COALESCE(profile_record.username, 'NULL'), 
      new_username;
  END LOOP;
  
  -- Make username NOT NULL and unique after populating
  ALTER TABLE public.profiles ALTER COLUMN username SET NOT NULL;
  
  -- Add unique constraint if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE table_name = 'profiles' AND constraint_name = 'profiles_username_unique'
  ) THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_username_unique UNIQUE (username);
  END IF;
  
END $$;

-- 7. Add index for better performance on username lookups
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_username_unique 
  ON public.profiles (username) 
  WHERE username IS NOT NULL;

-- Migration complete
-- Signup should now work properly with sanitized username generation