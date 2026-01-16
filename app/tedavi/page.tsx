import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function Tedavi({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].tedaviPage;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{t.title}</h1>
          <p className="text-blue-200 mt-2">{t.desc}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 flex-grow">

        {/* Yeşil Kutu - Eligible */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
          <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 p-2 rounded-lg mr-3">✓</span>
            {t.eligibleTitle}
          </h2>
          <ul className="space-y-3 text-gray-700">
            {t.eligibleItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Kırmızı Kutu - Ineligible */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 p-2 rounded-lg mr-3">✕</span>
            {t.notEligibleTitle}
          </h2>
          <ul className="space-y-3 text-gray-700">
            {t.notEligibleItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      <Footer lang={lang} />
    </div>
  );
}