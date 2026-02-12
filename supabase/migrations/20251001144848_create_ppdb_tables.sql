/*
  # Create PPDB Registration System Tables

  1. New Tables
    - `ppdb_registrations`
      - `id` (uuid, primary key)
      - `nama` (text) - Student name
      - `jenis_kelamin` (text) - Gender
      - `tempat_lahir` (text) - Place of birth
      - `tanggal_lahir` (date) - Date of birth
      - `nik` (text) - National ID number
      - `anak_ke` (integer) - Child order
      - `asal_sekolah` (text) - Previous school
      - `alamat_sekolah` (text) - School address
      - `nama_ayah` (text) - Father's name
      - `nama_ibu` (text) - Mother's name
      - `pekerjaan_ayah` (text) - Father's occupation
      - `pekerjaan_ibu` (text) - Mother's occupation
      - `penghasilan_ortu` (text) - Parent's income
      - `nama_wali` (text) - Guardian's name
      - `alamat_tinggal` (text) - Residential address
      - `no_whatsapp` (text) - WhatsApp number
      - `kartu_keluarga_url` (text) - Family card document URL
      - `akte_kelahiran_url` (text) - Birth certificate document URL
      - `status` (text) - Registration status (pending, approved, rejected)
      - `created_at` (timestamptz) - Submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp

    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can insert to ppdb_registrations
    - Only authenticated admins can view/update registrations
*/

-- Create ppdb_registrations table
CREATE TABLE IF NOT EXISTS ppdb_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama text NOT NULL,
  jenis_kelamin text NOT NULL,
  tempat_lahir text NOT NULL,
  tanggal_lahir date NOT NULL,
  nik text NOT NULL,
  anak_ke integer NOT NULL DEFAULT 1,
  asal_sekolah text NOT NULL,
  alamat_sekolah text NOT NULL,
  nama_ayah text NOT NULL,
  nama_ibu text NOT NULL,
  pekerjaan_ayah text NOT NULL,
  pekerjaan_ibu text NOT NULL,
  penghasilan_ortu text NOT NULL,
  nama_wali text,
  alamat_tinggal text NOT NULL,
  no_whatsapp text NOT NULL,
  kartu_keluarga_url text,
  akte_kelahiran_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE ppdb_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public can insert registrations
CREATE POLICY "Anyone can submit PPDB registration"
  ON ppdb_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated admins can view all registrations
CREATE POLICY "Admins can view all registrations"
  ON ppdb_registrations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

-- Authenticated admins can update registrations
CREATE POLICY "Admins can update registrations"
  ON ppdb_registrations
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

-- Only admins can view admin_users table
CREATE POLICY "Admins can view admin users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Insert default admin (you'll need to sign up with this email first)
INSERT INTO admin_users (email)
VALUES ('admin@smphasjim.sch.id')
ON CONFLICT (email) DO NOTHING;