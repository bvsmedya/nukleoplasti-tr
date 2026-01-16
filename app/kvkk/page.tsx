import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function KVKK({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].kvkkPage;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />
      <div className="max-w-4xl mx-auto px-4 py-16 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-sans">{t.title}</h1>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-blue-900">{t.sec1Title}</h2>
            <p>{t.sec1Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">{t.sec2Title}</h2>
            <p>{t.sec2Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">{t.sec3Title}</h2>
            <p>{t.sec3Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">{t.sec4Title}</h2>
            <p className="font-bold text-red-600">{t.sec4Text}</p>
          </section>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}