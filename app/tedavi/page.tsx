import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Footer eklendi

export default function Tedavi() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Tedavi Süreci</h1>
          <p className="text-blue-200 mt-2">Kimler uygun adaydır? İşlem nasıl yapılır?</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 flex-grow">
        
        {/* Yeşil Kutu */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
          <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 p-2 rounded-lg mr-3">✓</span> 
            Kimler İçin Uygundur?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start"><span className="mr-2">•</span><span><strong>Kapsüllü Fıtıklar:</strong> Diskin dış çeperinin henüz yırtılmadığı durumlar.</span></li>
            <li className="flex items-start"><span className="mr-2">•</span><span><strong>Kronik Ağrı:</strong> 4-6 hafta geçmeyen ağrılar.</span></li>
          </ul>
        </section>

        {/* Kırmızı Kutu */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 p-2 rounded-lg mr-3">✕</span> 
            Kimler İçin Uygun Değildir?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start"><span className="mr-2">•</span><span>Diskin tamamen patladığı (sekestre) ileri derece fıtıklar.</span></li>
            <li className="flex items-start"><span className="mr-2">•</span><span>Ciddi kanal darlığı olanlar.</span></li>
          </ul>
        </section>

      </div>

      {/* En alta Footer ekledik */}
      <Footer />
    </div>
  );
}