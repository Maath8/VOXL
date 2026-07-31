import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VOXL 3D – Kaliteli 3D Baskı Ürünleri",
  description:
    "Dayanıklı PLA ve PETG malzemelerle üretilmiş, hayatı kolaylaştıran 3D baskı ürünleri. Organizasyon çözümleri, dekor aksesuarları ve daha fazlası.",
  keywords: "3D baskı, PLA, PETG, organizasyon, ev aksesuarları",
  openGraph: {
    title: "VOXL 3D – Kaliteli 3D Baskı Ürünleri",
    description: "Hayatı kolaylaştıran 3D baskı ürünleri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <CartProvider>
          <FavoritesProvider>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
