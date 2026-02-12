import { useState, useEffect } from 'react';
import { supabase, PPDBRegistration } from '../lib/supabase';
import { LogOut, RefreshCw, User } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [registrations, setRegistrations] = useState<PPDBRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReg, setSelectedReg] = useState<PPDBRegistration | null>(null);

  const fetchRegistrations = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('ppdb_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('ppdb_registrations')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchRegistrations();
    } catch (err) {
      alert('Gagal update status: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard - SPMB</h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Total Pendaftar: {registrations.length}</h2>
            <button
              onClick={fetchRegistrations}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nama</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Asal Sekolah</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">No. WA</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tanggal</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {registrations.map((reg, idx) => (
                  <tr key={reg.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium">{reg.nama}</td>
                    <td className="px-4 py-3 text-sm">{reg.asal_sekolah}</td>
                    <td className="px-4 py-3 text-sm">{reg.no_whatsapp}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        reg.status === 'approved' ? 'bg-green-100 text-green-800' :
                        reg.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {reg.status === 'approved' ? 'Diterima' :
                         reg.status === 'rejected' ? 'Ditolak' :
                         'Pending'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {reg.created_at ? new Date(reg.created_at).toLocaleDateString('id-ID') : '-'}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelectedReg(reg)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {registrations.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Belum ada pendaftar</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedReg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">Detail Pendaftar</h3>
              <button
                onClick={() => setSelectedReg(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Nama</label>
                  <p className="text-gray-800">{selectedReg.nama}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Jenis Kelamin</label>
                  <p className="text-gray-800">{selectedReg.jenis_kelamin}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Tempat Lahir</label>
                  <p className="text-gray-800">{selectedReg.tempat_lahir}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Tanggal Lahir</label>
                  <p className="text-gray-800">{selectedReg.tanggal_lahir}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">NIK</label>
                  <p className="text-gray-800">{selectedReg.nik}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Anak Ke-</label>
                  <p className="text-gray-800">{selectedReg.anak_ke}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Asal Sekolah</label>
                  <p className="text-gray-800">{selectedReg.asal_sekolah}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">No. WhatsApp</label>
                  <p className="text-gray-800">{selectedReg.no_whatsapp}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">Alamat Sekolah</label>
                <p className="text-gray-800">{selectedReg.alamat_sekolah}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Nama Ayah</label>
                  <p className="text-gray-800">{selectedReg.nama_ayah}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Pekerjaan Ayah</label>
                  <p className="text-gray-800">{selectedReg.pekerjaan_ayah}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Nama Ibu</label>
                  <p className="text-gray-800">{selectedReg.nama_ibu}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Pekerjaan Ibu</label>
                  <p className="text-gray-800">{selectedReg.pekerjaan_ibu}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Penghasilan Orang Tua</label>
                  <p className="text-gray-800">{selectedReg.penghasilan_ortu}</p>
                </div>
                {selectedReg.nama_wali && (
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Nama Wali</label>
                    <p className="text-gray-800">{selectedReg.nama_wali}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">Alamat Tempat Tinggal</label>
                <p className="text-gray-800">{selectedReg.alamat_tinggal}</p>
              </div>

              {selectedReg.kartu_keluarga_url && (
                <div>
                  <label className="text-sm font-semibold text-gray-600">Kartu Keluarga</label>
                  <a
                    href={selectedReg.kartu_keluarga_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline block"
                  >
                    Lihat Dokumen
                  </a>
                </div>
              )}

              {selectedReg.akte_kelahiran_url && (
                <div>
                  <label className="text-sm font-semibold text-gray-600">Akte Kelahiran</label>
                  <a
                    href={selectedReg.akte_kelahiran_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline block"
                  >
                    Lihat Dokumen
                  </a>
                </div>
              )}

              <div className="border-t pt-4 mt-6">
                <label className="text-sm font-semibold text-gray-600 block mb-3">Update Status</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (selectedReg.id) {
                        updateStatus(selectedReg.id, 'approved');
                        setSelectedReg(null);
                      }
                    }}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Terima
                  </button>
                  <button
                    onClick={() => {
                      if (selectedReg.id) {
                        updateStatus(selectedReg.id, 'pending');
                        setSelectedReg(null);
                      }
                    }}
                    className="flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => {
                      if (selectedReg.id) {
                        updateStatus(selectedReg.id, 'rejected');
                        setSelectedReg(null);
                      }
                    }}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Tolak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
