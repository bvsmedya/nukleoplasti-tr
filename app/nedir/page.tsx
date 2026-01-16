import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function Nedir({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].nedirPage;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />
      <div className="bg-blue-900 text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{t.title}</h1>
        <p className="text-blue-200 mt-2">{t.subtitle}</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t.sec1Title}</h2>
            <p className="text-gray-700 leading-relaxed">{t.sec1Text}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t.sec2Title}</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>{t.step1}</li>
              <li>{t.step2}</li>
              <li>{t.step3}</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}