import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">İletişim</h1>
          <p className="text-blue-200 mt-2">Türkiye'nin her yerinden bize ulaşabilirsiniz.</p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-4 py-16 w-full">
        
        {/* Üst Kısım: Sosyal Medya */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
           {/* Instagram */}
           <a href="https://instagram.com/nukleoplastitr" target="_blank" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center hover:shadow-md transition group">
            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition">
              <FaInstagram size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
              <span className="text-pink-600 font-medium">@nukleoplastitr</span>
            </div>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@nukleoplastitr" target="_blank" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center hover:shadow-md transition group">
            <div className="w-14 h-14 bg-gray-100 text-black rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition">
              <FaTiktok size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">TikTok</h3>
              <span className="text-gray-900 font-medium">@nukleoplastitr</span>
            </div>
          </a>
        </div>

        {/* Alt Kısım: E-Posta Adresleri */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">E-Posta İletişim Hattı</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Genel Merkez */}
          <a href="mailto:info@nukleoplasti.tr" className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center hover:border-blue-300 transition group">
            <FaEnvelope size={32} className="text-blue-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-gray-800">Genel Bilgi</h3>
            <p className="text-sm text-gray-500 mb-3">Randevu ve sorularınız için</p>
            <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1 rounded-full text-sm">info@nukleoplasti.tr</span>
          </a>

          {/* İstanbul */}
          <a href="mailto:istanbul@nukleoplasti.tr" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-blue-300 transition group">
            <FaMapMarkerAlt size={32} className="text-red-500 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-gray-800">İstanbul Bölge</h3>
            <p className="text-sm text-gray-500 mb-3">İstanbul içi hasta danışma</p>
            <span className="text-gray-700 font-bold bg-gray-100 px-4 py-1 rounded-full text-sm">istanbul@nukleoplasti.tr</span>
          </a>

          {/* İzmir */}
          <a href="mailto:izmir@nukleoplasti.tr" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-blue-300 transition group">
            <FaMapMarkerAlt size={32} className="text-blue-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-gray-800">İzmir Bölge</h3>
            <p className="text-sm text-gray-500 mb-3">Ege bölgesi hasta danışma</p>
            <span className="text-gray-700 font-bold bg-gray-100 px-4 py-1 rounded-full text-sm">izmir@nukleoplasti.tr</span>
          </a>

        </div>
      </div>

      <Footer />
    </div>
  );
}