import { useState, FormEvent } from 'react';
import { supabase, PPDBRegistration } from '../lib/supabase';
import { Upload, CheckCircle } from 'lucide-react';

export default function PPDBForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<PPDBRegistration>({
    nama: '',
    jenis_kelamin: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    nik: '',
    anak_ke: 1,
    asal_sekolah: '',
    alamat_sekolah: '',
    nama_ayah: '',
    nama_ibu: '',
    pekerjaan_ayah: '',
    pekerjaan_ibu: '',
    penghasilan_ortu: '',
    nama_wali: '',
    alamat_tinggal: '',
    no_whatsapp: '',
    kartu_keluarga_url: '',
    akte_kelahiran_url: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'anak_ke' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('ppdb_registrations')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        nama: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        nik: '',
        anak_ke: 1,
        asal_sekolah: '',
        alamat_sekolah: '',
        nama_ayah: '',
        nama_ibu: '',
        pekerjaan_ayah: '',
        pekerjaan_ibu: '',
        penghasilan_ortu: '',
        nama_wali: '',
        alamat_tinggal: '',
        no_whatsapp: '',
        kartu_keluarga_url: '',
        akte_kelahiran_url: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pendaftaran Berhasil!</h2>
        <p className="text-gray-600 mb-8">
          Terima kasih telah mendaftar. Kami akan menghubungi Anda melalui WhatsApp untuk informasi lebih lanjut.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-gradient-to-r from-green-700 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Daftar Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-green-50 border-l-4 border-green-700 p-4 mb-8">
        <p className="text-green-800 font-medium">INFORMASI PENDAFTARAN:</p>
        <p className="text-green-700 text-sm">Isi Bio data dengan lengkap dan benar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Kelamin <span className="text-red-500">*</span>
            </label>
            <select
              name="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">- Pilih -</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tempat Lahir <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tempat_lahir"
              value={formData.tempat_lahir}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Lahir <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              NIK <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              required
              maxLength={16}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anak Ke- <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="anak_ke"
            value={formData.anak_ke}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Asal Sekolah <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="asal_sekolah"
            value={formData.asal_sekolah}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alamat Sekolah <span className="text-red-500">*</span>
          </label>
          <textarea
            name="alamat_sekolah"
            value={formData.alamat_sekolah}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Ayah <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama_ayah"
              value={formData.nama_ayah}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Ibu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama_ibu"
              value={formData.nama_ibu}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pekerjaan Ayah <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pekerjaan_ayah"
              value={formData.pekerjaan_ayah}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pekerjaan Ibu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pekerjaan_ibu"
              value={formData.pekerjaan_ibu}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Penghasilan Orang Tua <span className="text-red-500">*</span>
          </label>
          <select
            name="penghasilan_ortu"
            value={formData.penghasilan_ortu}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">- Pilih -</option>
            <option value="< 1 Juta">{'< 1 Juta'}</option>
            <option value="1 - 3 Juta">1 - 3 Juta</option>
            <option value="3 - 5 Juta">3 - 5 Juta</option>
            <option value="> 5 Juta">{'>'}5 Juta</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Wali (Jika Ada)
          </label>
          <input
            type="text"
            name="nama_wali"
            value={formData.nama_wali}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alamat Tempat Tinggal <span className="text-red-500">*</span>
          </label>
          <textarea
            name="alamat_tinggal"
            value={formData.alamat_tinggal}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            No. WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="no_whatsapp"
            value={formData.no_whatsapp}
            onChange={handleChange}
            required
            placeholder="08xxxxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Upload className="inline w-4 h-4 mr-1" />
            Upload Kartu Keluarga (URL)
          </label>
          <input
            type="url"
            name="kartu_keluarga_url"
            value={formData.kartu_keluarga_url}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Upload file ke Google Drive dan paste link-nya di sini</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Upload className="inline w-4 h-4 mr-1" />
            Upload Akte Kelahiran (URL)
          </label>
          <input
            type="url"
            name="akte_kelahiran_url"
            value={formData.akte_kelahiran_url}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Upload file ke Google Drive dan paste link-nya di sini</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-[#005033] to-[#05764e] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Mengirim...' : 'DAFTAR SEKARANG'}
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              nama: '',
              jenis_kelamin: '',
              tempat_lahir: '',
              tanggal_lahir: '',
              nik: '',
              anak_ke: 1,
              asal_sekolah: '',
              alamat_sekolah: '',
              nama_ayah: '',
              nama_ibu: '',
              pekerjaan_ayah: '',
              pekerjaan_ibu: '',
              penghasilan_ortu: '',
              nama_wali: '',
              alamat_tinggal: '',
              no_whatsapp: '',
              kartu_keluarga_url: '',
              akte_kelahiran_url: ''
            })}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}
