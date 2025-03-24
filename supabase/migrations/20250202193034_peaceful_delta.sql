/*
  # Initial Schema Setup for Real Estate Platform

  1. New Tables
    - `properties`
      - Core property information
      - Location and pricing details
      - Features and amenities
    - `investments`
      - Tracks user investments in properties
      - Investment amount and share details
    - `property_views`
      - Tracks which properties users have viewed
    - `subscriptions`
      - Tracks property subscriptions/notifications

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated users
    - Public read access for properties
*/

-- Properties Table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price decimal NOT NULL,
  location text NOT NULL,
  bedrooms integer NOT NULL,
  bathrooms integer NOT NULL,
  size decimal NOT NULL,
  image_url text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Investments Table
CREATE TABLE IF NOT EXISTS investments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  amount decimal NOT NULL,
  shares integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, property_id)
);

-- Property Views Table
CREATE TABLE IF NOT EXISTS property_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  viewed_at timestamptz DEFAULT now(),
  UNIQUE(user_id, property_id)
);

-- Subscriptions Table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, property_id)
);

-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Properties Policies
CREATE POLICY "Properties are viewable by everyone"
  ON properties
  FOR SELECT
  TO public
  USING (true);

-- Investments Policies
CREATE POLICY "Users can view their own investments"
  ON investments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own investments"
  ON investments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Property Views Policies
CREATE POLICY "Users can view their own property views"
  ON property_views
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own property views"
  ON property_views
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Subscriptions Policies
CREATE POLICY "Users can view their own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own subscriptions"
  ON subscriptions
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Sample Property Data
INSERT INTO properties (title, description, price, location, bedrooms, bathrooms, size, image_url, features)
VALUES
  (
    'Modern Smart Home',
    'Luxurious modern home with smart features throughout. This stunning property offers the perfect blend of comfort and technology.',
    1700000,
    'London VC',
    5,
    4,
    3500,
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000',
    '["Swimming pool", "Smart Home", "Security System", "Home Theater", "Electric Car Charging"]'::jsonb
  );

  -- Deposits Table
CREATE TABLE IF NOT EXISTS deposits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE, -- The user making the deposit
  amount decimal NOT NULL, -- Amount deposited
  method text NOT NULL CHECK (method IN ('Bank', 'Crypto', 'Other')), -- Deposit method
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'approved')), -- Approval status
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security on Deposits
ALTER TABLE deposits ENABLE ROW LEVEL SECURITY;

-- Deposits Policies
CREATE POLICY "Users can view their own deposits"
  ON deposits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own deposits"
  ON deposits
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can approve deposits"
  ON deposits
  FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM auth.users WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (status IN ('confirmed', 'approved'));
