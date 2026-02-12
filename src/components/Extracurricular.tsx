import React from 'react';
import { Sparkles, Users, Shield, Rocket, Plane, Zap, Music, Globe, Heart } from 'lucide-react';

const Extracurricular: React.FC = () => {
  const activities = [
    {
      title: "Pencak Silat",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      image: "/pagarnusa.png"
    },
    {
      title: "Pramuka",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      image: "/pramuka.jpg"
    },
    {
      title: "Aeromodelling",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      image: "/aero.jpeg"
    },
    {
      title: "Bola Voli",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      image: "/voli.png"
    },
    {
      title: "Futsal",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      image: "/futsal.jpeg"
    },
    {
      title: "Paskibra",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      image: "/paskibra.png"
    },
    {
      title: "Drumband",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      image: "/drumband.jpeg"
    },
    {
      title: "Olympiade",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      image: "/olym.png"
    },
    {
      title: "Robotika",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      image: "/pagarnusa.jpeg"
    },
    {
      title: "Menulis",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      image: "/pramuka.jpg"
    },
    {
      title: "Al Banjari & Qiroah",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      image: "/banjari.jpeg"
    },
    {
      title: "Bulu Tangkis",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      image: "/bultang.png"
    },
    {
      title: "Menulis",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      image: "/menulis.png"
    }
  ];

  return (
    <section id="ekstrakurikuler" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005033] mb-6">
              Ekstrakurikuler
            </h2>

            <div className="flex items-center justify-center my-6">
              <div className="w-24 border-t-2 border-[#05764e]" />
              <Sparkles className="w-8 h-8 text-[#05764e] mx-4" />
              <div className="w-24 border-t-2 border-[#05764e]" />
            </div>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Beragam kegiatan pengembangan minat dan bakat untuk membentuk siswa yang berkarakter dan berprestasi
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`group ${activity.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >

{/* Kalau ada foto → tampil di bawah icon */}
{activity.image && (
  <img
    src={activity.image}
    alt={activity.title}
    className="w-full h-40 object-cover rounded-xl mb-6"
  />
)}


                <h3 className="text-xl font-bold text-[#005033] mb-4 text-center group-hover:text-[#05764e] transition-colors">
                  {activity.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {activity.description}
                </p>

                {/* Hover Effect Indicator */}
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#005033] to-[#05764e] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="bg-gradient-to-r from-[#005033] to-[#05764e] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bergabunglah Bersama Kami!
            </h3>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Setiap ekstrakurikuler dibimbing oleh pengajar berpengalaman dan dilengkapi dengan fasilitas yang memadai
            </p>
            <button
              onClick={() => scrollToSection('ppdb')}
              className="mt-2 px-6 py-2 rounded-full text-sm font-semibold bg-white text-[#005033] shadow-md hover:scale-105 transition-transform"
            >
              DAFTAR SEKARANG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
