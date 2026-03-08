/*
  # Create leads tracking table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text) - Lead's full name
      - `email` (text) - Lead's email address
      - `phone` (text) - Lead's phone number
      - `message` (text) - Inquiry message
      - `source` (text) - Which page/form submitted from
      - `language` (text) - User's preferred language (es/en)
      - `created_at` (timestamptz) - Submission timestamp
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for viewing leads (authenticated admin only)
  
  3. Notes
    - This table tracks all lead submissions from contact forms
    - Public can insert (for form submissions)
    - Only authenticated users can view (for admin dashboard later)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'contact_form',
  language text DEFAULT 'es',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
