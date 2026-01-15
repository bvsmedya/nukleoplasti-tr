import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Footer eklendi

export default function Nedir() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Nükleoplasti Nedir?</h1>
          <p className="text-blue-200 mt-2">Buharlaştırma yöntemi ile fıtık tedavisi hakkında teknik detaylar.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Teknolojinin Özü: Coblation</h2>
            <p className="text-gray-700 leading-relaxed">
              Nükleoplasti, omurga disklerindeki fıtıklaşmayı tedavi etmek için kullanılan, minimal invaziv (kesi gerektirmeyen) bir yöntemdir. 
              Bu işlemde <strong>"Coblation" (Kontrollü Ablasyon)</strong> adı verilen ileri bir teknoloji kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Nasıl Çalışır?</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                <strong>Giriş:</strong> Ciltte kesi yapılmaz. Görüntüleme cihazları (Skopi) eşliğinde, sadece bir iğne yardımıyla fıtıklı diskin içine girilir.
              </li>
              <li>
                <strong>Buharlaştırma:</strong> İğnenin ucundan Radyofrekans enerjisi verilir. Bu enerji, disk içerisindeki fazla dokuyu düşük sıcaklıkta plazma haline dönüştürür.
              </li>
              <li>
                <strong>Geri Çekilme:</strong> Diskin iç hacmi küçülünce basınç düşer. Bu sayede fıtıklaşan parça içeriye doğru geri çekilir.
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* En alta Footer ekledik */}
      <Footer />
    </div>
  );
}