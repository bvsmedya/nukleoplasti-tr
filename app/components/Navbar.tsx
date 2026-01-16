"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaCloudUploadAlt } from 'react-icons/fa';
import { translations } from '../translations';

export default function Navbar({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;
  const base = lang === "tr" ? "" : `/${lang}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* LOGO KISMI */}
          <div className="flex-shrink-0 flex items-center mr-2">
            <Link href={lang === "tr" ? "/" : `/${lang}`} className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Nükleoplasti Logo"
                className="h-8 md:h-10 w-auto group-hover:scale-105 transition duration-300"
              />
              <span className="text-lg md:text-xl xl:text-2xl font-bold text-blue-900 font-sans tracking-tight whitespace-nowrap">
                Nükleoplasti<span className="text-blue-500">.tr</span>
              </span>
            </Link>
          </div>

          {/* MASAÜSTÜ MENÜ LİNKLERİ */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-6 text-sm xl:text-base">
            <Link href={`${base}/`} className="text-gray-700 hover:text-blue-600 px-1 py-2 font-bold transition whitespace-nowrap">{t.home}</Link>
            <Link href={`${base}/nedir`} className="text-gray-700 hover:text-blue-600 px-1 py-2 font-bold transition whitespace-nowrap">{t.whatIs}</Link>
            <Link href={`${base}/tedavi`} className="text-gray-700 hover:text-blue-600 px-1 py-2 font-bold transition whitespace-nowrap">{t.process}</Link>
            <Link href={`${base}/blog`} className="text-gray-700 hover:text-blue-600 px-1 py-2 font-bold transition whitespace-nowrap">{t.blog}</Link>
            <Link href={`${base}/test`} className="text-blue-600 font-bold px-1 py-2 animate-pulse whitespace-nowrap">{t.test}</Link>

            {/* MR YOLLA: Fransızca'da sadece ikon, diğer dillerde ikon+yazı */}
            <a href="https://www.emaryolla.com" target="_blank" className="flex items-center text-orange-600 font-bold px-1 py-2 transition hover:scale-110 whitespace-nowrap" title={t.mr}>
              <FaCloudUploadAlt size={24} className={lang === 'fr' ? '' : 'mr-1'} />
              {lang !== 'fr' && <span>{t.mr}</span>}
            </a>

            {/* DİL SEÇİCİ */}
            <div className="flex gap-1 text-[9px] xl:text-[10px] items-center font-black border-l pl-2 xl:pl-3 border-gray-200 uppercase whitespace-nowrap">
              <Link href="/" className={`${lang === 'tr' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-400'} flex items-center gap-0.5`}>
                <span>🇹🇷</span> TR
              </Link>
              <span className="text-gray-200">|</span>
              <Link href="/en" className={`${lang === 'en' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-0.5`}>
                <span>🇺🇸</span> EN
              </Link>
              <span className="text-gray-200">|</span>
              <Link href="/fr" className={`${lang === 'fr' ? 'text-blue-600' : 'text-gray-400'} flex items-center gap-0.5`}>
                <span>🇫🇷</span> FR
              </Link>
            </div>

            <div className="h-6 w-[1px] bg-gray-200 mx-0.5 xl:mx-1"></div>

            {/* TELEFON */}
            <a href="tel:+905321744900" className="flex flex-col items-end text-gray-700 group whitespace-nowrap min-w-fit">
              <span className="text-[9px] xl:text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{t.consult}</span>
              <span className="text-sm xl:text-md font-black group-hover:text-blue-600 transition leading-none whitespace-nowrap">+90 532 174 49 00</span>
            </a>

            {/* İLETİŞİM BUTONU */}
            <Link href={`${base}/iletisim`} className="bg-blue-600 text-white px-3 xl:px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md whitespace-nowrap">
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
            <Link href={`${base}/`} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.home}</Link>
            <Link href={`${base}/nedir`} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.whatIs}</Link>
            <Link href={`${base}/tedavi`} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.process}</Link>
            <Link href={`${base}/blog`} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">{t.blog}</Link>
            <Link href={`${base}/test`} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-bold text-blue-600 border-b border-gray-50">{t.testLong}</Link>
            <a href="https://www.emaryolla.com" target="_blank" className="block py-4 text-lg font-bold text-orange-600 border-b border-gray-50">{t.mr}</a>

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