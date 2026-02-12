import { Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleTikTokClick = () => {
    window.open(
      'https://www.tiktok.com/@smp.hasjim.asjari?is_from_webapp=1&sender_device=pc',
      '_blank'
    );
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/628993651889', '_blank'); // ganti dengan nomor resmi sekolah
  };

  return (
    <footer className="bg-gradient-to-br from-[#005033] to-[#05764e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo-sekolah.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">SMP HASJIM ASJ'ARI</h3>
                <p className="text-sm text-green-100">Tulangan - Sidoarjo</p>
              </div>
            </div>
            <p className="text-green-100 text-sm">
              Sekolah unggul dalam menghasilkan lulusan yang Berprestasi dan Berkarakter Ahlus-Sunnah Wal Jamaah An Nahdliyah.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <p className="text-green-100">
                  Jl. Raya Kepadangan No. 36<br />
                  Tulangan, Sidoarjo 61273
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-300" />
                <p className="text-green-100">(031) 8851671</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-300" />
                <p className="text-green-100">asjarihasjim@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Media Sosial */}
          <div>
            <h4 className="font-bold text-lg mb-4">Media Sosial</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hasjimasjaritulangan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@hasjimasjari6293"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <button
                onClick={handleTikTokClick}
                className="bg-white/20 p-3 rounded-full hover:bg-black transition-colors"
                aria-label="TikTok"
              >
                {/* Icon TikTok pakai SVG custom */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M31.5 6c1.2 2.5 3.7 4.5 6.5 5v6.1c-2.6-.1-5.2-.9-7.5-2.2v11.9c0 6.9-5.6 12.5-12.5 12.5S5.5 33.7 5.5 26.8s5.6-12.5 12.5-12.5c1.1 0 2.2.1 3.2.5v6.6c-.7-.3-1.5-.5-2.3-.5-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V6h6.6z" />
                </svg>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white/20 p-3 rounded-full hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-100">
          <p>© 2025 SMP HASJIM ASJ'ARI TULANGAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
