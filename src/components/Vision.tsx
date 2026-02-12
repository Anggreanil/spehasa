import React from 'react';
import { Sparkles, Computer, Trophy, BookOpen } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="visi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-2xl mb-8">
            <Target className="w-8 h-8 text-white" />
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#005033] mb-6">
            Visi Sekolah
          </h2>
          
          <div className="flex items-center justify-center my-6">
            <div className="w-24 border-t-2 border-[#05764e]" />
            <Sparkles className="w-8 h-8 text-[#05764e] mx-4" />
            <div className="w-24 border-t-2 border-[#05764e]" />
          </div>

          {/* Vision Statement */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#005033] to-[#05764e] rounded-3xl opacity-5"></div>
            <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              {/* <Sparkles className="w-8 h-8 text-[#05764e] mx-auto mb-6" /> */}
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                "Terwujudnya Sekolah unggul dalam menghasilkan lulusan yang Berprestasi dan Berkarakter Ahlus-Sunnah Wal Jamaah An Nahdliyah"
              </blockquote>
            </div>
          </div>

          {/* Vision Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#005033] mb-2">Unggul Prestasi</h3>
              <p className="text-gray-600">Mengembangkan potensi akademik dan non-akademik siswa secara optimal</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Computer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#005033] mb-2">Unggul Iptek</h3>
              <p className="text-gray-600">Mengembangkan keunggulan dalam penerapan dan pelayanan pembelajaran berbasis teknologi informasi dan komunikasi</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005033] to-[#05764e] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#005033] mb-2">Unggul Imtaq</h3>
              <p className="text-gray-600">Mengembangkan pendidikan karakter dan akhlak mulia yang berlandaskan ajaran Ahlusunnah Waljama’ah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;