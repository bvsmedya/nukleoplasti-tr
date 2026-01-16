"use client";

import { useState } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { FaCheckCircle, FaExclamationTriangle, FaWhatsapp, FaCloudUploadAlt } from "react-icons/fa";

const questions = [
  {
    question: "Ağrınız hangi bölgede yoğunlaşıyor?",
    options: ["Bel ve Kalça", "Boyun ve Omuz"],
  },
  {
    question: "Ağrınız kolunuza veya bacağınıza yayılıyor mu?",
    options: ["Evet, uyuşma ve karıncalanma var", "Hayır, sadece merkezde ağrı var"],
  },
  {
    question: "Fizik tedavi veya ilaç tedavisi denediniz mi?",
    options: ["Evet, denedim ama geçmedi", "Henüz denemedim"],
  },
  {
    question: "Doktorunuz fıtığınızın 'patlamış' (sekestre) olduğunu söyledi mi?",
    options: ["Hayır, sadece fıtık/başlangıç dendi", "Evet, fıtığımın patladığı söylendi"],
  },
];

export default function FitikTesti() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  // Basit bir mantık: Eğer 4. soruya "Hayır" dediyse Nükleoplasti için uygundur.
  const isEligible = answers[3] === "Hayır, sadece fıtık/başlangıç dendi";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-grow max-w-2xl mx-auto px-4 py-12 w-full">
        {!showResult ? (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-2 rounded-full mb-8">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
              Soru {currentStep + 1} / {questions.length}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-8">
              {questions[currentStep].question}
            </h2>

            <div className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-5 border-2 border-gray-100 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition group flex justify-between items-center"
                >
                  <span className="font-medium text-gray-700 group-hover:text-blue-900">{option}</span>
                  <div className="w-6 h-6 border-2 border-gray-200 rounded-full group-hover:border-blue-600 group-hover:bg-blue-600"></div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 text-center animate-in fade-in zoom-in duration-500">
            {isEligible ? (
              <>
                <FaCheckCircle className="text-green-500 size-20 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Harika Bir Adaysınız!</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Verdiğiniz yanıtlara göre durumunuz <strong>Nükleoplasti (Buharlaştırma)</strong> tedavisi için oldukça uygun görünüyor. Kesin sonuç için uzmanlarımızın MR görüntünüzü incelemesi yeterli olacaktır.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://www.emaryolla.com" target="_blank" className="flex items-center justify-center bg-orange-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition">
                    <FaCloudUploadAlt className="mr-2" /> MR Görüntünü Gönder
                  </a>
                  <a href="https://wa.me/905321744900" className="flex items-center justify-center bg-green-500 text-white p-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition">
                    <FaWhatsapp className="mr-2" /> WhatsApp'tan Danış
                  </a>
                </div>
              </>
            ) : (
              <>
                <FaExclamationTriangle className="text-orange-500 size-20 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Detaylı İnceleme Gerekli</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fıtığınızın evresi veya daha önceki tedavileriniz nedeniyle durumunuzu uzman hekimimizin birebir değerlendirmesi daha sağlıklı olacaktır.
                </p>
                <a href="https://wa.me/905321744900" className="flex items-center justify-center bg-blue-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition">
                  <FaWhatsapp className="mr-2" /> Uzmanla Görüş (Ücretsiz)
                </a>
              </>
            )}
            <button 
              onClick={() => {setCurrentStep(0); setAnswers([]); setShowResult(false);}}
              className="mt-8 text-gray-400 text-sm hover:text-gray-600 underline"
            >
              Testi Tekrarla
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}