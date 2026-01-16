import "./globals.css";
import React from "react";
import Script from "next/script"; // Google kodlarını güvenli çalıştırmak için gerekli

export const metadata = {
  // 1. ARAMA MOTORU AYARLARI (Google)
  title: "Nükleoplasti.tr | Ameliyatsız Bel ve Boyun Fıtığı Tedavisi",
  description: "Bel ve boyun fıtığında neştersiz, dikişsiz ve aynı gün taburcu imkanı sunan modern Nükleoplasti (Buharlaştırma) teknolojisi.",
  keywords: ["nükleoplasti", "bel fıtığı tedavisi", "ameliyatsız fıtık", "boyun fıtığı", "bvs doctors"],
  
  // 2. SOSYAL MEDYA PAYLAŞIM AYARLARI (WhatsApp, Facebook, Instagram)
  openGraph: {
    title: "Nükleoplasti.tr | Ameliyatsız Fıtık Tedavisi",
    description: "Fıtık ağrılarınızdan 20 dakikada kurtulun. Uzman cerrah kadrosu ve modern teknoloji.",
    url: "https://nukleoplasti.tr",
    siteName: "Nükleoplasti TR",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Nükleoplasti Tedavisi Önizleme",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  // 3. TWITTER / X AYARLARI
  twitter: {
    card: "summary_large_image",
    title: "Nükleoplasti.tr | Ameliyatsız Fıtık Çözümü",
    description: "Ağrı bir kader değil, Nükleoplasti ile tanışın.",
    images: ["/og-image.jpg"],
  },

  // 4. İKONLAR
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {/* --- GOOGLE ANALYTICS BAŞLANGIÇ --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VXJ96LHHS3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VXJ96LHHS3');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS BİTİŞ --- */}

        {children}
      </body>
    </html>
  );
}