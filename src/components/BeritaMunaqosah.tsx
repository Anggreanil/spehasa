import { useEffect } from 'react';

export default function BeritaMunaqosah() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">

      {/* JUDUL */}
      <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
        SMP Hasjim Asj’ari Tulangan Gelar Kegiatan
        Munaqosah dan Tasmi’ Juz 30 Tahun 2026
      </h1>

      {/* INFO */}
      <div className="flex flex-wrap gap-3 text-gray-500 mb-8 text-sm">
        <span>Berita SPEHASA</span>
        <span>•</span>
        <span>Rabu, 06 Mei 2026</span>
      </div>

      {/* GAMBAR BERITA */}
<div className="mb-10 rounded-2xl overflow-hidden shadow-md">
  <img
    src="/berita-munaqosah.jpeg"
    alt="Berita Munaqosah"
    className="w-full h-[500px] object-cover"
  />
</div>

      {/* ISI BERITA */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-lg">

        <p>
          <strong>Tulangan</strong> – SMP Hasjim Asj’ari Tulangan
          menggelar kegiatan Munaqosah dan Tasmi’ Juz 30 Tahun 2026 yang
          berlangsung dengan penuh khidmat dan semangat religius di lingkungan
          sekolah, Rabu (6/5/2026).
        </p>

        <p>
          Kegiatan tersebut menjadi bagian dari program unggulan sekolah dalam
          membentuk karakter islami sekaligus menguji kemampuan hafalan
          Al-Qur’an para siswa, khususnya hafalan Juz 30.
        </p>

        <p>
          Dalam pelaksanaannya, para peserta mengikuti munaqosah dan tasmi’
          di hadapan para guru pembimbing dan penguji. Mereka diminta
          menyetorkan hafalan surat-surat dalam Juz 30 dengan memperhatikan
          kelancaran bacaan, tajwid, serta makharijul huruf.
        </p>

        <p>
          Pihak sekolah menyampaikan bahwa kegiatan ini tidak hanya menjadi
          evaluasi pembelajaran tahfidz, tetapi juga sebagai bentuk pembiasaan
          siswa agar semakin dekat dengan Al-Qur’an dalam kehidupan sehari-hari.
        </p>

        <p>
          “Melalui kegiatan munaqosah dan tasmi’ ini, kami berharap siswa tidak
          hanya mampu menghafal, tetapi juga menjaga serta mengamalkan
          nilai-nilai Al-Qur’an dalam kehidupan mereka,” ujar salah satu guru
          pembimbing.
        </p>

        <p>
          Suasana kegiatan berlangsung tertib dan penuh antusias. Para siswa
          tampak serius mempersiapkan hafalan terbaik mereka sebelum maju
          mengikuti ujian tasmi’.
        </p>

        <p>
          Salah satu peserta mengaku sempat merasa gugup saat menyetorkan
          hafalan di depan penguji. Namun dirinya bersyukur dapat menyelesaikan
          tasmi’ dengan lancar berkat bimbingan para guru.
        </p>

        <p>
          “Awalnya deg-degan, tapi alhamdulillah bisa lancar. Semoga hafalan
          ini tetap terjaga dan bermanfaat,” ungkapnya.
        </p>

        <p>
          Selain menjadi ajang evaluasi, kegiatan ini juga diharapkan mampu
          menumbuhkan motivasi bagi seluruh siswa SMP Hasjim Asj’ari Tulangan
          untuk semakin mencintai Al-Qur’an dan meningkatkan kualitas ibadah
          mereka.
        </p>

        <p>
          Dengan terselenggaranya kegiatan Munaqosah dan Tasmi’ Juz 30 Tahun
          2026 ini, SMP Hasjim Asj’ari Tulangan terus berkomitmen mencetak
          generasi muda yang unggul dalam akademik, berakhlak mulia, serta
          memiliki kedekatan kuat dengan Al-Qur’an.
        </p>

      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">

  <button
    onClick={() => {
      navigator.share({
        title: 'SMP Hasjim Asj’ari Tulangan Gelar Kegiatan Munaqosah dan Tasmi’ Juz 30 Tahun 2026',
        text: 'Berita kegiatan Munaqosah dan Tasmi’ Juz 30 SMP Hasjim Asj’ari Tulangan',
        url: window.location.href,
      });
    }}
    className="flex items-center gap-2 bg-gradient-to-r from-[#005033] to-[#05764e] hover:scale-105 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
  >

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0-3.182m0 3.182 7.566 4.318m0 0a2.25 2.25 0 1 0 3.182-3.182m-3.182 3.182-7.566-4.318m0 0a2.25 2.25 0 1 1 0-3.182"
      />
    </svg>

    <span className="font-semibold">
      Share Berita
    </span>

  </button>

</div>

    </section>
  );
}
