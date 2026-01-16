"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/slider-teknoloji.jpg",
    title: "Ameliyatsız Bel Fıtığı Tedavisi",
    desc: "Nükleoplasti yöntemi ile ağrılarınızdan kesi ve dikiş olmadan, aynı gün kurtulun.",
    buttonText: "Tedaviyi İncele",
    link: "/blog/nukleoplasti-nedir",
  },
  {
    id: 2,
    image: "/slider-uzmanlik.jpg",
    title: "Uzman Hekim Kadrosu", // BVS Doctors yazısını kaldırdık :)
    desc: "Alanında uzman kadromuz ve en güncel plazma teknolojisi ile sağlığınıza güvenle kavuşun.",
    buttonText: "Bilgi Al",
    link: "/iletisim",
  },
  {
    id: 3,
    image: "/slider-konfor.jpg",
    title: "Hızlı İyileşme, Kesintisiz Hayat",
    desc: "İşlemden 1-2 saat sonra yürüyerek taburcu olun, sosyal hayatınıza ara vermeyin.",
    buttonText: "Uygunluk Testi",
    link: "/test",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Arkaplan Resmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Karartma Katmanı */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Yazı İçeriği */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl drop-shadow-md">
              {slide.desc}
            </p>
            <Link
              href={slide.link}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Alt Noktalar */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}