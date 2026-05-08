import { useEffect } from 'react';

interface Props {
  onBack: () => void;
}

export default function BeritaBilingual({ onBack }: Props) {

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
    <section>

      {/* BUTTON KEMBALI */}
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition"
      >
        ← Kembali
      </button>

      {/* JUDUL */}
      <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
        Ujian Praktik Kelas Bilingual:
        Public Speaking Skill for Effective Presentation
      </h1>

      {/* INFO */}
      <div className="flex flex-wrap gap-3 text-gray-500 mb-8 text-sm">
        <span>Berita SPEHASA</span>
        <span>•</span>
        <span>Selasa, 29 April 2025</span>
      </div>

      {/* GAMBAR */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/UPBing.jpeg"
          alt="Ujian Praktik Bilingual"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* ISI BERITA */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-lg">

        <p>
          <strong>Tulangan</strong> – SMP Hasjim Asj’ari Tulangan kembali menunjukkan komitmennya 
          dalam meningkatkan kualitas pendidikan melalui program kelas bilingual. 
          Pada Selasa (29/4/2025), siswa kelas bilingual melaksanakan ujian praktik 
          bahasa Inggris dengan tema <em>“Public Speaking Skill for Effective Presentation”</em>.
        </p>

        <p>
          Kegiatan ini bertujuan untuk melatih kemampuan siswa dalam berbicara 
          di depan umum menggunakan bahasa Inggris secara percaya diri, 
          terstruktur, dan komunikatif.
        </p>

        <p>
          Dalam pelaksanaannya, setiap siswa menampilkan presentasi terbaik mereka 
          dengan berbagai topik menarik yang mencerminkan kemampuan berpikir kritis 
          serta kreativitas dalam menyampaikan ide.
        </p>

        <p>
          Selain kemampuan bahasa, siswa juga dinilai dari aspek penyampaian materi, 
          kepercayaan diri, ekspresi, serta kemampuan berinteraksi dengan audiens.
        </p>

        <p>
          Pihak sekolah menyampaikan bahwa kegiatan ini merupakan bagian dari 
          upaya membekali siswa dengan keterampilan komunikasi global yang sangat 
          dibutuhkan di era modern.
        </p>

        <p>
          “Kami ingin siswa tidak hanya pintar secara akademik, tetapi juga memiliki 
          kemampuan komunikasi yang baik, terutama dalam bahasa internasional,” 
          ujar salah satu guru pembimbing.
        </p>

        <p>
          Dengan adanya program ini, SMP Hasjim Asj’ari Tulangan terus berkomitmen 
          mencetak generasi unggul yang percaya diri, berprestasi, dan siap bersaing 
          di tingkat global.
        </p>

      </div>

      {/* SHARE BUTTON */}
      <div className="mt-12 flex flex-wrap items-center gap-4">

        <button
          onClick={() => {
            const shareData = {
              title: 'Ujian Praktik Kelas Bilingual SMP Hasjim Asj’ari',
              text: 'Public Speaking Skill for Effective Presentation',
              url: window.location.href,
            };

            if (navigator.share) {
              navigator.share(shareData);
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link disalin!');
            }
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-[#005033] to-[#05764e] hover:scale-105 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 active:scale-95"
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