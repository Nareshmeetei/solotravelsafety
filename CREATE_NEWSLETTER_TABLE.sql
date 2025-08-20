-- SIMPLE NEWSLETTER TABLE CREATION
-- Copy and paste this into your Supabase SQL Editor

CREATE TABLE newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Allow anyone to insert emails (for newsletter signup)
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON newsletter_subscriptions FOR INSERT WITH CHECK (true);