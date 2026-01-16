"use client"; // Bu satır zorunlu çünkü hareketli bir parça yapıyoruz

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    title: "Ameliyatsız Bel Fıtığı Tedavisi",
    desc: "Nükleoplasti yöntemi ile ağrılarınızdan kesi ve dikiş olmadan, aynı gün kurtulun.",
    buttonText: "Tedaviyi İncele",
    link: "/nedir",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2080&auto=format&fit=crop",
    title: "Boyun Fıtığında Güvenli Çözüm",
    desc: "CervaLance teknolojisi ile hassas ve güvenli bir şekilde boyun ağrılarına son verin.",
    buttonText: "Boyun Fıtığı Detay",
    link: "/blog/boyun-fitiginda-nukleoplasti",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    title: "Hızlı İyileşme, Hızlı İşe Dönüş",
    desc: "Hastanede yatış yok. İşlemden 1 saat sonra yürüyerek taburcu olun.",
    buttonText: "İletişime Geç",
    link: "/iletisim",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Otomatik Kaydırma (5 saniyede bir)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      
      {/* Slaytlar */}
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
          
          {/* Karartma Katmanı (Yazı okunsun diye) */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Yazı İçeriği */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
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

      {/* Alt Noktalar (Dots) */}
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
