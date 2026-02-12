import React from 'react';
import { Building, FlaskRound as FlaskConical, Pill, BookOpen, Library, MoonStar, Monitor, Dumbbell, Sparkles } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Ruang Kelas Nyaman & Ber-AC",
      description: "Lingkungan belajar yang kondusif dengan fasilitas pendingin ruangan untuk kenyamanan maksimal",
      image: "/ruangkelas.jpeg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Laboratorium IPA",
      description: "Fasilitas praktikum lengkap untuk mendukung pembelajaran sains",
       image: "/labipa.jpeg",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Laboratorium Komputer",
      description: "Fasilitas praktikum lengkap untuk mendukung pembelajaran teknologi",
       image: "/labtik.jpg",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "Perpustakaan",
      description: "Koleksi buku lengkap dan akses digital untuk menunjang kegiatan literasi siswa",
      image: "/perpus.png",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MoonStar className="w-8 h-8" />,
      title: "Musholla",
      description: "Tempat ibadah yang nyaman untuk kegiatan spiritual dan pembinaan akhlak",
      image: "/musholla.jpg",
      color: "from-teal-500 to-teal-600"
    },
    {
  icon: <BookOpen className="w-8 h-8" />,
  title: "Laboratorium PAI",
  description: "Ruang praktik pembelajaran dan kegiatan keagamaan siswa",
  image: "/labpai.png",
  color: "from-orange-500 to-orange-600"
},
{
  icon: <Pill className="w-8 h-8" />,
  title: "UKS",
  description: "Fasilitas kesehatan dan pertolongan pertama bagi siswa",
  image: "/ukssekolah.png",
  color: "from-green-500 to-green-600"
}

    
  ];

  return (
    <section id="sarana" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#005033] mb-6">
              Sarana & Prasarana
            </h2>
            
            <div className="flex items-center justify-center my-6">
            <div className="w-24 border-t-2 border-[#05764e]" />
            <Sparkles className="w-8 h-8 text-[#05764e] mx-4" />
            <div className="w-24 border-t-2 border-[#05764e]" />
            </div>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal dan menyenangkan
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {facility.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#005033] mb-3 group-hover:text-[#05764e] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-1 bg-gradient-to-r from-[#005033] to-[#05764e] rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statistics */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005033] mb-2">24</div>
              <div className="text-gray-600">Ruang Kelas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005033] mb-2">3</div>
              <div className="text-gray-600">Laboratorium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005033] mb-2">5000+</div>
              <div className="text-gray-600">Koleksi Buku</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005033] mb-2">100%</div>
              <div className="text-gray-600">Coverage WiFi</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Facilities;