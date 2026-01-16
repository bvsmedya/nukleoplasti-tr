import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// BURAYI GÜNCELLİYORUZ 👇
export const metadata: Metadata = {
  title: "Nükleoplasti.tr | Ameliyatsız Bel ve Boyun Fıtığı Tedavisi",
  description: "Bel ve boyun fıtığı tedavisinde ameliyatsız, dikişsiz ve güvenli çözüm. LumbaLance ve CervaLance teknolojisi ile ağrılarınıza son verin.",
  icons: {
    icon: "/logo.png", // Favicon olarak senin logonu kullanacak
    shortcut: "/logo.png",
    apple: "/logo.png", // iPhone'lar için de bunu kullanacak
  },
};
// -----------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}