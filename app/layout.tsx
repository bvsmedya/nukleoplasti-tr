import "./globals.css";
import React from "react"; // Bu satır o kırmızı çizgileri yok edecek

export const metadata = {
  title: "Nükleoplasti.tr",
  description: "Ameliyatsız Bel ve Boyun Fıtığı Tedavisi",
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
      <body>{children}</body>
    </html>
  );
}