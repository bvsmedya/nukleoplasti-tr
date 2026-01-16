import Link from 'next/link';

const treatments = [
  {
    id: 1,
    title: "Bel Fıtığı Tedavisi",
    desc: "LumbaLance teknolojisi ile siyatiğe ve bel ağrılarına ameliyatsız çözüm.",
    // Standart HTML img etiketi ile çalışacak garanti resim
    image: "https://images.unsplash.com/photo-1606206591516-527299f07294?q=80&w=2070&auto=format&fit=crop", 
    link: "/blog/bel-fitiginda-nukleoplasti"
  },
  {
    id: 2,
    title: "Boyun Fıtığı Tedavisi",
    desc: "CervaLance ile hassas bölgede güvenli, kesisiz ve hızlı iyileşme.",
    // Standart HTML img etiketi ile çalışacak garanti resim
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", 
    link: "/blog/boyun-fitiginda-nukleoplasti"
  }
];

export default function TreatmentAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tedavi Alanlarımız</h2>
          <p className="text-blue-600 mt-4 font-medium">Hangi bölgede ağrı yaşıyorsunuz?</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 gap-10">
          {treatments.map((item) => (
            <Link 
              key={item.id} 
              href={item.link}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer block"
            >
              {/* RESİM (Artık img etiketi kullanıyoruz, görünmeme şansı yok) */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Karartma (Yazı okunsun diye) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Yazı İçeriği */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium">
                    {item.desc}
                  </p>
                  <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold group-hover:bg-blue-500 transition shadow-lg">
                    Detaylı İncele →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}