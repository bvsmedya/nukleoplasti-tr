import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Link from "next/link";

export default function BlogPost2({ lang = "tr" }: { lang?: "tr" | "en" | "fr" }) {
  const isTr = lang === "tr";
  const isEn = lang === "en";
  const isFr = lang === "fr";

  const t = {
    back: "Blog",
    makale: isTr ? "Makale" : (isFr ? "Article" : "Article"),
    title: isTr
      ? "Boyun Fıtığında Ameliyatsız Çözüm: CervaLance Teknolojisi"
      : (isFr ? "Solution Non-Chirurgicale pour l'Hernie Cervicale : Technologie CervaLance" : "Non-Surgical Solution for Cervical Hernia: CervaLance Technology"),
    subtitle: isTr
      ? "Kola vuran ağrılar ve uyuşmalar kaderiniz değil. Boyun bölgesine özel geliştirilen hassas tedavi yöntemini inceleyin."
      : (isFr ? "Les douleurs au bras ne sont pas une fatalité. Découvrez la méthode de traitement développée pour le cou." : "Pain radiating to the arm is not your destiny. Examine the precise treatment method developed specifically for the neck."),
    sec1Title: isTr ? "CervaLance: Boyun İçin Özel Tasarım" : (isFr ? "CervaLance : Conception Spéciale pour le Cou" : "CervaLance: Special Design for the Neck"),
    sec2Title: isTr ? "İşlem Nasıl Yapılır?" : (isFr ? "Comment se déroule la procédure ?" : "How is the Procedure Done?"),
    sec3Title: isTr ? "Kimlere Uygulanır?" : (isFr ? "À qui s'adresse ce traitement ?" : "Who is it for?"),
    contactTitle: isTr ? "Boyun Ağrılarınızdan Kurtulmak Mümkün" : (isFr ? "Il est possible de se débarrasser des douleurs au cou" : "It is Possible to Get Rid of Neck Pain"),
    contactDesc: isTr ? "MR görüntülerinizi gönderin, tedaviye uygun olup olmadığınızı uzmanlarımız değerlendirsin." : (isFr ? "Envoyez vos IRM, nos experts évalueront votre éligibilité." : "Send your MRI scans, our experts will evaluate your suitability."),
    contactBtn: isTr ? "Bize Ulaşın" : (isFr ? "Contactez-nous" : "Contact Us")
  };

  const base = lang === 'tr' ? '' : `/${lang}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar lang={lang} />

      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm text-blue-200 mb-4 font-semibold uppercase tracking-wider">
            <Link href={`${base}/blog`} className="hover:text-white">{t.back}</Link> &gt; {t.makale}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.title}
          </h1>
          <p className="text-blue-200 mt-4 text-lg">
            {t.subtitle}
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {isTr ? "Boyun fıtığı (Servikal Disk Hernisi)..." : (isFr ? "L'hernie cervicale est dans une zone beaucoup plus sensible..." : "Cervical hernia is in a much more sensitive area than lumbar hernia...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec1Title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {isTr ? "Bel bölgesinde kullanılan cihazlar boyun için uygun değildir..." : (isFr ? "Les appareils utilisés pour la région lombaire ne conviennent pas au cou..." : "Devices used in the lumbar region are not suitable for the neck...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec2Title}</h2>
          <p className="text-gray-700 mb-4">
            {isTr ? "Boyun fıtığı nükleoplastisi genellikle boynun ön kısmından yapılır..." : (isFr ? "La nucléoplastie cervicale se fait généralement par l'avant du cou..." : "Cervical Nucleoplasty is generally performed through the front of the neck...")}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">{t.sec3Title}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-2">✓</span>
              <p className="text-gray-700">{isTr ? "Kola yayılan ağrı..." : (isFr ? "Douleur irradiant vers le bras..." : "Pain radiating to the arm...")}</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.contactTitle}</h3>
            <p className="text-gray-600 mb-4">{t.contactDesc}</p>
            <Link href={`${base}/iletisim`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              {t.contactBtn}
            </Link>
          </div>

        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
}