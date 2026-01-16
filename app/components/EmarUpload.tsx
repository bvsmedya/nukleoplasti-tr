import { FaCloudUploadAlt, FaFileMedical } from "react-icons/fa";
import { translations } from "../translations";

export default function EmarUpload({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].emar;

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-2 border-dashed border-blue-300 rounded-3xl p-8 md:p-12 text-center shadow-lg hover:shadow-2xl transition duration-500 relative overflow-hidden group">
          
          <FaFileMedical className="absolute -right-10 -bottom-10 text-9xl text-blue-50 opacity-50 group-hover:scale-110 transition duration-500" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
              <FaCloudUploadAlt size={40} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              {t.desc}
            </p>

            <a 
              href="https://www.emaryolla.com" 
              target="_blank" 
              className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-orange-200"
            >
              <FaCloudUploadAlt className="mr-3" />
              {t.btn}
            </a>
            
            <p className="mt-4 text-xs text-gray-400 font-medium tracking-wide">
              {t.secure}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}