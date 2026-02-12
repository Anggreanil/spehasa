import { useState, useEffect, useRef } from 'react';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ContentSection from './components/ContentSection';
import PPDBForm from './components/PPDBForm';
import AdminDashboard from './components/AdminDashboard';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { User, Shield } from 'lucide-react';
import TimelineKepalaSekolah from './components/TimelineKepalaSekolah';

type Section = 'home' | 'sejarah' | 'visi-misi' | 'struktur' | 'kelas-bilingual' | 'spiritual-learning' | 'pendidikan-berkarakter' | 'kegiatan-agama-sosial' | 'ekstrakurikuler' | 'pagi-ceria' | 'prestasi'| 'student-stage' | 'berita' | 'karya' | 'kegiatan' | 'sarana' | 'kontak' | 'ppdb' | 'admin-login' | 'admin-dashboard';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('admin_users')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    setIsAdmin(!!data);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    try {
      if (authView === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setCurrentSection('admin-dashboard');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setAuthError('Akun berhasil dibuat. Silakan login.');
        setAuthView('login');
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentSection('home');
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (currentSection === 'admin-dashboard') {
      if (!user || !isAdmin) {
        return (
          <div className="max-w-md mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-700">Anda tidak memiliki akses admin. Silakan login dengan akun admin.</p>
            </div>
            <button
              onClick={() => setCurrentSection('admin-login')}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Kembali ke Login
            </button>
          </div>
        );
      }
      return <AdminDashboard onLogout={handleLogout} />;
    }

    if (currentSection === 'admin-login') {
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              {authError && (
                <div className={`p-3 rounded ${authError.includes('berhasil') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400"
              >
                {authLoading ? 'Loading...' : authView === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setAuthView(authView === 'login' ? 'signup' : 'login');
                  setAuthError(null);
                }}
                className="text-green-600 hover:underline text-sm"
              >
                {authView === 'login' ? 'Belum punya akun? Sign Up' : 'Sudah punya akun? Login'}
              </button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentSection('home')}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      );
    }

    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Highlights />
          </>
        );

      case 'sejarah':
  return (
    <ContentSection title="Sejarah SMP Hasjim Asj'ari">
      <p className="mb-4 text-justify indent-8">
        SMP Hasjim Asj’ari Tulangan Sidoarjo adalah lembaga pendidikan formal tingkat 
        menengah pertama yang didirikan pada tahun 1967, yang mana SMP Hasjim Asj’ari ini 
        berada di bawah naungan yayasan Badan Palaksana Pendidikan Ma’arif NU (BPPM NU).
        Sebelum ada nama SMP Hasjim Asj’ari, pada mulanya sekolah ini bernama 
        Muallimin Muallimat Hasjim Asj’ari Tulangan, yang mana lokasi pendidikannya di kantor 
        Sarbumusi yang bertempat di halaman Masjid Tulangan. Sekolah ini pertama kali dikepalai 
        oleh Bapak Kiayi Achmad Chudhori.
      </p>
      <p className="mb-4 text-justify indent-8">
        Pada waktu itu, masyarakat masih enggan menyekolahkan anaknya ke muallimin 
        Muallimat Hasjim Asj’ari, karena mereka beranggapan sekolah itu bernafaskan agama dan 
        kurang mementingkan pelajaran-pelajaran umum, sehingga mereka berpendapat bahwa 
        semua yang lulus Muallimin Muallimat Hasjim Asj’ari, nantinya akan menjadi Mudin. 
        Padahal anggapan orang-orang pada saat itu tidak benar.
      </p>
      <p className="mb-4 text-justify indent-8">
        Karena perluasan gedung masjid Tulangan itu dibongkar, maka kegiatan belajar 
        mengajar dipindahkan ke Pendopo Kelurahan Kepodang yang pada 61–62 waktu itu orang-
        orang menyebutnya dengan nama Lurah Mad. Namun, lama kelamaan masyarakat 
        Kepadangan memberikan sebidang tanah di sudut lapangan Kepadangan sebelah Barat 
        dengan luas 3.221 m², kemudian penggunaan tanah untuk bangunan sekolah sekitar 
        2.391 m². Maka, pada tahun 1969 didirikanlah sebuah sekolah yang diberi nama PGAP 
        (Pendidikan Guru Agama Pertama) Hasjim Asj’ari.
      </p>
      <p className="mb-4 text-justify indent-8">
        Sekolah PGAP ditempuh selama jenjang 4 tahun. Kemudian dikembangkan lagi 
        menjadi PGAA (Pendidikan Guru Agama Atas) Hasjim Asj’ari yang harus ditempuh 
        selama 6 tahun, yang mana sekolah ini masih dikepalai Bapak Kiayi Ahmad Chudhori.
        Akan tetapi tahun demi tahun berganti, terjadilah suatu kemajuan yang sangat pesat, 
        sehingga yang dulu enggan menyekolahkan anaknya di SMP Hasjim Asj’ari, kini banyak 
        orang tua yang menyekolahkan putra-putrinya di SMP Hasjim Asj’ari Tulangan Sidoarjo.
        Karena pesatnya siswa yang masuk dan tuntutan IPTEK (Ilmu Pengetahuan dan 
        Teknologi), maka PGAP dan PGAA Hasjim Asj’ari diubah menjadi SMP Hasjim Asj’ari 
        dan PGAA dibagi menjadi dua, yakni SMA Persatuan dan sekolah kejuruan yakni SMK 
        Persatuan.
      </p>
      <p className="text-justify indent-8">
        SMP Hasjim Asj’ari adalah Sekolah Menengah Pertama yang berlokasi di Jl. Raya 
        Kepadangan Nomor 36, Rt 09 Rw 03. Desa Kepadangan Kecamatan Tulangan Kabupaten 
        Sidoarjo. Sekolah dengan sebutan SPEHASA didirikan dengan berlandaskan ajaran 
        "Ahlusunnah Waljama'ah". Sehingga peserta didik tidak hanya dididik dan dibentuk 
        sebagai peserta didik yang berprestasi, berimtek, tetapi juga menjadi peserta didik yang 
        berimtaq, berakhlak dan selalu berpegang teguh pada ajaran Ahlusunnah Waljama'ah.
      </p>
      <p className="text-justify indent-8">
          Adapun susunan Kepala sekolah dari awal berdiri sampai sekarang adalah sebagia 
berikut:
      </p>
<br />

<TimelineKepalaSekolah />

          </ContentSection>
        );

      case 'visi-misi':
        return (
          <ContentSection title="Visi & Misi">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">VISI</h3>
              <p className="text-lg italic bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
                "Terwujudnya Sekolah unggul dalam menghasilkan lulusan yang Berprestasi dan Berkarakter Ahlus-Sunnah Wal Jamaah An Nahdliyah"
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

      case 'struktur':
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

      case 'kelas-bilingual':
        return (
          <ContentSection title={"Kelas Bilingual"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'spiritual-learning':
        return (
          <ContentSection title={"Spiritual Learning"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'pendidikan-berkarakter':
        return (
          <ContentSection title={"Pendidikan Berkarakter"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'kegiatan-agama-sosial':
        return (
          <ContentSection title={"Kegiatan Keagamaan  & Sosial"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );
      
      case 'ekstrakurikuler':
        return (
          <ContentSection title="Ekstrakurikuler">
            <p className="mb-6">
              Siswa dapat memilih ekstrakurikuler sesuai minat dan bakat mereka untuk mengembangkan potensi di luar kegiatan akademik.
</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Pagar Nusa', 'Pramuka', 'Aeromodelling', 'Bola Voli', 'Olympiade', 'Bulu Tangkis', 'Futsal', 'Drumband', 'Paskibra', 'Robotika', 'Menulis', 'Al-Banjari & Qiroah'].map((ekskul, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-700">
                  <p className="font-semibold text-gray-800">{ekskul}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        );

      case 'pagi-ceria':
        return (
          <ContentSection title={"Pagi Ceria"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'student-stage':
        return (
          <ContentSection title={"Student on Stage"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

        case 'prestasi':
        return (
          <ContentSection title={"Prestasi"
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      case 'sarana':
        return (
          <ContentSection title="Sarana & Prasarana">
            <p className="mb-6">SMP Hasjim Asj'ari dilengkapi dengan fasilitas modern untuk menunjang kegiatan belajar mengajar:</p>
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
                { name: 'Toilet Siswa', count: '27 unit' },
                { name: 'Wifi & Internet', count: 'Tersedia' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-green-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-green-700">{item.count}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        );

      case 'kontak':
        return (
          <ContentSection title="Hubungi Kami">
            <div className="grid md:grid-cols-2 gap-8">
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
                  className="mt-6 bg-gradient-to-r from-[#005033] to-[#05764e] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Chat WhatsApp
                </button>
              </div>
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

      case 'ppdb':
        return (
          <ContentSection title="Formulir Pendaftaran SPMB 2026/2027">
            <PPDBForm />
          </ContentSection>
        );

      case 'berita':
      case 'karya':
      case 'kegiatan':
        return (
          <ContentSection title={
            currentSection === 'berita' ? 'Berita Sekolah' :
            currentSection === 'karya' ? 'Ruang Karya' : 'Kegiatan Sekolah'
          }>
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Konten akan segera hadir</p>
            </div>
          </ContentSection>
        );

      default:
        return null;
    }
  };

 return (
  <div className="min-h-screen bg-gray-50">
    <Navbar onNavigate={handleNavigate} />

    <div ref={contentRef}>
      {currentSection !== 'admin-dashboard' && currentSection !== 'admin-login' && (
        <>
          {/* ✅ Hero tampil penuh layar */}
          {currentSection === 'home' && (
            <>
              <Hero onNavigate={handleNavigate} />
              <Highlights />
            </>
          )}

          {/* ✅ Konten lain tetap di dalam container */}
          {currentSection !== 'home' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {renderContent()}
            </div>
          )}
        </>
      )}

      {/* ✅ Halaman admin login & dashboard */}
      {(currentSection === 'admin-dashboard' || currentSection === 'admin-login') && renderContent()}
    </div>

    {/* ✅ Footer & WhatsApp hanya tampil di halaman umum */}
    {currentSection !== 'admin-dashboard' && currentSection !== 'admin-login' && (
      <>
        <Footer />
        <WhatsAppButton />
      </>
    )}

    {/* ✅ Tombol admin login (mengambang di kanan bawah) */}
    {!user && currentSection !== 'admin-login' && currentSection !== 'admin-dashboard' && (
      <button
        onClick={() => setCurrentSection('admin-login')}
        className="fixed bottom-24 right-6 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-40"
        title="Admin Login"
      >
        <Shield className="w-5 h-5" />
      </button>
    )}
  </div>
);

}
