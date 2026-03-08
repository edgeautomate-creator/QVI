/*
  # Create trips table for search functionality

  1. New Tables
    - trips table with comprehensive trip information
    - Includes bilingual content for English and Spanish
    - Supports full-text search across destinations and descriptions

  2. Security
    - Enable RLS on trips table
    - Add policy for public read access

  3. Indexes
    - Full-text search indexes for optimal search performance
    - Category and featured indexes for filtering
*/

CREATE TABLE IF NOT EXISTS trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en text NOT NULL,
  name_es text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  destinations text NOT NULL,
  countries text[] DEFAULT '{}',
  cities text[] DEFAULT '{}',
  description_en text DEFAULT '',
  description_es text DEFAULT '',
  highlights_en text[] DEFAULT '{}',
  highlights_es text[] DEFAULT '{}',
  price numeric DEFAULT 0,
  currency text DEFAULT 'USD',
  duration_days integer DEFAULT 0,
  image_url text DEFAULT '',
  route_path text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE trips ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Trips are publicly readable"
  ON trips
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_trips_category ON trips(category);
CREATE INDEX IF NOT EXISTS idx_trips_featured ON trips(featured);
CREATE INDEX IF NOT EXISTS idx_trips_destinations ON trips USING gin(to_tsvector('english', destinations));
CREATE INDEX IF NOT EXISTS idx_trips_search_en ON trips USING gin(to_tsvector('english', description_en || ' ' || destinations));
CREATE INDEX IF NOT EXISTS idx_trips_search_es ON trips USING gin(to_tsvector('spanish', description_es || ' ' || destinations));