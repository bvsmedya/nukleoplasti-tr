import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import TreatmentAreas from "./components/TreatmentAreas";
import EmarUpload from "./components/EmarUpload";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar />
      <FloatingButtons />
      <HeroSlider />
      
      {/* Avantaj Kutuları */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Neştersiz</h3>
            <p className="text-gray-600">Sadece iğne deliğinden girilerek yapılan işlem.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Hızlı Taburcu</h3>
            <p className="text-gray-600">İşlemden 1-2 saat sonra yürüyerek eve dönebilirsiniz.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Güvenli</h3>
            <p className="text-gray-600">Sağlam dokulara zarar vermeyen Coblation teknolojisi.</p>
          </div>
        </div>
      </section>

      <TreatmentAreas />
      <EmarUpload />
      <Footer />
    </div>
  );
}