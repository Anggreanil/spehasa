import ContentSection from '../components/ContentSection';
import TimelineKepalaSekolah from '../components/TimelineKepalaSekolah';

export default function Sejarah() {
  return (
    <ContentSection title="Sejarah SMP Hasjim Asj'ari">

      <p className="mb-4 text-justify indent-8">
        SMP Hasjim Asj’ari Tulangan Sidoarjo adalah lembaga pendidikan formal tingkat 
        menengah pertama yang didirikan pada tahun 1967, yang mana SMP Hasjim Asj’ari ini 
        berada di bawah naungan yayasan Badan Palaksana Pendidikan Ma’arif NU (BPPM NU).
        Sebelum ada nama SMP Hasjim Asj’ari, pada mulanya sekolah ini bernama 
        Muallimin Muallimat Hasjim Asj’ari Tulangan, yang mana lokasi pendidikannya di kantor 
        Sarbumusi yang bertempat di halaman Masjid Tulangan. Sekolah ini pertama kali 
        dikepalai oleh Bapak Kiayi Achmad Chudhori.
      </p>

      <p className="mb-4 text-justify indent-8">
        Pada waktu itu, masyarakat masih enggan menyekolahkan anaknya ke muallimin 
        Muallimat Hasjim Asj’ari, karena mereka beranggapan sekolah itu bernafaskan agama 
        dan kurang mementingkan pelajaran-pelajaran umum, sehingga mereka berpendapat 
        bahwa semua yang lulus Muallimin Muallimat Hasjim Asj’ari nantinya akan menjadi 
        Mudin. Padahal anggapan tersebut tidak benar.
      </p>

      <p className="mb-4 text-justify indent-8">
        Karena perluasan gedung Masjid Tulangan, maka kegiatan belajar mengajar dipindahkan 
        ke Pendopo Kelurahan Kepodang. Seiring waktu, masyarakat Kepadangan memberikan 
        sebidang tanah di sudut lapangan sebelah barat dengan luas 3.221 m², dengan penggunaan 
        bangunan sekitar 2.391 m². Pada tahun 1969, didirikanlah PGAP (Pendidikan Guru Agama 
        Pertama) Hasjim Asj’ari.
      </p>

      <p className="mb-4 text-justify indent-8">
        Sekolah PGAP ditempuh selama 4 tahun, kemudian berkembang menjadi PGAA 
        (Pendidikan Guru Agama Atas) dengan masa pendidikan 6 tahun. Seiring perkembangan 
        zaman dan kebutuhan IPTEK, PGAP dan PGAA akhirnya diubah menjadi SMP Hasjim Asj’ari, 
        serta PGAA dibagi menjadi SMA Persatuan dan SMK Persatuan.
      </p>

      <p className="text-justify indent-8">
        SMP Hasjim Asj’ari berlokasi di Jl. Raya Kepadangan No. 36, Desa Kepadangan, 
        Kecamatan Tulangan, Kabupaten Sidoarjo. Sekolah yang dikenal dengan nama SPEHASA ini 
        berlandaskan ajaran Ahlusunnah Waljama'ah, sehingga peserta didik tidak hanya 
        berprestasi dalam bidang akademik, tetapi juga memiliki keimanan, akhlak mulia, 
        dan karakter yang kuat.
      </p>

      <p className="mt-4 text-justify indent-8">
        Adapun susunan kepala sekolah dari awal berdiri hingga sekarang adalah sebagai berikut:
      </p>

      <div className="mt-6">
        <TimelineKepalaSekolah />
      </div>

    </ContentSection>
  );
}