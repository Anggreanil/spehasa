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

          {/* HOME */}
          <Route path="/" element={
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