import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KVKK() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-sans">KVKK Aydınlatma Metni</h1>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-blue-900">1. Veri Sorumlusu</h2>
            <p>Nukleoplasti.tr olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca bilgilendirme amacıyla hazırlanmıştır.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Web sitemizdeki iletişim formları ve MR yükleme modülü üzerinden paylaştığınız ad, soyad ve iletişim bilgileriniz sadece;</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tıbbi danışmanlık süreçlerinin yürütülmesi,</li>
              <li>Randevu taleplerinizin yönetilmesi,</li>
              <li>Tedavi yöntemleri hakkında bilgilendirme yapılması amaçlarıyla işlenmektedir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">3. Verilerin Saklanması ve Aktarımı</h2>
            <p>Paylaştığınız veriler, yalnızca uzman hekimlerimiz ve yetkili sağlık personelimiz tarafından incelenir. Üçüncü şahıslara veya reklam ajanslarına asla satılmaz ve aktarılmaz.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900">4. Yasal Uyarı (Disclaimer)</h2>
            <p className="font-bold text-red-600">ÖNEMLİ: Bu web sitesinde yer alan tüm tıbbi bilgiler, videolar ve makaleler sadece bilgilendirme amaçlıdır. Hiçbir şekilde tanı ve tedavi yerine geçmez. Kesin tanı için mutlaka uzman bir hekime başvurunuz.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}