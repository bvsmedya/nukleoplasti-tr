import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Telefon Butonu (Mavi) */}
      <a
        href="tel:+905321744900"
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition duration-300 flex items-center justify-center hover:bg-blue-700"
        title="Bizi Arayın"
      >
        <FaPhone size={24} />
      </a>

      {/* WhatsApp Butonu (Yeşil) */}
      <a
        href="https://wa.me/905321744900?text=Merhaba, Nükleoplasti tedavisi hakkında bilgi almak istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition duration-300 flex items-center justify-center hover:bg-green-600"
        title="WhatsApp'tan Yazın"
      >
        <FaWhatsapp size={32} />
      </a>

    </div>
  );
}