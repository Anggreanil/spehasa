import ContentSection from '../components/ContentSection';

export default function VisiMisi() {
  return (
    <ContentSection title="Visi & Misi">

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4">VISI</h3>
        <p className="text-lg italic bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
          "Terwujudnya Sekolah unggul dalam menghasilkan lulusan yang Berprestasi 
          dan Berkarakter Ahlus-Sunnah Wal Jamaah An Nahdliyah"
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
}