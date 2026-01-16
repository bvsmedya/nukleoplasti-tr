"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { translations } from "../translations"; // Sözlük bağlantısı

export default function HeroSlider({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const [current, setCurrent] = useState(0);

  // Sözlükten verileri çekiyoruz
  const t = translations[lang];
  const base = lang === "tr" ? "" : `/${lang}`;

  // Senin orijinal "slides" dizini (Dillere göre güncellendi)
  const slides = [
    {
      id: 1,
      image: "/bel-hasta-kare.jpg",
      title: t.heroBel.title,
      subtitle: t.heroBel.subtitle,
      desc: t.heroBel.desc,
      buttonText: t.heroBel.btn,
      link: `${base}/blog/bel-fitiginda-nukleoplasti`,
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      image: "/boyun-hasta-kare.jpg",
      title: t.heroBoyun.title,
      subtitle: t.heroBoyun.subtitle,
      desc: t.heroBoyun.desc,
      buttonText: t.heroBoyun.btn,
      link: `${base}/blog/boyun-fitiginda-nukleoplasti`,
      bgColor: "bg-slate-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative w-full overflow-hidden transition-colors duration-1000 ${slides[current].bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* SOL TARAF: METİN İÇERİĞİ (Orijinal Animasyonlu Yapı) */}
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <div key={current} className="animate-in fade-in slide-in-from-left duration-700">
              <span lang={lang} className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                {slides[current].subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                {slides[current].desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href={slides[current].link}
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-lg"
                >
                  {slides[current].buttonText}
                </Link>
                <Link
                  href={`${base}/test`}
                  className="bg-white text-gray-900 border-2 border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-sm"
                >
                  {t.common.testBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: KARE RESİM (Orijinal Çerçeveli Yapı) */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div key={current} className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-3xl shadow-2xl border-8 border-white animate-in fade-in zoom-in duration-700">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Navigasyon Noktaları (Senin istediğin o özel düğmeler) */}
      <div className="flex justify-center pb-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-blue-600 w-10" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}