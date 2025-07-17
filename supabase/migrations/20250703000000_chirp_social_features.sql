/*
  # Chirp Social Features Migration

  1. New Tables
    - `chirps` - Main chirp posts
    - `chirp_likes` - Chirp likes/engagement
    - `chirp_comments` - Comments on chirps
    - `chirp_rechirps` - Rechirps (reposts)

  2. Features
    - Like/unlike chirps
    - Comment on chirps
    - Rechirp (repost) chirps
    - Track engagement metrics
*/

-- Create chirps table if it doesn't exist
CREATE TABLE IF NOT EXISTS chirps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  images text[] DEFAULT '{}',
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0,
  rechirps_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create chirp_likes table
CREATE TABLE IF NOT EXISTS chirp_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  chirp_id uuid REFERENCES chirps(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, chirp_id)
);

-- Create chirp_comments table
CREATE TABLE IF NOT EXISTS chirp_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  chirp_id uuid REFERENCES chirps(id) ON DELETE CASCADE NOT NULL,
  comment_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create chirp_rechirps table
CREATE TABLE IF NOT EXISTS chirp_rechirps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  chirp_id uuid REFERENCES chirps(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, chirp_id)
);

-- Enable Row Level Security
ALTER TABLE chirps ENABLE ROW LEVEL SECURITY;
ALTER TABLE chirp_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE chirp_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE chirp_rechirps ENABLE ROW LEVEL SECURITY;

-- Chirps policies
CREATE POLICY "Chirps are viewable by everyone"
  ON chirps FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert chirps"
  ON chirps FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own chirps"
  ON chirps FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own chirps"
  ON chirps FOR DELETE
  USING (auth.uid() = user_id);

-- Chirp likes policies
CREATE POLICY "Chirp likes are viewable by everyone"
  ON chirp_likes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can like chirps"
  ON chirp_likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike their own likes"
  ON chirp_likes FOR DELETE
  USING (auth.uid() = user_id);

-- Chirp comments policies
CREATE POLICY "Chirp comments are viewable by everyone"
  ON chirp_comments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can comment on chirps"
  ON chirp_comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
  ON chirp_comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
  ON chirp_comments FOR DELETE
  USING (auth.uid() = user_id);

-- Chirp rechirps policies
CREATE POLICY "Chirp rechirps are viewable by everyone"
  ON chirp_rechirps FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can rechirp"
  ON chirp_rechirps FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unrechirp their own rechirps"
  ON chirp_rechirps FOR DELETE
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS chirps_user_idx ON chirps(user_id);
CREATE INDEX IF NOT EXISTS chirps_created_at_idx ON chirps(created_at DESC);
CREATE INDEX IF NOT EXISTS chirp_likes_chirp_idx ON chirp_likes(chirp_id);
CREATE INDEX IF NOT EXISTS chirp_likes_user_idx ON chirp_likes(user_id);
CREATE INDEX IF NOT EXISTS chirp_comments_chirp_idx ON chirp_comments(chirp_id);
CREATE INDEX IF NOT EXISTS chirp_comments_user_idx ON chirp_comments(user_id);
CREATE INDEX IF NOT EXISTS chirp_rechirps_chirp_idx ON chirp_rechirps(chirp_id);
CREATE INDEX IF NOT EXISTS chirp_rechirps_user_idx ON chirp_rechirps(user_id);

-- Function to update chirp engagement counts
CREATE OR REPLACE FUNCTION update_chirp_counts()
RETURNS trigger AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF TG_TABLE_NAME = 'chirp_likes' THEN
      UPDATE chirps SET likes_count = likes_count + 1 WHERE id = NEW.chirp_id;
    ELSIF TG_TABLE_NAME = 'chirp_comments' THEN
      UPDATE chirps SET comments_count = comments_count + 1 WHERE id = NEW.chirp_id;
    ELSIF TG_TABLE_NAME = 'chirp_rechirps' THEN
      UPDATE chirps SET rechirps_count = rechirps_count + 1 WHERE id = NEW.chirp_id;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    IF TG_TABLE_NAME = 'chirp_likes' THEN
      UPDATE chirps SET likes_count = likes_count - 1 WHERE id = OLD.chirp_id;
    ELSIF TG_TABLE_NAME = 'chirp_comments' THEN
      UPDATE chirps SET comments_count = comments_count - 1 WHERE id = OLD.chirp_id;
    ELSIF TG_TABLE_NAME = 'chirp_rechirps' THEN
      UPDATE chirps SET rechirps_count = rechirps_count - 1 WHERE id = OLD.chirp_id;
    END IF;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic count updates
CREATE TRIGGER update_chirp_likes_count
  AFTER INSERT OR DELETE ON chirp_likes
  FOR EACH ROW EXECUTE PROCEDURE update_chirp_counts();

CREATE TRIGGER update_chirp_comments_count
  AFTER INSERT OR DELETE ON chirp_comments
  FOR EACH ROW EXECUTE PROCEDURE update_chirp_counts();

CREATE TRIGGER update_chirp_rechirps_count
  AFTER INSERT OR DELETE ON chirp_rechirps
  FOR EACH ROW EXECUTE PROCEDURE update_chirp_counts();

-- Function to handle chirp updated_at
CREATE OR REPLACE FUNCTION handle_chirp_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for chirp updated_at
CREATE TRIGGER handle_chirp_updated_at 
  BEFORE UPDATE ON chirps
  FOR EACH ROW EXECUTE PROCEDURE handle_chirp_updated_at(); 