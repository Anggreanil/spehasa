import ContentSection from '../components/ContentSection';

export default function Struktur() {
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
}