import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost2() {
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
            Boyun Fıtığında Ameliyatsız Çözüm: CervaLance Teknolojisi
          </h1>
          <p className="text-blue-200 mt-4 text-lg">
            Kola vuran ağrılar ve uyuşmalar kaderiniz değil. Boyun bölgesine özel geliştirilen hassas tedavi yöntemini inceleyin.
          </p>
        </div>
      </div>

      {/* Makale İçeriği */}
      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Boyun fıtığı (Servikal Disk Hernisi), bel fıtığına göre çok daha hassas bir bölgededir. Çünkü boyun omurları daha küçüktür ve omurilik ile sinir köklerine çok yakındır. Bu yüzden hastalar genellikle boyun ameliyatlarından korkarlar. Ancak <strong>Nükleoplasti</strong>, bu bölge için özel olarak tasarlanmış teknolojisiyle güvenli bir liman sunuyor.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">CervaLance: Boyun İçin Özel Tasarım</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bel bölgesinde kullanılan cihazlar boyun için uygun değildir. Bu nedenle boyun fıtıklarında <strong>CervaLance™</strong> adı verilen, çok daha ince ve hassas manevra kabiliyetine sahip özel bir elektrot kullanılır.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-blue-800 italic">
              "Boyun fıtığı tedavisinde kullanılan elektrotlar, saç teli kadar hassas kanallar açarak sinir üzerindeki baskıyı milimetrik olarak kaldırır."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">İşlem Nasıl Yapılır?</h2>
          <p className="text-gray-700 mb-4">
            Boyun fıtığı nükleoplastisi, genellikle boynun ön kısmından (boğazın yanından) girilerek yapılır. Bu yaklaşım, omurilik ve ana sinir dallarına dokunmadan diske ulaşmanın en güvenli yoludur.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Güvenli Giriş:</strong> Ultrason veya Skopi eşliğinde damar ve sinir paketleri korunarak giriş yapılır.</li>
            <li><strong>Ses Kısıklığı Riski?</strong> Girişim yerinin hassasiyeti nedeniyle hastalar ses kısıklığından korkar. Ancak Nükleoplasti'de kullanılan ince kanüller sayesinde bu risk yok denecek kadar azdır ve geçicidir.</li>
            <li><strong>Anında Etki:</strong> Boyun diskleri küçük hacimli olduğu için, çok az miktarda buharlaştırma bile (0.5cc) ciddi bir basınç düşüşü sağlar ve hasta masadan kalktığında kolundaki ağrının hafiflediğini hisseder.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Kimlere Uygulanır?</h2>
          <p className="text-gray-700 mb-4">
            Boyun fıtığında Nükleoplasti için en ideal adaylar şunlardır:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-2">✓</span>
              <p className="text-gray-700">Kola yayılan ağrı, uyuşma veya karıncalanma hissedenler.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-2">✓</span>
              <p className="text-gray-700">Boyun hareketleri kısıtlanmış ve ağrılı olanlar.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-2">✓</span>
              <p className="text-gray-700">MR'da fıtığı "patlamamış" (kapsülü sağlam) görünenler.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-2">✓</span>
              <p className="text-gray-700">Fizik tedaviye rağmen ağrısı geçmeyenler.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Boyun Ağrılarınızdan Kurtulmak Mümkün</h3>
            <p className="text-gray-600 mb-4">MR görüntülerinizi gönderin, tedaviye uygun olup olmadığınızı uzmanlarımız değerlendirsin.</p>
            <Link href="/iletisim" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Bize Ulaşın
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}