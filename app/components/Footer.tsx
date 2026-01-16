import Link from 'next/link';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { translations } from '../translations';

export default function Footer({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].footer;
  const n = translations[lang].nav;
  // Linklerin başına dil kodunu ekleyen yapı (TR ise boş, değilse /en vb.)
  const base = lang === "tr" ? "" : `/${lang}`;

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Bölüm 1: Logo ve Açıklama */}
          <div>
            <Link href={base || "/"} className="flex items-center justify-center md:justify-start gap-2 mb-4 group">
               <img 
                src="/logo.png" 
                alt="Nükleoplasti Logo" 
                className="h-8 w-auto grayscale group-hover:grayscale-0 transition duration-300" 
              />
              <span className="text-2xl font-bold text-white">Nükleoplasti<span className="text-blue-500">.tr</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.about}
            </p>
          </div>

          {/* Bölüm 2: Hızlı Erişim Linkleri */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3 inline-block md:block">{t.quick}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={base || "/"} className="hover:text-blue-400 transition">{n.home}</Link></li>
              <li><Link href={`${base}/nedir`} className="hover:text-blue-400 transition">{n.whatIs}</Link></li>
              <li><Link href={`${base}/tedavi`} className="hover:text-blue-400 transition">{n.process}</Link></li>
              <li><Link href={`${base}/blog`} className="hover:text-blue-400 transition">{n.blog}</Link></li>
              <li>
                <a href="https://www.emaryolla.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-bold hover:text-orange-400 transition flex items-center justify-center md:justify-start">
                  <span className="mr-2">📤</span> {n.mr}
                </a>
              </li>
              <li><Link href={`${base}/iletisim`} className="hover:text-blue-400 transition">{n.contact}</Link></li>
              <li className="pt-2 border-t border-gray-800 mt-2">
                <Link href={`${base}/kvkk`} className="text-xs hover:text-white transition opacity-50 uppercase tracking-wider">
                  {t.kvkk}
                </Link>
              </li>
            </ul>
          </div>

          {/* Bölüm 3: İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3 inline-block md:block">{t.contact}</h3>
            <div className="space-y-4 text-gray-400">
              <a href="mailto:info@nukleoplasti.tr" className="flex items-center justify-center md:justify-start group hover:text-white transition">
                <FaEnvelope className="text-xl mr-3 text-blue-500 group-hover:scale-110 transition" />
                <span>info@nukleoplasti.tr</span>
              </a>
              <a href="https://instagram.com/nukleoplastitr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start group hover:text-white transition">
                <FaInstagram className="text-xl mr-3 text-pink-500 group-hover:scale-110 transition" />
                <span>@nukleoplastitr</span>
              </a>
              <a href="https://www.tiktok.com/@nukleoplastitr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start group hover:text-white transition">
                <FaTiktok className="text-xl mr-3 text-gray-100 group-hover:scale-110 transition" /> 
                <span>@nukleoplastitr</span>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Telif ve Uyarı Kısmı */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; 2026 Nukleoplasti.tr - All rights reserved.</p>
          <p className="mt-2 leading-relaxed opacity-70">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}