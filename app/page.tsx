import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import TreatmentAreas from "./components/TreatmentAreas"; // İşte eksik olan satır buydu!
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Slider (Manşet) */}
      <HeroSlider />

      {/* Bilgi Kutucukları */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Neştersiz</h3>
            <p className="text-gray-600">Ameliyatsız, sadece iğne deliğinden girilerek yapılan minimal invaziv işlem.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Hızlı Taburcu</h3>
            <p className="text-gray-600">İşlemden 1-2 saat sonra yürüyerek eve dönebilirsiniz.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Güvenli</h3>
            <p className="text-gray-600">Sağlam dokulara zarar vermeyen ileri Coblation teknolojisi.</p>
          </div>
        </div>
      </section>

      {/* Tedavi Alanları (Resimli Bölüm) */}
      <TreatmentAreas />
      
      <Footer />
    </div>
  );
}