import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PPDBRegistration {
  id?: string;
  nama: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  nik: string;
  anak_ke: number;
  asal_sekolah: string;
  alamat_sekolah: string;
  nama_ayah: string;
  nama_ibu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  penghasilan_ortu: string;
  nama_wali?: string;
  alamat_tinggal: string;
  no_whatsapp: string;
  kartu_keluarga_url?: string;
  akte_kelahiran_url?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
