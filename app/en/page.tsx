import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import TreatmentAreas from "../components/TreatmentAreas";
import InfoSlider from "../components/InfoSlider";
import EmarUpload from "../components/EmarUpload";
import FloatingButtons from "../components/FloatingButtons";
import { translations } from "../translations"; 
import React from "react";

export default function EnglishHome() {
  const t = translations.en; 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar lang="en" /> 
      <FloatingButtons />
      
      {/* 1. Hero Slider */}
      <HeroSlider lang="en" />
      
      {/* 2. Advantage Boxes */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h1}</h3>
            <p className="text-gray-600">{t.advantages.p1}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h2}</h3>
            <p className="text-gray-600">{t.advantages.p2}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h3}</h3>
            <p className="text-gray-600">{t.advantages.p3}</p>
          </div>
        </div>
      </section>

      {/* 3. Treatment Cards */}
      <TreatmentAreas lang="en" />

      {/* 4. Tech Info Slider */}
      <InfoSlider lang="en" />

      {/* 5. MRI Upload Section */}
      <EmarUpload lang="en" />
      
      <Footer lang="en" />
    </div>
  );
}