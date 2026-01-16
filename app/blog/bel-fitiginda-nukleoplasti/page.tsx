import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost3({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const isTr = lang === "tr";
  const isEn = lang === "en";
  const isFr = lang === "fr";

  const t = {
    back: "Blog",
    makale: isTr ? "Makale" : (isFr ? "Article" : "Article"),
    title: isTr
      ? "Bel Fıtığında Nokta Atışı Tedavi: LumbaLance Teknolojisi"
      : (isFr ? "Traitement de Précision pour l'Hernie Lombaire : Technologie LumbaLance" : "Precision Treatment for Lumbar Hernia: LumbaLance Technology"),
    subtitle: isTr
      ? "Bacağınıza vuran inatçı ağrılardan (Siyatik), açık ameliyat olmadan, LumbaLance teknolojisi ile kurtulun."
      : (isFr ? "Débarrassez-vous de la sciatique sans chirurgie ouverte avec LumbaLance." : "Get rid of stubborn leg pain (Sciatica) without open surgery with LumbaLance technology."),
    sec1Title: isTr ? "LumbaLance: Navigasyonlu Teknoloji" : (isFr ? "LumbaLance : Technologie Naviguée" : "LumbaLance: Navigated Technology"),
    sec2Title: isTr ? "Siyatik Ağrısına Kesin Çözüm" : (isFr ? "Solution Définitive Contre la Sciatique" : "Definitive Solution for Sciatica Pain"),
    sec3Title: isTr ? "Açık Ameliyattan Farkı Nedir?" : (isFr ? "Quelle est la différence avec la chirurgie ouverte ?" : "What is the Difference from Open Surgery?"),
    contactTitle: isTr ? "Ameliyattan Önce Son Çıkış" : (isFr ? "Dernière chance avant la chirurgie" : "Last Exit Before Surgery"),
    contactDesc: isTr ? "Fıtığınız patlamadıysa (Sekestre değilse), ameliyat olmadan önce mutlaka Nükleoplasti seçeneğini değerlendirin." : (isFr ? "Si votre hernie n'a pas éclaté, évaluez l'option Nucléoplastie." : "If your hernia has not burst, definitely evaluate the Nucleoplasty option before surgery."),
    contactBtn: isTr ? "Ücretsiz Danışma" : (isFr ? "Consultation Gratuite" : "Free Consultation")
  };

  const base = lang === 'tr' ? '' : `/${lang}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div lang={lang} className="text-sm text-blue-200 mb-4 font-semibold uppercase tracking-wider">
            <Link href={`${base}/blog`} className="hover:text-white">{t.back}</Link> &gt; {t.makale}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.title}
          </h1>
          <p className="text-blue-200 mt-4 text-lg">
            {t.subtitle}
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {isTr ? "Bel fıtığı (Lomber Disk Hernisi), modern çağın en yaygın hastalığıdır..." : (isFr ? "L'hernie lombaire est la maladie la plus courante..." : "Lumbar hernia is the most common disease of the modern age...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec1Title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {isTr ? "Bel omurları arasındaki diskler geniştir..." : (isFr ? "Les disques lombaires sont larges..." : "Discs in the lumbar region are wide...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec2Title}</h2>
          <p className="text-gray-700 mb-4">
            {isTr ? "Hastaların en büyük şikayeti bacağa inen ağrıdır..." : (isFr ? "Le plus grand grief des patients est la douleur descendante..." : "The biggest complaint of patients is the pain radiating down the leg...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec3Title}</h2>
          <div className="overflow-x-auto">
            {/* Table simplified for multi-lang brevity for now */}
            <p className="text-gray-700">{isTr ? "Detaylı karşılaştırma için iletişim kurun." : (isFr ? "Contactez-nous pour une comparaison détaillée." : "Contact us for a detailed comparison.")}</p>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{t.contactTitle}</h3>
            <p className="text-blue-700 mb-4">{t.contactDesc}</p>
            <Link href={`${base}/iletisim`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              {t.contactBtn}
            </Link>
          </div>

        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
}