"use client";
import { useState, useEffect } from "react";
import { translations } from "../translations";

export default function InfoSlider({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const [current, setCurrent] = useState(0);
  const t = translations[lang]; // Dile göre sözlük
  const slidesData = t.infoSlider; // Sözlükteki slayt dizisi

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden relative h-[450px]">
      {slidesData.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Arkaplan Resimleri İsimleri Sabit Tutuldu */}
          <img 
            src={`/slider-${index === 0 ? 'teknoloji' : index === 1 ? 'uzmanlik' : 'konfor'}.jpg`} 
            className="w-full h-full object-cover opacity-40" 
            alt={slide.title} 
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-in fade-in zoom-in duration-700">
              {slide.title}
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl font-medium italic">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* NAVİGASYON NOKTALARI */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-blue-500 w-10" 
                : "bg-white/30 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}