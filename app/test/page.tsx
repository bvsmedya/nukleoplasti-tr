"use client";

import { useState } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { translations } from "../translations";
import { FaCheckCircle, FaExclamationTriangle, FaWhatsapp, FaCloudUploadAlt } from "react-icons/fa";

export default function FitikTesti({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const t = translations[lang].testPage;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]); // Store index instead of string for better comparison
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: t.q1,
      options: [t.q1o1, t.q1o2],
    },
    {
      question: t.q2,
      options: [t.q2o1, t.q2o2],
    },
    {
      question: t.q3,
      options: [t.q3o1, t.q3o2],
    },
    {
      question: t.q4,
      options: [t.q4o1, t.q4o2],
    },
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  // Logic: Eligible if the answer to the 4th question is the FIRST option ("Hayır...")
  const isEligible = answers[3] === 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

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

            <span lang={lang} className="text-blue-600 font-bold text-sm uppercase tracking-widest">
              {lang === 'tr' ? 'Soru' : (lang === 'fr' ? 'Question' : 'Question')} {currentStep + 1} / {questions.length}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-8">
              {questions[currentStep].question}
            </h2>

            <div className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.resultEligibleTitle}</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {t.resultEligibleText}
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://www.emaryolla.com" target="_blank" className="flex items-center justify-center bg-orange-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition">
                    <FaCloudUploadAlt className="mr-2" /> {t.btnMri}
                  </a>
                  <a href="https://wa.me/905321744900" className="flex items-center justify-center bg-green-500 text-white p-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition">
                    <FaWhatsapp className="mr-2" /> {t.btnWa}
                  </a>
                </div>
              </>
            ) : (
              <>
                <FaExclamationTriangle className="text-orange-500 size-20 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.resultIneligibleTitle}</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {t.resultIneligibleText}
                </p>
                <a href="https://wa.me/905321744900" className="flex items-center justify-center bg-blue-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition">
                  <FaWhatsapp className="mr-2" /> {t.btnWa}
                </a>
              </>
            )}
            <button
              onClick={() => { setCurrentStep(0); setAnswers([]); setShowResult(false); }}
              className="mt-8 text-gray-400 text-sm hover:text-gray-600 underline"
            >
              {t.btnRetry}
            </button>
          </div>
        )}
      </div>

      <Footer lang={lang} />
    </div>
  );
}