"use client"; // Form yönetimi için gerekli

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";

export default function Iletisim() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Gönderiliyor...");

    const formData = new FormData(e.currentTarget);
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
        setStatus("Mesajınız başarıyla iletildi. En kısa sürede size döneceğiz.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      setStatus("Sistemsel bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Bizimle İletişime Geçin</h1>
          <p className="text-blue-200 text-lg">Ağrısız bir hayat için uzman ekibimiz her kanaldan size destek vermeye hazır.</p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full space-y-12">
        
        {/* BÖLÜM A: WHATSAPP (Hızlı Kanal) */}
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
                <h2 className="text-2xl font-bold font-sans">WhatsApp Danışma Hattı</h2>
                <p className="opacity-90 font-sans">Hızlı bilgi almak ve MR sonucunuzu göndermek için hemen yazın.</p>
              </div>
            </div>
            <span className="bg-white text-green-600 px-8 py-3 rounded-full font-black text-xl shadow-md font-sans">
              0532 174 49 00
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* BÖLÜM B & C: SOSYAL MEDYA & E-POSTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3 font-sans">Sosyal Medya</h2>
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

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3 font-sans">E-Posta Kanalları</h2>
              <div className="space-y-3">
                <a href="mailto:info@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition group">
                  <div className="flex items-center">
                    <FaEnvelope className="text-blue-600 mr-4" size={20} />
                    <span className="text-gray-700 font-semibold">Genel Merkez</span>
                  </div>
                  <span className="text-sm text-blue-600 font-bold italic">info@nukleoplasti.tr</span>
                </a>
                <a href="mailto:istanbul@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-4" size={20} />
                    <span className="text-gray-700">İstanbul Bölge</span>
                  </div>
                  <span className="text-xs text-gray-400">istanbul@nukleoplasti.tr</span>
                </a>
                <a href="mailto:izmir@nukleoplasti.tr" className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-300 transition">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-400 mr-4" size={20} />
                    <span className="text-gray-700">İzmir Bölge</span>
                  </div>
                  <span className="text-xs text-gray-400">izmir@nukleoplasti.tr</span>
                </a>
              </div>
            </div>
          </div>

          {/* BÖLÜM D: İLETİŞİM FORMU (KVKK Onaylı) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Detaylı Bilgi Formu</h2>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <input 
                type="text" 
                name="Ad Soyad"
                placeholder="Adınız Soyadınız" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              />
              <input 
                type="tel" 
                name="Telefon"
                placeholder="Telefon Numaranız" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              />
              <select name="Konu" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition">
                <option>Bel Fıtığı Hakkında</option>
                <option>Boyun Fıtığı Hakkında</option>
                <option>MR Değerlendirme Talebi</option>
                <option>Randevu Talebi</option>
              </select>
              <textarea 
                name="Mesaj"
                placeholder="Şikayetiniz veya sorunuz..." 
                rows={4}
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
              ></textarea>

              {/* KVKK ONAY METNİ */}
              <p className="text-[10px] text-gray-400 leading-tight mb-4">
                "Gönder" butonuna basarak, <Link href="/kvkk" target="_blank" className="underline hover:text-blue-600">KVKK Aydınlatma Metni</Link>'ni okuduğumu ve kişisel verilerimin tıbbi danışmanlık amacıyla işlenmesini kabul ettiğimi beyan ederim.
              </p>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition disabled:bg-gray-400 shadow-lg"
              >
                <FaPaperPlane className="mr-3" /> {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              </button>
              
              {status && (
                <p className={`font-bold mt-4 text-center ${status.includes("başarıyla") ? "text-green-600" : "text-blue-600 animate-pulse"}`}>
                    {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}