/*
  # Simple Newsletter Table Migration
  
  This creates a basic newsletter signup table that will work immediately
  without complex functions, making the newsletter form functional right away.
*/

-- Create a simple newsletter_signups table
CREATE TABLE IF NOT EXISTS public.newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS newsletter_signups_email_idx ON public.newsletter_signups(email);
CREATE INDEX IF NOT EXISTS newsletter_signups_created_at_idx ON public.newsletter_signups(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Remove all existing policies
DROP POLICY IF EXISTS "Allow insert for all" ON newsletter_signups;

-- Create the correct policy
CREATE POLICY "Allow insert for all"
  ON newsletter_signups
  FOR INSERT
  WITH CHECK (true);

-- Update the updated_at trigger for newsletter_signups
CREATE OR REPLACE FUNCTION public.handle_newsletter_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_newsletter_updated_at 
  BEFORE UPDATE ON public.newsletter_signups
  FOR EACH ROW EXECUTE PROCEDURE public.handle_newsletter_updated_at();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.newsletter_signups TO anon, authenticated;

-- Insert some sample data for testing
INSERT INTO public.newsletter_signups (email) VALUES 
  ('test@example.com'),
  ('demo@solotravelsafety.com')
ON CONFLICT (email) DO NOTHING; 