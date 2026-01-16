"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";
import { translations } from "../translations";

export default function Iletisim({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  // Sözlükten verileri çekiyoruz (Hata almamak için translations.ts dosyanın güncel olduğundan emin ol)
  const t = translations[lang].contactPage;
  const n = translations[lang].nav;
  const base = lang === "tr" ? "" : `/${lang}`;

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Gönderme Fonksiyonu (Web3Forms)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(t.formSending); // "Gönderiliyor..."

    const formData = new FormData(e.currentTarget);
    // Senin Anahtarın
    formData.append("access_key", "de42f46e-be92-4ad8-b776-595a8c2fe997");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus(t.formSuccess); // "Başarılı" mesajı
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Error sending message. Please try WhatsApp.");
      }
    } catch (error) {
      setStatus("System error. Please use WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      {/* 1. HERO BAŞLIK ALANI */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">{t.title}</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{t.desc}</p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full space-y-12">

        {/* 2. BÖLÜM A: WHATSAPP (Hızlı Kanal) */}
        <div className="w-full">
          <a
            href="https://wa.me/905321744900?text=Merhaba, Nükleoplasti tedavisi hakkında bilgi almak istiyorum."
            target="_blank"
            className="bg-green-500 text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between hover:bg-green-600 transition duration-300 group"
          >
            <div className="flex items-center mb-6 md:mb-0 text-center md:text-left flex-col md:flex-row">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-0 md:mr-6 mb-4 md:mb-0 group-hover:scale-110 transition">
                <FaWhatsapp size={45} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-sans">{t.waTitle}</h2>
                <p className="opacity-90 font-sans">{t.waDesc}</p>
              </div>
            </div>
            <span className="bg-white text-green-600 px-8 py-3 rounded-full font-black text-xl shadow-md font-sans">
              +90 532 174 49 00
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* 3. BÖLÜM B & C: SOSYAL MEDYA & E-POSTA (Sol Sütun) */}
          <div className="space-y-8">

            {/* Sosyal Medya */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3 font-sans">Social Media</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/nukleoplastitr" target="_blank" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center hover:shadow-md transition">
                  <FaInstagram className="text-pink-600 mr-3" size={24} />
                  <span className="font-medium text-gray-700">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@nukleoplastitr" target="_blank" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center hover:shadow-md transition">
                  <FaTiktok className="text-black mr-3" size={20} />
                  <span className="font-medium text-gray-700">TikTok</span>
                </a>
              </div>
            </div>

            {/* E-Posta Kanalları */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3 font-sans">E-Mail</h2>
              <div className="space-y-3">
                <a href="mailto:info@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition group">
                  <div className="flex items-center">
                    <FaEnvelope className="text-blue-600 mr-4" size={20} />
                    <span className="text-gray-700 font-semibold">Info</span>
                  </div>
                  <span className="text-sm text-blue-600 font-bold italic">info@nukleoplasti.tr</span>
                </a>
                <a href="mailto:istanbul@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-4" size={20} />
                    <span className="text-gray-700">İstanbul</span>
                  </div>
                  <span className="text-xs text-gray-400">istanbul@nukleoplasti.tr</span>
                </a>
                <a href="mailto:izmir@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-400 mr-4" size={20} />
                    <span className="text-gray-700">Izmir</span>
                  </div>
                  <span className="text-xs text-gray-400">izmir@nukleoplasti.tr</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4. BÖLÜM D: İLETİŞİM FORMU (Sağ Sütun - KVKK Onaylı) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">{t.formTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <input
                type="text"
                name="name"
                placeholder={t.formName}
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t.formPhone}
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              />
              <select name="subject" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition">
                <option>Bel Fıtığı / Lumbar</option>
                <option>Boyun Fıtığı / Cervical</option>
                <option>MR / MRI Review</option>
                <option>Randevu / Appointment</option>
              </select>
              <textarea
                name="message"
                placeholder={t.formMsg}
                rows={4}
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              ></textarea>

              {/* KVKK ONAY METNİ */}
              <p className="text-[10px] text-gray-400 leading-tight mb-4 tracking-tight">
                <Link href={`${base}/kvkk`} target="_blank" className="underline hover:text-blue-600 font-bold">{t.kvkkText}</Link>
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition disabled:bg-gray-400 shadow-lg"
              >
                <FaPaperPlane className="mr-3" /> {isSubmitting ? t.formSending : t.formBtn}
              </button>

              {status && (
                <p className={`font-bold mt-4 text-center p-3 rounded-lg ${status.includes("!") || status.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      <Footer lang={lang} />
    </div>
  );
}