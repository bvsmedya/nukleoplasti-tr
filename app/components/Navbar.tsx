import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO KISMI */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              {/* Logo Resmi */}
              <img 
                src="/logo.png" 
                alt="Nükleoplasti Logo" 
                className="h-10 w-auto group-hover:scale-105 transition duration-300" 
              />
              {/* Logo Yazısı */}
              <span className="text-2xl font-bold text-blue-900">
                Nükleoplasti<span className="text-blue-500">.tr</span>
              </span>
            </Link>
          </div>

          {/* MENÜ LİNKLERİ */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Ana Sayfa</Link>
            <Link href="/nedir" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Nedir?</Link>
            <Link href="/tedavi" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Tedavi Süreci</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Blog</Link>
          </div>

          {/* İLETİŞİM BUTONU */}
          <div>
            <Link href="/iletisim" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}