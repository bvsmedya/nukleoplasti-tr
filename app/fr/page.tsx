import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import TreatmentAreas from "../components/TreatmentAreas";
import InfoSlider from "../components/InfoSlider";
import EmarUpload from "../components/EmarUpload";
import FloatingButtons from "../components/FloatingButtons";
import { translations } from "../translations";
import React from "react";

export default function FrenchHome() {
  const t = translations.fr; 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar lang="fr" /> 
      <FloatingButtons />
      
      {/* 1. Hero Slider */}
      <HeroSlider lang="fr" />
      
      {/* 2. Advantage Boxes */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h1}</h3>
            <p className="text-gray-600">{t.advantages.p1}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h2}</h3>
            <p className="text-gray-600">{t.advantages.p2}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t.advantages.h3}</h3>
            <p className="text-gray-600">{t.advantages.p3}</p>
          </div>
        </div>
      </section>

      {/* 3. Treatment Cards */}
      <TreatmentAreas lang="fr" />

      {/* 4. Tech Info Slider */}
      <InfoSlider lang="fr" />

      {/* 5. MRI Upload Section */}
      <EmarUpload lang="fr" />
      
      <Footer lang="fr" />
    </div>
  );
}