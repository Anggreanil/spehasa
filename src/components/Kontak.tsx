import ContentSection from "../components/ContentSection";

export default function Kontak() {
  return (
    <ContentSection title="Hubungi Kami">
      <div className="grid md:grid-cols-2 gap-8">

        {/* KIRI */}
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
            className="mt-6 bg-gradient-to-r from-[#005033] to-[#05764e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            Chat WhatsApp
          </button>
        </div>

        {/* KANAN */}
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
}