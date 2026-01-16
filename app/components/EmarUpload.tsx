import { FaCloudUploadAlt, FaFileMedical } from "react-icons/fa";

export default function EmarUpload() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dış Kutu */}
        <div className="bg-white border-2 border-dashed border-blue-300 rounded-3xl p-8 md:p-12 text-center shadow-lg hover:shadow-2xl transition duration-500 relative overflow-hidden group">
          
          {/* Arka Plan Süsü (Opak Simge) */}
          <FaFileMedical className="absolute -right-10 -bottom-10 text-9xl text-blue-50 opacity-50 group-hover:scale-110 transition duration-500" />

          <div className="relative z-10">
            {/* İkon */}
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
              <FaCloudUploadAlt size={40} />
            </div>

            {/* Başlık */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              MR veya Dosya Gönderin
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Elinizdeki MR görüntülerini veya raporlarınızı güvenli sistemimize yükleyin. 
              Uzman doktorlarımız incelesin ve tedaviye uygunluğunuzu değerlendirelim.
            </p>

            {/* Dev Buton */}
            <a 
              href="https://www.emaryolla.com" 
              target="_blank" 
              className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-orange-200"
            >
              <FaCloudUploadAlt className="mr-3" />
              DOSYA YÜKLEME EKRANINI AÇ
            </a>
            
            <p className="mt-4 text-xs text-gray-400 font-medium tracking-wide">
              🔒 BVS Doctors Güvenli Dijital Altyapısı
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}