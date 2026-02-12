import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Sekolah",
      content:
        "Jl. Raya Tulangan No. 123, Tulangan, Sidoarjo, Jawa Timur 61273",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Nomor Telepon",
      content: "(031) 8661234 ",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Sekolah",
      content: "asjarihasjim@gmail.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 06:45 - 15:30 WIB",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005033] mb-6">
              Hubungi Kami
            </h2>

            <div className="flex items-center justify-center my-6">
              <div className="w-24 border-t-2 border-[#05764e]" />
              <Sparkles className="w-8 h-8 text-[#05764e] mx-4" />
              <div className="w-24 border-t-2 border-[#05764e]" />
            </div>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Kami siap membantu dan menjawab pertanyaan Anda tentang pendidikan
              di SMP Hasjim Asj'ari Tulangan
            </p>
          </div>

          {/* Contact & Map Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Information */}
            <div className="space-y-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#005033] mb-8">
                Informasi Kontak
              </h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#005033] mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="space-y-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#005033] mb-8">
                Lokasi Sekolah
              </h3>

              <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.24158435886343!2d112.64372662817324!3d-7.480117572919228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e049e04488d1%3A0x1aa761de448d7ee6!2sSMP%20Hasjim%20Asjari!5e0!3m2!1sen!2sid!4v1756399241464!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
