import React from 'react';
import { CheckCircle, BookOpen, Users, HandHeart, Lightbulb, Sparkles, Brain, Computer,Shield } from 'lucide-react';

const Mission: React.FC = () => {
  const missions = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Pendidikan Keislaman",
      description: "Menyelenggarakan pembelajaran intrakurikuler dan kokurikuler bidang keislaman"
    },
    {
      icon: <Computer className="w-6 h-6" />,
      title: "Pembelajaran Bebasis Digital",
      description: "Menyelenggarakan pembelajaran intrakurikuler dan kokurikuler bidang ilmu pengetahuan dan teknologi dengan pendekatan pembelajaran Aktif, Inovatif, Kreatif, Efektif, Menyenangkan (PAIKEM) dan Saintis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Karakter Sosial",
      description: "Menyelenggarakan pembelajaran nilai – nilai kebangsaan melalui praktik pembiasaan kebangsaan"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Pembelajaran Kepemimpinan",
      description: "Menyelenggarakan pembelajaran kepemimpinan melalui program leadership"
    },
     {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Pengembangan Potensi",
      description: "Menyelenggarakan pembinaan potensi siswa dalam aspek kognitif, efektif dan psikomotorik untuk mencapai prestasi akademik dan non-akademik"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Moral dan Spiritual",
      description: "Menyelenggarakan pembelajaran nilai-nilai moral dan spiritual melalui program praktik ibadah yang berlandaskan ajaran Islam Ahlus sunnah wal jama’ah An Nahdliyah"
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Akhlak Mulia",
      description: "Menyelengarakan pembiasaan akhlak mulia dalam kehidupan sehari-hari melalui pembiasaan ibadah, kegiatan keagamaan, dan keteladanan dari guru"
    }
  ];

  return (
    <section id="misi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-2xl mb-8">
              <CheckCircle className="w-8 h-8 text-white" />
            </div> */}
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#005033] mb-6">
              Misi Sekolah
            </h2>

            <div className="flex items-center justify-center my-6">
            <div className="w-24 border-t-2 border-[#05764e]" />
            <Sparkles className="w-8 h-8 text-[#05764e] mx-4" />
            <div className="w-24 border-t-2 border-[#05764e]" />
          </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami dalam mewujudkan visi melalui langkah-langkah strategis
            </p>
          </div>

          {/* Mission Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {mission.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#005033] mb-3 group-hover:text-[#05764e] transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-full flex items-center justify-center text-white text-sm font-bold opacity-80">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#005033] to-[#05764e] text-white px-6 py-3 rounded-full text-sm font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>Komitmen untuk Masa Depan yang Lebih Baik</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Mission;