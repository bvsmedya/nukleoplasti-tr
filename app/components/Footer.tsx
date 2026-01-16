import Link from 'next/link';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Bölüm 1: Logo ve Açıklama */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
               {/* Logo Resmi */}
               <img 
                src="/logo.png" 
                alt="Nükleoplasti Logo" 
                className="h-8 w-auto grayscale group-hover:grayscale-0 transition duration-300" 
              />
              <span className="text-2xl font-bold">Nükleoplasti<span className="text-blue-500">.tr</span></span>
            </Link>
            <p className="text-gray-400 text-sm">
              Ameliyatsız bel ve boyun fıtığı tedavisinde güncel teknoloji, uzman hekim kadrosu ve güvenilir bilgi kaynağınız.
            </p>
          </div>

          {/* Bölüm 2: Hızlı Erişim (GÜNCELLENDİ) */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link></li>
              <li><Link href="/nedir" className="hover:text-blue-400 transition">Nükleoplasti Nedir?</Link></li>
              <li><Link href="/tedavi" className="hover:text-blue-400 transition">Tedavi Süreci</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog & Makaleler</Link></li>
              <li>
                <a href="https://www.emaryolla.com" target="_blank" className="text-orange-500 font-bold hover:text-orange-400 transition flex items-center">
                  <span className="mr-2">📤</span> Emar Yolla
                </a>
              </li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition">İletişim</Link></li>
            </ul>
          </div>

          {/* Bölüm 3: İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bize Ulaşın</h3>
            <div className="space-y-4 text-gray-400">
              
              {/* Mail */}
              <a href="mailto:info@nukleoplasti.tr" className="flex items-center group hover:text-white transition">
                <FaEnvelope className="text-xl mr-3 text-blue-500 group-hover:scale-110 transition" />
                <span>info@nukleoplasti.tr</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/nukleoplastitr" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-white transition">
                <FaInstagram className="text-xl mr-3 text-pink-500 group-hover:scale-110 transition" />
                <span>@nukleoplastitr</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@nukleoplastitr" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-white transition">
                <FaTiktok className="text-xl mr-3 text-gray-100 group-hover:scale-110 transition" /> 
                <span>@nukleoplastitr</span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; 2026 Nukleoplasti.tr - Tüm hakları saklıdır.</p>
          <p className="mt-2">Bu sitedeki bilgiler bilgilendirme amaçlıdır. Tanı ve tedavi için doktorunuza başvurun.</p>
        </div>
      </div>
    </footer>
  );
}