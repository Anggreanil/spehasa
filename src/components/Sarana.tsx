import ContentSection from "../components/ContentSection";

export default function Sarana() {
  return (
    <ContentSection title="Sarana & Prasarana">
      <p className="mb-6">
        SMP Hasjim Asj'ari dilengkapi dengan fasilitas modern untuk menunjang kegiatan belajar mengajar:
      </p>

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
          { name: 'Toilet Siswa', count: '2 unit' },
          { name: 'Wifi & Internet', count: 'Tersedia' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-green-100 p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-green-700">{item.count}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}