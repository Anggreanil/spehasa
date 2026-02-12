import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { MenuItem } from '../types';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { label: 'Beranda', link: 'home' },
    {
      label: 'Tentang',
      sub: [
        { label: 'Sejarah', link: 'sejarah' },
        { label: 'Visi & Misi', link: 'visi-misi' },
        { label: 'Struktur', link: 'struktur' }
      ]
    },
    {
      label: 'Program Sekolah',
      sub: [
        { label: 'Kelas Bilingual', link: 'kelas-bilingual' },
        { label: 'Spiritual Learning', link: 'spiritual-learning' },
        { label: 'Pendidikan Berkarakter', link: 'pendidikan-berkarakter' },
        { label: 'Kegiatan Keagamaan & Sosial', link: 'kegiatan-agama-sosial' },
        { label: 'Ekstrakurikuler', link: 'ekstrakurikuler' },
        { label: 'Pagi Ceria', link: 'pagi-ceria' },
        { label: 'Student on Stage', link: 'student-stage' }
      ]
    },
    {
      label: 'Aktivitas',
      sub: [
        { label: 'Berita Sekolah', link: 'berita' },
        { label: 'Ruang Karya', link: 'karya' },
        { label: 'Kegiatan Sekolah', link: 'kegiatan' },
         { label: 'Prestasi', link: 'prestasi' }
      ]
    },
    { label: 'Sarana', link: 'sarana' },
    { label: 'Hubungi Kami', link: 'kontak' },
    //{ label: 'SPMB', link: 'ppdb' }
  ];

  const handleMenuClick = (link?: string) => {
    if (link) {
      onNavigate(link);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/logo-sekolah.png"
              alt="Logo SMP Hasjim Asj'ari"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-[#005033] leading-tight">
                SMP HASJIM ASJ'ARI
              </h1>
              <p className="text-sm text-[#05764e] leading-none">TULANGAN</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.sub ? (
                  <>
                    <button className="px-4 py-2 text-gray-700 hover:text-green-700 font-medium flex items-center gap-1 transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.sub.map((subItem, subIdx) => (
                        <button
                          key={subIdx}
                          onClick={() => handleMenuClick(subItem.link)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
    onClick={() => handleMenuClick(item.link)}
    className={`w-full text-left px-4 py-2 font-medium ${
      item.label === 'SPMB'
        ? 'mt-2 px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#005033] to-[#05764e] text-white shadow-md hover:scale-105 transition-transform'
        : 'text-gray-700'
    }`}
  >
    {item.label}
  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuItems.map((item, idx) => (
              <div key={idx} className="py-2">
                {item.sub ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 font-medium"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-8 space-y-1">
                        {item.sub.map((subItem, subIdx) => (
                          <button
                            key={subIdx}
                            onClick={() => handleMenuClick(subItem.link)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-green-700"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleMenuClick(item.link)}
                    className={`w-full text-left px-4 py-2 font-medium ${
                      item.label === 'SPMB'
                        ? 'bg-gradient-to-r from-green-700 to-blue-600 text-white rounded-md mx-4'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
