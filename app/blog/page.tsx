import Navbar from "../components/Navbar"; // Sadece 2 nokta (Bir üst klasör)
import Footer from "../components/Footer"; // Sadece 2 nokta
import Link from "next/link";


export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Başlık */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Blog & Makaleler</h1>
        <p className="text-blue-200 mt-2">Güncel tedavi yöntemleri ve bilimsel veriler.</p>
      </div>

      {/* Yazı Listesi (Grid) */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex-grow w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* YAZI 1: Genel Bilgi */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <span className="text-6xl">🧬</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Genel Bilgi</span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition">
                Nükleoplasti Nedir?
              </h2>
              <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                Ameliyatsız fıtık tedavisinde devrim yaratan Coblation teknolojisi ve işlem süreci hakkında her şey.
              </p>
              <div className="mt-auto pt-4">
                <Link href="/blog/nukleoplasti-nedir" className="text-blue-600 font-semibold hover:underline">
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>

          {/* YAZI 2: Boyun Fıtığı */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <span className="text-6xl">🧣</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Boyun Fıtığı</span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-purple-600 transition">
                Boyun Fıtığında Çözüm
              </h2>
              <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                CervaLance teknolojisi ile boyun fıtıklarına güvenli yaklaşım. Riskler nelerdir, kimlere uygulanır?
              </p>
              <div className="mt-auto pt-4">
                <Link href="/blog/boyun-fitiginda-nukleoplasti" className="text-purple-600 font-semibold hover:underline">
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>

          {/* YAZI 3: Bel Fıtığı (YENİ EKLENDİ!) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <span className="text-6xl">🦴</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Bel Fıtığı</span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-green-600 transition">
                Bel Fıtığında Nokta Atışı
              </h2>
              <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                Siyatik ağrısı ve bacak uyuşmasında LumbaLance teknolojisi ile tanışın. Açık ameliyatın alternatifi.
              </p>
              <div className="mt-auto pt-4">
                <Link href="/blog/bel-fitiginda-nukleoplasti" className="text-green-600 font-semibold hover:underline">
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}