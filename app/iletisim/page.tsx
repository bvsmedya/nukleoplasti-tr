import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa'; // İkonları buraya da ekledik

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">İletişim</h1>
          <p className="text-blue-200 mt-2">Sorularınız için bize ulaşın.</p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Instagram Kutusu */}
          <a href="https://instagram.com/nukleoplastitr" target="_blank" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition group">
            <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaInstagram size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
            <p className="text-gray-500 mt-2 text-sm">Güncel vaka ve bilgilendirmeler.</p>
            <span className="text-pink-600 font-bold mt-4">@nukleoplastitr</span>
          </a>

          {/* TikTok Kutusu */}
          <a href="https://www.tiktok.com/@nukleoplastitr" target="_blank" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition group">
            <div className="w-16 h-16 bg-gray-100 text-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaTiktok size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">TikTok</h3>
            <p className="text-gray-500 mt-2 text-sm">Videolu anlatımlar ve hasta hikayeleri.</p>
            <span className="text-gray-900 font-bold mt-4">@nukleoplastitr</span>
          </a>

          {/* E-Mail Kutusu */}
          <a href="mailto:nukleoplastitr@gmail.com" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaEnvelope size={30} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">E-Posta</h3>
            <p className="text-gray-500 mt-2 text-sm">Detaylı sorular ve MR sonuçları için.</p>
            <span className="text-blue-600 font-bold mt-4">nukleoplastitr@...</span>
          </a>

        </div>
      </div>

      <Footer />
    </div>
  );
}