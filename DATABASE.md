Database Schema Documentation 🗄️
This document outlines the complete database schema for Solo Travel Safety (STS), including tables, relationships, indexes, and security policies.
🏗️ Database Architecture
STS uses PostgreSQL via Supabase with:

Row Level Security (RLS) for data protection
Real-time subscriptions for live updates
Automatic timestamps and UUID generation
Full-text search capabilities

📋 Core Tables
1. Users Table
Stores user profiles and authentication data.
sqlCREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  travel_experience TEXT CHECK (travel_experience IN ('beginner', 'intermediate', 'experienced')),
  total_reviews INTEGER DEFAULT 0,
  helpful_votes_received INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  is_moderator BOOLEAN DEFAULT FALSE,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- RLS Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view public profiles" ON users
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);
2. Cities Table
Core destination data with safety metrics.
sqlCREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  country_code TEXT NOT NULL,
  continent TEXT NOT NULL,
  latitude DECIMAL(10, 7) NOT NULL,
  longitude DECIMAL(10, 7) NOT NULL,
  timezone TEXT,
  population INTEGER,
  currency_code TEXT,
  languages TEXT[],
  
  -- Safety Scores (0-5 scale)
  safety_score_overall DECIMAL(3,2) DEFAULT 0,
  safety_score_night DECIMAL(3,2) DEFAULT 0,
  safety_score_transport DECIMAL(3,2) DEFAULT 0,
  safety_score_walking DECIMAL(3,2) DEFAULT 0,
  
  -- Confidence Score (percentage of women who felt safe)
  confidence_score DECIMAL(5,2) DEFAULT 0,
  
  -- Statistics
  total_reviews INTEGER DEFAULT 0,
  total_incidents INTEGER DEFAULT 0,
  last_reviewed_at TIMESTAMP WITH TIME ZONE,
  
  -- SEO and Search
  slug TEXT UNIQUE,
  description TEXT,
  search_vector TSVECTOR,
  
  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_cities_country ON cities(country);
CREATE INDEX idx_cities_continent ON cities(continent);
CREATE INDEX idx_cities_safety_overall ON cities(safety_score_overall DESC);
CREATE INDEX idx_cities_location ON cities USING GIST (point(longitude, latitude));
CREATE INDEX idx_cities_search ON cities USING GIN (search_vector);
CREATE UNIQUE INDEX idx_cities_slug ON cities(slug);

-- Full-text search trigger
CREATE OR REPLACE FUNCTION update_cities_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', 
    COALESCE(NEW.name, '') || ' ' || 
    COALESCE(NEW.country, '') || ' ' || 
    COALESCE(NEW.description, '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_cities_search_vector_trigger
  BEFORE INSERT OR UPDATE ON cities
  FOR EACH ROW EXECUTE FUNCTION update_cities_search_vector();

-- RLS Policies
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cities are viewable by everyone" ON cities
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Moderators can manage cities" ON cities
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() AND users.is_moderator = TRUE
    )
  );
3. Reviews (Chirps) Table
User-generated safety reviews and experiences.
sqlCREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  city_id UUID REFERENCES cities(id) ON DELETE CASCADE,
  
  -- Content
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  safety_rating INTEGER CHECK (safety_rating >= 1 AND safety_rating <= 5),
  
  -- Categorization
  category TEXT NOT NULL CHECK (category IN (
    'general', 'accommodation', 'transport', 'nightlife', 
    'sightseeing', 'food', 'shopping', 'emergency'
  )),
  tags TEXT[] DEFAULT '{}',
  
  -- Location (optional specific location within city)
  location_name TEXT,
  location_lat DECIMAL(10, 7),
  location_lng DECIMAL(10, 7),
  
  -- Engagement
  helpful_votes INTEGER DEFAULT 0,
  total_votes INTEGER DEFAULT 0,
  
  -- Privacy
  is_anonymous BOOLEAN DEFAULT FALSE,
  
  -- Moderation
  is_flagged BOOLEAN DEFAULT FALSE,
  is_verified BOOLEAN DEFAULT FALSE,
  flagged_reason TEXT,
  moderated_at TIMESTAMP WITH TIME ZONE,
  moderated_by UUID REFERENCES users(id),
  
  -- Timestamps
  travel_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_reviews_city_id ON reviews(city_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_category ON reviews(category);
CREATE INDEX idx_reviews_safety_rating ON reviews(safety_rating);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX idx_reviews_helpful_votes ON reviews(helpful_votes DESC);
CREATE