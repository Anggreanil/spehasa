import { useState, useEffect, useRef } from 'react';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { useNavigate, Routes, Route } from 'react-router-dom';

import Sejarah from "./components/Sejarah";
import VisiMisi from './components/VisiMisi';
import Struktur from './components/Struktur';
import Sarana from './components/Sarana';
import Kontak from './components/Kontak';
import SpiritualLearning from './components/SpiritualLearning';
import Prestasi from './components/Prestasi';
import RuangKarya from './components/RuangKarya';
import KegiatanSekolah from './components/KegiatanSekolah';
import PendidikanKarakter from './components/PendidikanKarakter';
import KegAgSos from './components/KegAgSos';
import Ekstrakurikuler from './components/Ekstra';
import StudentOnStage from './components/StudentOnStage';
import PagiCeria from './components/PagiCeria';
import KelasBilingual from './components/KelasBilingualGallery';

import DetailBerita from "./components/DetailBerita";
import BeritaSekolah from "./components/BeritaSekolah";
import ContentSection from "./components/ContentSection";

export default function App() {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={(s) => navigate(s === 'home' ? '/' : `/${s}`)} />

      <div ref={contentRef}>
        <Routes>

<<<<<<< HEAD
          </ContentSection>
        );

      case 'visi-misi':
        return (
          <ContentSection title="Visi & Misi">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">VISI</h3>
              <p className="text-lg italic bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
                "Terwujudnya Sekolah unggul dalam menghasilkan lulusan yang Berprestasi dan Berkarakter Ahlus-Sunnah Wal Jamaah An Nahdliyah"
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">MISI</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li>Menyelenggarakan pembelajaran intrakurikuler dan kokurikuler bidang keislaman</li>
                <li>Menyelenggarakan pembelajaran intrakurikuler dan kokurikuler bidang ilmu pengetahuan dan teknologi dengan pendekatan PAIKEM dan Saintis</li>
                <li>Menyelenggarakan pembelajaran nilai-nilai kebangsaan melalui praktik pembiasaan kebangsaan</li>
                <li>Menyelenggarakan pembelajaran kepemimpinan melalui program leadership</li>
                <li>Menyelenggarakan pembinaan potensi siswa dalam aspek kognitif, afektif dan psikomotorik untuk mencapai prestasi akademik dan non-akademik</li>
                <li>Menyelenggarakan pembelajaran nilai-nilai moral dan spiritual melalui program praktik ibadah yang berlandaskan ajaran Islam Ahlus sunnah wal jama'ah An Nahdliyah</li>
                <li>Menyelenggarakan pembiasaan akhlak mulia dalam kehidupan sehari-hari melalui pembiasaan ibadah, kegiatan keagamaan, dan keteladanan dari guru</li>
              </ol>
            </div>
          </ContentSection>
        );

      case 'struktur':
        return (
          <ContentSection title="Struktur Organisasi">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Ketua BPM NU Tulangan</p>
                <p className="text-lg">Drs. Usman A.M</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
                <p className="font-semibold text-gray-700">Kepala Sekolah</p>
                <p className="text-lg font-bold">Dra. Hj. Ida Zulfiyah, M.Pd</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700">Wakil Kepala Kurikulum</p>
                  <p>Hadini Tri Septiana, S.S</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700">Wakil Kepala Kesiswaan</p>
                  <p>Wiwik Dwi Haryati, S.Si</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700">Wakil Kepala Sarana Prasarana</p>
                  <p>Irwan Fathoni, S.Pd</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700">Wakil Kepala Humas</p>
                  <p>Nur Saudah, S.Pd</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Ketua Komite</p>
                <p>M. Misdi, S.Pd</p>
              </div>
            </div>
          </ContentSection>
        );

      case 'spiritual-learning':
        return (
          <ContentSection title={"Spiritual Learning"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'pendidikan-berkarakter':
        return (
          <ContentSection title={"Pendidikan Berkarakter"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'kegiatan-agama-sosial':
        return (
          <ContentSection title={"Kegiatan Keagamaan  & Sosial"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );
      
      case 'ekstrakurikuler':
        return (
          <ContentSection title="Ekstrakurikuler">
            <p className="mb-6">
              Siswa dapat memilih ekstrakurikuler sesuai minat dan bakat mereka untuk mengembangkan potensi di luar kegiatan akademik.
</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Pagar Nusa', 'Pramuka', 'Aeromodelling', 'Bola Voli', 'Olympiade', 'Bulu Tangkis', 'Futsal', 'Drumband', 'Paskibra', 'Robotika', 'Menulis', 'Al-Banjari & Qiroah'].map((ekskul, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-700">
                  <p className="font-semibold text-gray-800">{ekskul}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        );

      case 'pagi-ceria':
        return (
          <ContentSection title={"Pagi Ceria"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'student-stage':
        return (
          <ContentSection title={"Student on Stage"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

        case 'prestasi':
        return (
          <ContentSection title={"Prestasi"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'sarana':
        return (
          <ContentSection title="Sarana & Prasarana">
            <p className="mb-6">SMP Hasjim Asj'ari dilengkapi dengan fasilitas modern untuk menunjang kegiatan belajar mengajar:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Ruang Kelas', count: '12 ruang' },
                { name: 'Laboratorium IPA', count: '1 ruang' },
                { name: 'Laboratorium Komputer', count: '1 ruang' },
                { name: 'Koperasi Sekolah', count: '1 ruang' },
                { name: 'Laboratorium PAI', count: '1 ruang' },
                { name: 'Perpustakaan', count: '1 ruang' },
                { name: 'Masjid', count: '1 unit' },
                { name: 'Lapangan Olahraga', count: '1 unit' },
                { name: 'Ruang UKS', count: '1 ruang' },
                { name: 'Kantin', count: '1 unit' },
                { name: 'Toilet Siswa', count: '27 unit' },
                { name: 'Wifi & Internet', count: 'Tersedia' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-green-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-green-700">{item.count}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        );

      case 'kontak':
        return (
          <ContentSection title="Hubungi Kami">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Alamat:</p>
                    <p>Jl. Raya Kepadangan No. 36, Tulangan – Sidoarjo, 61273</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Telepon:</p>
                    <p>(031) 8851671</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Email:</p>
                    <p>asjarihasjim@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">WhatsApp:</p>
                    <p>0899-3651-889</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open('https://wa.me/628993651889', '_blank')}
                  className="mt-6 bg-gradient-to-r from-[#005033] to-[#05764e] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Chat WhatsApp
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Senin - Jumat:</strong></p>
                  <p className="mb-4">07.00 - 15.00 WIB</p>
                  <p className="mb-2"><strong>Sabtu:</strong></p>
                  <p>07.00 - 12.00 WIB</p>
                </div>
              </div>
            </div>
          </ContentSection>
        );

      case 'ppdb':
        return (
          <ContentSection title="Formulir Pendaftaran SPMB 2026/2027">
            <PPDBForm />
          </ContentSection>
        );

    case 'berita':

  if (selectedBerita === 'munaqosah') {
    return (
      <ContentSection title="Berita Sekolah">
        <BeritaMunaqosah
  onBack={() => setSelectedBerita(null)}
/>
      </ContentSection>
    );
  }

  return (
    <ContentSection title="Berita Sekolah">
      <BeritaSekolah
        onSelectBerita={(id) => setSelectedBerita(id)}
      />
    </ContentSection>
  );

      default:
        return null;
    }
  };

 return (
  <div className="min-h-screen bg-gray-50">
    <Navbar onNavigate={handleNavigate} />

    <div ref={contentRef}>
      {currentSection !== 'admin-dashboard' && currentSection !== 'admin-login' && (
        <>
          {/* ✅ Hero tampil penuh layar */}
          {currentSection === 'home' && (
=======
          {/* HOME */}
          <Route path="/" element={
>>>>>>> 41b4815 (Update routing website sekolah)
            <>
              <Hero onNavigate={(s) => navigate(`/${s}`)} />
              <Highlights />
            </>
          } />

          {/* BERITA LIST */}
          <Route path="/berita" element={
            <ContentSection title="Berita Sekolah">
              <BeritaSekolah />
            </ContentSection>
          } />

          {/* DETAIL BERITA */}
          <Route path="/berita/:id" element={<DetailBerita />} />

          {/* PROFIL */}
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/sarana" element={<Sarana />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* PROGRAM */}
          <Route path="/spiritual-learning" element={<SpiritualLearning />} />
          <Route path="/pendidikan-berkarakter" element={<PendidikanKarakter />} />
          <Route path="/karya" element={<RuangKarya />} />
          <Route path="/kegiatan" element={<KegiatanSekolah />} />
          <Route path="/prestasi" element={<Prestasi />} />
          <Route path="/kegiatan-agama-sosial" element={<KegAgSos />} />
          <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
          <Route path="/student-stage" element={<StudentOnStage />} />
          <Route path="/pagi-ceria" element={<PagiCeria />} />
          <Route path="/kelas-bilingual" element={<KelasBilingual />} />

        </Routes>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}