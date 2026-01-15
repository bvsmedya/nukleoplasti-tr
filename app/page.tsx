import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer'ı içeri çağırdık
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero (Giriş) Bölümü */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ameliyatsız Bel Fıtığı Tedavisi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Nükleoplasti yöntemi ile ağrılarınızdan kesi ve dikiş olmadan kurtulun.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/nedir" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Bilgi Kutucukları */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Neştersiz</h3>
            <p className="text-gray-600">Ameliyatsız, sadece iğne deliğinden girilerek yapılan işlem.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Hızlı Taburcu</h3>
            <p className="text-gray-600">İşlemden 1-2 saat sonra yürüyerek eve dönebilirsiniz.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Güvenli</h3>
            <p className="text-gray-600">Sağlam dokulara zarar vermeyen ileri teknoloji.</p>
          </div>
        </div>
      </section>
      
      {/* En alta Footer ekledik */}
      <Footer />
    </div>
  );
}