"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaCloudUploadAlt } from 'react-icons/fa';
import { translations } from '../translations'; // Sözlüğü dahil ettik

export default function Navbar({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav; // O anki dilin kelimelerini seçtik

  // Dil klasörüne göre link yapısını ayarlar (TR ise /, değilse /en gibi)
  const base = lang === "tr" ? "" : `/${lang}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO KISMI */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={lang === "tr" ? "/" : `/${lang}`} className="flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="Nükleoplasti Logo" 
                className="h-10 w-auto group-hover:scale-105 transition duration-300" 
              />
              <span className="text-xl md:text-2xl font-bold text-blue-900 font-sans">
                Nükleoplasti<span className="text-blue-500">.tr</span>
              </span>
            </Link>
          </div>

          {/* MASAÜSTÜ MENÜ LİNKLERİ */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link href={`${base}/`} className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">{t.home}</Link>
            <Link href={`${base}/nedir`} className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">{t.whatIs}</Link>
            <Link href={`${base}/tedavi`} className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">{t.process}</Link>
            <Link href={`${base}/blog`} className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">{t.blog}</Link>
            <Link href={`${base}/test`} className="text-blue-600 font-bold px-2 py-2 animate-pulse">{t.test}</Link>
            
            <a href="https://www.emaryolla.com" target="_blank" className="flex items-center text-orange-600 font-bold px-2 py-2">
               <FaCloudUploadAlt className="mr-1" /> {t.mr}
            </a>

            {/* DİL SEÇİCİ */}
            <div className="flex gap-1 text-[10px] font-black border-l pl-4 border-gray-200 uppercase">
                <Link href="/" className={lang === 'tr' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-400'}>TR</Link>
                <span className="text-gray-200">|</span>
                <Link href="/en" className={lang === 'en' ? 'text-blue-600' : 'text-gray-400'}>EN</Link>
                <span className="text-gray-200">|</span>
                <Link href="/fr" className={lang === 'fr' ? 'text-blue-600' : 'text-gray-400'}>FR</Link>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

            <a href="tel:+905321744900" className="flex flex-col items-end text-gray-700 group">
              <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{t.consult}</span>
              <span className="text-md font-bold group-hover:text-blue-600 transition leading-none">0532 174 49 00</span>
            </a>

            <Link href={`${base}/iletisim`} className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md">
              {t.contact}
            </Link>
          </div>

          {/* MOBİL BUTONLAR */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:+905321744900" className="text-blue-600 p-2 border border-blue-100 rounded-full">
              <FaPhone size={18} />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL PANEL */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2 shadow-2xl text-center">
            <Link href={`${base}/`} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.home}</Link>
            <Link href={`${base}/nedir`} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.whatIs}</Link>
            <Link href={`${base}/tedavi`} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.process}</Link>
            <Link href={`${base}/blog`} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.blog}</Link>
            <Link href={`${base}/test`} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-blue-600 border-b border-gray-50">{t.testLong}</Link>
            <a href="https://www.emaryolla.com" target="_blank" className="block px-3 py-4 text-lg font-bold text-orange-600 border-b border-gray-50">{t.mr}</a>
            
            {/* MOBİL DİL SEÇİMİ */}
            <div className="flex justify-center gap-6 py-4 border-b border-gray-50 font-black text-xs uppercase">
                <Link href="/" onClick={() => setIsOpen(false)} className={lang === 'tr' ? 'text-blue-600' : 'text-gray-400'}>Türkçe</Link>
                <Link href="/en" onClick={() => setIsOpen(false)} className={lang === 'en' ? 'text-blue-600' : 'text-gray-400'}>English</Link>
                <Link href="/fr" onClick={() => setIsOpen(false)} className={lang === 'fr' ? 'text-blue-600' : 'text-gray-400'}>Français</Link>
            </div>

            <Link href={`${base}/iletisim`} onClick={() => setIsOpen(false)} className="block mt-6 bg-blue-600 text-white px-3 py-4 rounded-xl font-bold">{t.contactLong}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}