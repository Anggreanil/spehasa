interface Props {
  onSelectBerita: (id: string) => void;
}

export default function BeritaSekolah({
  onSelectBerita
}: Props) {

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

        <img
          src="/berita-munaqosah.jpeg"
          alt="Berita Munaqosah"
          className="w-full h-60 object-cover"
        />

        <div className="p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
            SMP Hasjim Asj’ari Gelar Munaqosah dan Tasmi'
          </h2>

          <button
  onClick={() => onSelectBerita('munaqosah')}
  className="group inline-flex items-center gap-2 text-[#005033] font-semibold hover:text-[#05764e] transition"
>

  <span>
    Baca Selengkapnya
  </span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>

</button>

        </div>

      </div>

    </div>

  );
}