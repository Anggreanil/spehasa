import { useNavigate } from 'react-router-dom';

export default function BeritaSekolah() {
  const navigate = useNavigate();

  const beritaList = [
    {
      id: "munaqosah",
      title: "SMP Hasjim Asj’ari Gelar Munaqosah dan Tasmi'",
      image: "/berita-munaqosah.jpeg",
      link: "/berita/munaqosah"
    },
    {
      id: "bilingual",
      title: "Ujian Praktik Kelas Bilingual: Public Speaking Skill",
      image: "/UPBing.jpeg",
      link: "/berita/bilingual"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {beritaList.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />

          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {item.title}
            </h2>

            <button
              onClick={() => navigate(item.link)}
              className="text-green-700 font-semibold hover:underline"
            >
              Baca Selengkapnya →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}