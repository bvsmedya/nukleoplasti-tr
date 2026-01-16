import Link from 'next/link';
import { translations } from '../translations'; // Sözlük bağlantısı

export default function TreatmentAreas({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].treatmentAreas; // Dile göre metinleri seçtik
  const base = lang === "tr" ? "" : `/${lang}`;

  const cards = [
    { 
      title: t.belTitle, 
      desc: t.belDesc, 
      image: "/kart-bel.jpg", 
      link: `${base}/blog/bel-fitiginda-nukleoplasti` 
    },
    { 
      title: t.boyunTitle, 
      desc: t.boyunDesc, 
      image: "/kart-boyun.jpg", 
      link: `${base}/blog/boyun-fitiginda-nukleoplasti` 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h2>
          <p className="text-blue-600 mt-4 font-medium">{t.subtitle}</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((item, i) => (
            <Link key={i} href={item.link} className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {item.desc}
                </p>
                <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  {t.btn}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}