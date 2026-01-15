import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Başlık Alanı */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm text-blue-200 mb-4 font-semibold uppercase tracking-wider">
            <Link href="/blog" className="hover:text-white">Blog</Link> &gt; Makale
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Bel Fıtığında Nokta Atışı Tedavi: LumbaLance Teknolojisi
          </h1>
          <p className="text-blue-200 mt-4 text-lg">
            Bacağınıza vuran inatçı ağrılardan (Siyatik), açık ameliyat olmadan, LumbaLance teknolojisi ile kurtulun.
          </p>
        </div>
      </div>

      {/* Makale İçeriği */}
      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Bel fıtığı (Lomber Disk Hernisi), modern çağın en yaygın hastalığıdır. Özellikle masa başı çalışanlarda ve ağır kaldıranlarda sık görülür. Fıtıklaşan disk, bacağa giden sinirlere baskı yaparak "Siyatik" dediğimiz dayanılmaz ağrılara yol açar. Peki, çözüm sadece açık ameliyat mı? <strong>Hayır.</strong>
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">LumbaLance: Navigasyonlu Teknoloji</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bel omurları arasındaki diskler geniştir. Bu yüzden standart bir iğne ile fıtığın tam merkezine ulaşmak zordur. İşte burada <strong>LumbaLance™</strong> devreye girer.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Kavisli Uç Tasarımı:</strong> LumbaLance, düz bir iğne değildir. Ucundaki özel kavis sayesinde, diskin içine girdikten sonra doktorun yönlendirmesiyle sağa-sola manevra yapabilir.</li>
            <li><strong>Geniş Alan Tarama:</strong> Bu manevra kabiliyeti sayesinde tek bir giriş noktasından diskin içindeki farklı bölgelere ulaşılır ve 6-8 farklı kanal açılarak maksimum rahatlama sağlanır.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Siyatik Ağrısına Kesin Çözüm</h2>
          <p className="text-gray-700 mb-4">
            Hastaların en büyük şikayeti bel ağrısından ziyade, kalçadan topuğa kadar inen çekilme ve ağrıdır. Nükleoplasti, diskin içindeki basıncı düşürerek (Vakum etkisi) fıtığı geri çeker.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-800 font-medium">
              "İşlemden hemen sonra, hasta masadan kalktığında bacağındaki o çekilme hissinin ve ağrının geçtiğini fark eder. Bu, sinir üzerindeki baskının kalktığının en büyük kanıtıdır."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Açık Ameliyattan Farkı Nedir?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mt-4 text-sm text-gray-700">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left border-b">Özellik</th>
                  <th className="py-3 px-4 text-left border-b text-red-600">Açık Ameliyat</th>
                  <th className="py-3 px-4 text-left border-b text-blue-600 font-bold">Nükleoplasti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Kesi / Dikiş</td>
                  <td className="py-3 px-4 border-b">Var (2-5 cm)</td>
                  <td className="py-3 px-4 border-b">Yok (İğne deliği)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Anestezi</td>
                  <td className="py-3 px-4 border-b">Genel (Narkoz)</td>
                  <td className="py-3 px-4 border-b">Lokal + Sedasyon</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Hastanede Yatış</td>
                  <td className="py-3 px-4 border-b">1-3 Gün</td>
                  <td className="py-3 px-4 border-b">Yok (Günübirlik)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">İşe Dönüş</td>
                  <td className="py-3 px-4 border-b">4-6 Hafta</td>
                  <td className="py-3 px-4 border-b">2-3 Gün</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Ameliyattan Önce Son Çıkış</h3>
            <p className="text-blue-700 mb-4">Fıtığınız patlamadıysa (Sekestre değilse), ameliyat olmadan önce mutlaka Nükleoplasti seçeneğini değerlendirin.</p>
            <Link href="/iletisim" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Ücretsiz Danışma
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}