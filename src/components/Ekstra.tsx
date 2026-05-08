import ContentSection from "../components/ContentSection";

export default function Ekstrakurikuler() {
  return (
    <ContentSection title="Ekstrakurikuler">
      <p className="mb-6">
        Siswa dapat memilih ekstrakurikuler sesuai minat dan bakat mereka untuk mengembangkan potensi di luar kegiatan akademik.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'Pagar Nusa',
          'Pramuka',
          'Aeromodelling',
          'Bola Voli',
          'Olympiade',
          'Bulu Tangkis',
          'Futsal',
          'Drumband',
          'Paskibra',
          'Robotika',
          'Menulis',
          'Al-Banjari & Qiroah'
        ].map((ekskul, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-700"
          >
            <p className="font-semibold text-gray-800">{ekskul}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}