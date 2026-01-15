import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Başlık Alanı (Header) */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm text-blue-200 mb-4 font-semibold uppercase tracking-wider">
            <Link href="/blog" className="hover:text-white">Blog</Link> &gt; Makale
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Ameliyatsız Fıtık Tedavisinde Devrim: Nükleoplasti Nedir?
          </h1>
          <p className="text-blue-200 mt-4 text-lg">
            Bıçak altına yatmadan, nokta atışı buharlaştırma yöntemiyle fıtıktan kurtulmak mümkün mü?
          </p>
        </div>
      </div>

      {/* Makale İçeriği */}
      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Giriş */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Bel veya boyun fıtığı teşhisi konulduğunda hastaların aklına gelen ilk korku genellikle <span className="italic">"Ameliyat mı olacağım?"</span> sorusudur. Yıllarca süren ilaç tedavileri ve fizik tedavi seanslarına rağmen geçmeyen ağrılar arasında sıkışıp kaldıysanız, modern tıbbın sunduğu güçlü bir alternatif var: <strong>Nükleoplasti.</strong>
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Nükleoplasti Nedir? (Teknolojinin Arkasındaki Bilim)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nükleoplasti, <strong>Coblation (Kontrollü Ablasyon)</strong> adı verilen patentli bir teknoloji kullanır. Bu yöntem, birçok hastanın karıştırdığı "Lazer" tedavisinden tamamen farklıdır ve çok daha güvenlidir.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Lazer Değil, Plazma:</strong> Lazer tedavileri dokuyu yüksek ısı (400-600°C) ile yakarak küçültürken, Nükleoplasti Radyofrekans enerjisi kullanarak Soğuk Plazma alanı oluşturur.</li>
            <li><strong>Düşük Isı:</strong> İşlem sadece 40°C ile 70°C arasında gerçekleşir. Böylece fıtığı buharlaştırırken çevredeki sağlıklı dokulara ve sinirlere ısı hasarı verme riski ortadan kaldırılır.</li>
            <li><strong>Moleküler Etki:</strong> Cihazın ucundaki plazma alanı, fıtıklaşan dokunun moleküler bağlarını nazikçe çözer.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">İşlem Nasıl Yapılır? (Adım Adım)</h2>
          <p className="text-gray-700 mb-4">
            Nükleoplasti işlemi bir ameliyat değildir; hastanede yatış gerektirmez. Süreç şöyle işler:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-600 mr-3">1. Hazırlık:</span>
              <span className="text-gray-700">Genel anestezi (narkoz) verilmez. Hasta uyanıktır ama ağrı duymaz.</span>
            </div>
            <div className="flex bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-600 mr-3">2. Giriş:</span>
              <span className="text-gray-700">Ciltte kesi yapılmaz. İnce bir iğne (kanül) ile fıtıklaşmış diskin içine girilir.</span>
            </div>
            <div className="flex bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-600 mr-3">3. Buharlaştırma:</span>
              <span className="text-gray-700">İğnenin içinden özel elektrot gönderilir ve fazla doku buharlaştırılır.</span>
            </div>
            <div className="flex bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-600 mr-3">4. Bitiş:</span>
              <span className="text-gray-700">Yaklaşık 20 dakika sürer. Dikiş atılmaz, sadece küçük bir bant yapıştırılır.</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Mantık: Balonun Havasını Almak 🎈</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fıtık, içi basınçla dolu ve dışarı doğru taşmış bir balon gibidir. Bu balon sinirlere baskı yaparak ağrıya neden olur. 
            Nükleoplasti ile bu balonun içinden çok küçük bir miktar doku buharlaştırılır. İçerideki hacim azaldığında, fizik kuralları gereği basınç hızla düşer. Basıncın düşmesiyle birlikte fıtık geri çekilir (vakum etkisi) ve sinir rahatlar.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Avantajları Nelerdir?</h2>
          <p className="text-gray-700 mb-4">
            Bilimsel araştırmalar, işlemin komplikasyon riskinin %1.5 gibi çok düşük bir oranda olduğunu göstermektedir.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ Neştersiz ve Dikişsiz</div>
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ Hızlı Taburcu (1-2 Saat)</div>
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ Güvenli Soğuk Ablasyon</div>
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg text-green-800 font-medium">✓ Hızlı İşe Dönüş</div>
          </div>

          {/* Uyarı */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600 text-sm text-gray-500">
            <strong>Not:</strong> Bu içerik bilgilendirme amaçlıdır. Tanı ve tedavi için mutlaka uzman doktorunuza başvurunuz ve MR sonuçlarınızı değerlendirmesini isteyiniz.
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}