"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaCloudUploadAlt } from 'react-icons/fa';
import { translations } from '../translations'; // Sözlüğü dahil ettik

export default function Navbar({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;
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
                className="h-9 w-auto group-hover:scale-105 transition duration-300"
              />
              <span className="text-xl md:text-2xl font-bold text-blue-900 font-sans tracking-tight">
                Nükleoplasti<span className="text-blue-500">.tr</span>
              </span>
            </Link>
          </div>

          {/* MASAÜSTÜ MENÜ LİNKLERİ (GÜNCELLENDİ: Daha Sıkı Yerleşim) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-5">
            <Link href={`${base}/`} className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-bold transition whitespace-nowrap">{t.home}</Link>
            <Link href={`${base}/nedir`} className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-bold transition whitespace-nowrap">{t.whatIs}</Link>
            <Link href={`${base}/tedavi`} className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-bold transition whitespace-nowrap">{t.process}</Link>
            <Link href={`${base}/blog`} className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-bold transition whitespace-nowrap">{t.blog}</Link>
            <Link href={`${base}/test`} className="text-blue-600 font-bold px-2 py-2 text-sm animate-pulse whitespace-nowrap">{t.test}</Link>

            <a href="https://www.emaryolla.com" target="_blank" className="flex items-center text-orange-600 font-bold px-2 py-2 text-sm whitespace-nowrap">
              <FaCloudUploadAlt className="mr-1" /> {t.mr}
            </a>

            {/* DİL SEÇİCİ */}
            <div className="flex gap-1 text-[10px] items-center font-black border-l pl-3 border-gray-200 uppercase">
              <Link href="/" className={`${lang === 'tr' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-400'} flex items-center gap-1`}>
                <span>🇹🇷</span> TR
              </Link>
              <span className="text-gray-200">|</span>
              <Link href="/en" className={`${lang === 'en' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-1`}>
                <span>🇺🇸</span> EN
              </Link>
              <span className="text-gray-200">|</span>
              <Link href="/fr" className={`${lang === 'fr' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-1`}>
                <span>🇫🇷</span> FR
              </Link>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>

            {/* TELEFON KISMI */}
            <a href="tel:+905321744900" className="flex flex-col items-end text-gray-700 group min-w-[90px]">
              <span className="text-[9px] font-bold text-gray-400 uppercase leading-none mb-1 whitespace-nowrap">{t.consult}</span>
              <span className="text-sm font-black group-hover:text-blue-600 transition leading-none whitespace-nowrap">0532 174 49 00</span>
            </a>

            {/* BUTON */}
            <Link href={`${base}/iletisim`} className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-md whitespace-nowrap">
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
            <div className="flex justify-center gap-6 py-4 border-b border-gray-50 font-black text-xs uppercase items-center">
              <Link href="/" onClick={() => setIsOpen(false)} className={`${lang === 'tr' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-1`}>
                <span>🇹🇷</span> Türkçe
              </Link>
              <Link href="/en" onClick={() => setIsOpen(false)} className={`${lang === 'en' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-1`}>
                <span>🇺🇸</span> English
              </Link>
              <Link href="/fr" onClick={() => setIsOpen(false)} className={`${lang === 'fr' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-1`}>
                <span>🇫🇷</span> Français
              </Link>
            </div>

            <Link href={`${base}/iletisim`} onClick={() => setIsOpen(false)} className="block mt-6 bg-blue-600 text-white px-3 py-4 rounded-xl font-bold">{t.contactLong}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}