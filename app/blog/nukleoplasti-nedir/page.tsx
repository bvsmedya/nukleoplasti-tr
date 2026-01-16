import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost1({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const isTr = lang === "tr";
  const isEn = lang === "en";
  const isFr = lang === "fr";

  const t = {
    back: isTr ? "Blog" : "Blog",
    makale: isTr ? "Makale" : (isFr ? "Article" : "Article"),
    title: isTr
      ? "Ameliyatsız Fıtık Tedavisinde Devrim: Nükleoplasti Nedir?"
      : (isFr ? "Révolution dans le Traitement des Hernies : Qu'est-ce que la Nucléoplastie ?" : "Revolution in Non-Surgical Hernia Treatment: What is Nucleoplasty?"),
    subtitle: isTr
      ? "Bıçak altına yatmadan, nokta atışı buharlaştırma yöntemiyle fıtıktan kurtulmak mümkün mü?"
      : (isFr ? "Est-il possible de se débarrasser d'une hernie sans chirurgie par évaporation ?" : "Is it possible to get rid of a hernia without surgery through evaporation?"),
    sec1Title: isTr ? "Nükleoplasti Nedir? (Teknolojinin Arkasındaki Bilim)" : (isFr ? "Qu'est-ce que la Nucléoplastie ? (La Science)" : "What is Nucleoplasty? (The Science)"),
    sec2Title: isTr ? "İşlem Nasıl Yapılır? (Adım Adım)" : (isFr ? "Comment se déroule la procédure ? (Étape par étape)" : "How is the Procedure Done? (Step by Step)"),
    logicTitle: isTr ? "Mantık: Balonun Havasını Almak 🎈" : (isFr ? "Logique : Dégonfler le ballon 🎈" : "Logic: Deflating the Balloon 🎈"),
    advTitle: isTr ? "Avantajları Nelerdir?" : (isFr ? "Quels sont les avantages ?" : "What are the Advantages?"),
    not: isTr ? "Not" : "Note",
    fullPost: isTr ? "Bu içerik bilgilendirme amaçlıdır..." : (isFr ? "Contenu à titre informatif..." : "This content is for informational purposes...")
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div lang={lang} className="text-sm text-blue-200 mb-4 font-semibold uppercase tracking-wider">
            <Link href={lang === 'tr' ? '/blog' : `/${lang}/blog`} className="hover:text-white">{t.back}</Link> &gt; {t.makale}
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
            {isTr ? "Bel veya boyun fıtığı teşhisi..." : (isFr ? "Le premier remords des patients..." : "The first fear of patients diagnosed with hernia...")}
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec1Title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {isTr ? "Nükleoplasti, Coblation..." : (isFr ? "La nucléoplastie utilise une technologie brevetée..." : "Nucleoplasty uses a patented technology called Coblation...")}
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec2Title}</h2>
          <p className="text-gray-700 mb-4">
            {isTr ? "Nükleoplasti işlemi bir ameliyat değildir..." : (isFr ? "Ce n'est pas une chirurgie..." : "Nucleoplasty is not a surgery...")}
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.logicTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isTr ? "Fıtık, içi basınçla dolu bir balon gibidir..." : (isFr ? "L'hernie est comme un ballon sous pression..." : "A hernia is like a balloon filled with pressure...")}
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.advTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ {isTr ? "Neştersiz ve Dikişsiz" : (isFr ? "Sans scalpel et sans points" : "Scalpel-free and Stitch-free")}</div>
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ {isTr ? "Hızlı Taburcu" : (isFr ? "Sortie Rapide" : "Fast Discharge")}</div>
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600 text-sm text-gray-500">
            <strong>{t.not}:</strong> {t.fullPost}
          </div>
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
}