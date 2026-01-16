"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaCloudUploadAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO KISMI */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="Nükleoplasti Logo" 
                className="h-10 w-auto group-hover:scale-105 transition duration-300" 
              />
              <span className="text-xl md:text-2xl font-bold text-blue-900">
                Nükleoplasti<span className="text-blue-500">.tr</span>
              </span>
            </Link>
          </div>

          {/* MASAÜSTÜ MENÜ LİNKLERİ (Ekran genişse görünür) */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">Ana Sayfa</Link>
            <Link href="/nedir" className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">Nedir?</Link>
            <Link href="/tedavi" className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">Tedavi Süreci</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-2 py-2 font-medium transition">Blog</Link>
            <Link href="/test" className="text-blue-600 font-bold px-2 py-2 animate-pulse">Test Et</Link>
            
            <a href="https://www.emaryolla.com" target="_blank" className="flex items-center text-orange-600 font-bold px-2 py-2">
               <FaCloudUploadAlt className="mr-1" /> MR Yolla
            </a>

            <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

            <a href="tel:+905321744900" className="flex flex-col items-end text-gray-700 group">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Danışma Hattı</span>
              <span className="text-md font-bold group-hover:text-blue-600 transition">0532 174 49 00</span>
            </a>

            <Link href="/iletisim" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md">
              İletişim
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU (Sadece küçük ekranda görünür) */}
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

      {/* MOBİL AÇILIR MENÜ PANELİ */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2 shadow-2xl text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">Ana Sayfa</Link>
            <Link href="/nedir" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">Nükleoplasti Nedir?</Link>
            <Link href="/tedavi" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">Tedavi Süreci</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-semibold text-gray-700 border-b border-gray-50">Blog & Makaleler</Link>
            <Link href="/test" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-blue-600 border-b border-gray-50">Tedavi Uygunluk Testi</Link>
            <a href="https://www.emaryolla.com" target="_blank" className="block px-3 py-4 text-lg font-bold text-orange-600 border-b border-gray-50">Emar Yolla</a>
            <Link href="/iletisim" onClick={() => setIsOpen(false)} className="block mt-6 bg-blue-600 text-white px-3 py-4 rounded-xl font-bold">Bize Ulaşın</Link>
          </div>
        </div>
      )}
    </nav>
  );
}