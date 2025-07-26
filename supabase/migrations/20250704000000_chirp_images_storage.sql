/*
  # Chirp Images Storage Setup

  1. Storage Configuration
    - Create chirp-images bucket for chirp post images
    - Set up proper RLS policies for storage operations
    - Allow authenticated users to upload and manage their own chirp images

  2. Security
    - Public read access for all chirp images
    - Authenticated users can upload to their own folder
    - Users can update/delete their own chirp images
*/

-- Create storage bucket for chirp images if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'chirp-images', 
  'chirp-images', 
  true, 
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Chirp images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update any chirp images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete any chirp images" ON storage.objects;

-- Create new, simplified storage policies for chirp images
CREATE POLICY "Public Access to Chirp Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'chirp-images');

CREATE POLICY "Authenticated users can upload chirp images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'chirp-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update own chirp images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'chirp-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete own chirp images"
ON storage.objects FOR DELETE
USING (bucket_id = 'chirp-images' AND auth.role() = 'authenticated');

-- Also ensure the avatars bucket exists and has proper policies
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars', 
  'avatars', 
  true, 
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

-- Drop existing avatar policies if they exist
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view avatars" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload avatars" ON storage.objects;
DROP POLICY IF EXISTS "Users can update any avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete any avatar" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own files" ON storage.objects;

-- Create new, simplified storage policies for avatars
CREATE POLICY "Public Access to Avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'avatars');

CREATE POLICY "Authenticated users can upload avatars"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update own avatars"
ON storage.objects FOR UPDATE
USING (bucket_id = 'avatars' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete own avatars"
ON storage.objects FOR DELETE
USING (bucket_id = 'avatars' AND auth.role() = 'authenticated'); 