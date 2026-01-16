"use client";
import { useState, useEffect } from "react";

const infoSlides = [
  {
    id: 1,
    image: "/slider-teknoloji.jpg",
    title: "İleri Coblation Teknolojisi",
    desc: "Düşük sıcaklıkta plazma enerjisi ile sağlıklı dokulara zarar vermeden tedavi."
  },
  {
    id: 2,
    image: "/slider-uzmanlik.jpg",
    title: "Uzman Görüşü ve Güven",
    desc: "MR görüntülerinizi yükleyin, uzmanlarımız sizin için en doğru yolu belirlesin."
  },
  {
    id: 3,
    image: "/slider-konfor.jpg",
    title: "Konforlu İyileşme Süreci",
    desc: "İşlem sonrası aynı gün taburcu olma ve hızla sosyal hayata dönüş imkanı."
  }
];

export default function InfoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === infoSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden relative h-[450px]">
      {infoSlides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Arkaplan Resmi */}
          <img 
            src={slide.image} 
            className="w-full h-full object-cover opacity-40" 
            alt={slide.title} 
          />
          
          {/* İçerik */}
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

      {/* NAVİGASYON NOKTALARI (YENİ EKLENDİ) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {infoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-blue-500 w-10" // Aktif nokta: Mavi ve Uzun
                : "bg-white/30 w-2 hover:bg-white/60" // Pasif nokta: Şeffaf beyaz ve Yuvarlak
            }`}
          />
        ))}
      </div>
    </section>
  );
}