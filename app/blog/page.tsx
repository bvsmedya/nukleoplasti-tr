import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { translations } from "../translations";

export default function BlogIndex({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].blogPage;
  const base = lang === "tr" ? "" : `/${lang}`;

  const posts = [
    {
      emoji: "🧬",
      slug: "nukleoplasti-nedir",
      colorClass: "bg-blue-100",
      label: lang === 'tr' ? 'Genel Bilgi' : (lang === 'fr' ? 'Information Générale' : 'General Info'),
      labelColor: "text-blue-600",
      btnColor: "text-blue-600",
      title: lang === 'tr' ? 'Nükleoplasti Nedir?' : (lang === 'fr' ? "Qu'est-ce que la Nucléoplastie ?" : 'What is Nucleoplasty?'),
      desc: lang === 'tr' ? 'Ameliyatsız fıtık tedavisinde devrim yaratan Coblation teknolojisi ve işlem süreci hakkında her şey.' : (lang === 'fr' ? 'Tout savoir sur la technologie Coblation qui révolutionne le traitement des hernies sans chirurgie.' : 'Everything about Coblation technology that revolutionized non-surgical hernia treatment.')
    },
    {
      emoji: "🧣",
      slug: "boyun-fitiginda-nukleoplasti",
      colorClass: "bg-purple-100",
      label: lang === 'tr' ? 'Boyun Fıtığı' : (lang === 'fr' ? 'Hernie Cervicale' : 'Cervical Hernia'),
      labelColor: "text-purple-600",
      btnColor: "text-purple-600",
      title: lang === 'tr' ? 'Boyun Fıtığında Çözüm' : (lang === 'fr' ? "Solution pour Hernie Cervicale" : 'Solution for Cervical Hernia'),
      desc: lang === 'tr' ? 'CervaLance teknolojisi ile boyun fıtıklarına güvenli yaklaşım. Riskler nelerdir, kimlere uygulanır?' : (lang === 'fr' ? 'Approche sûre des hernies cervicales avec la technologie CervaLance. Quels sont les risques ?' : 'Safe approach to cervical hernias with CervaLance technology. What are the risks?')
    },
    {
      emoji: "🦴",
      slug: "bel-fitiginda-nukleoplasti",
      colorClass: "bg-green-100",
      label: lang === 'tr' ? 'Bel Fıtığı' : (lang === 'fr' ? 'Hernie Lombaire' : 'Lumbar Hernia'),
      labelColor: "text-green-600",
      btnColor: "text-green-600",
      title: lang === 'tr' ? 'Bel Fıtığında Nokta Atışı' : (lang === 'fr' ? "Précision dans l'Hernie Lombaire" : 'Precision in Lumbar Hernia'),
      desc: lang === 'tr' ? 'Siyatik ağrısı ve bacak uyuşmasında LumbaLance teknolojisi ile tanışın. Açık ameliyatın alternatifi.' : (lang === 'fr' ? 'Découvrez la technologie LumbaLance pour la sciatique. Une alternative à la chirurgie ouverte.' : 'Discover LumbaLance technology for sciatica and leg numbness. An alternative to open surgery.')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      {/* Başlık */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="text-blue-200 mt-2">{t.desc}</p>
      </div>

      {/* Yazı Listesi (Grid) */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex-grow w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
              <div className={`h-48 ${post.colorClass} flex items-center justify-center`}>
                <span className="text-6xl">{post.emoji}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span lang={lang} className={`text-xs font-bold ${post.labelColor} uppercase tracking-wide`}>{post.label}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                  {post.desc}
                </p>
                <div className="mt-auto pt-4">
                  <Link href={`${base}/blog/${post.slug}`} className={`${post.btnColor} font-semibold hover:underline`}>
                    {t.readMore}
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer lang={lang} />
    </div>
  );
}