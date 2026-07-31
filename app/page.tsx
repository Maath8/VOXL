import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import { getAllProducts, getFeaturedProducts } from "@/lib/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VOXL 3D – Ana Sayfa",
  description:
    "3D baskı ile üretilmiş pratik ve şık ürünler. Ev organizasyonunu ve çalışma alanınızı bir üst seviyeye taşıyın.",
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getAllProducts();
  const otherProducts = allProducts.filter((p) => !p.isFeatured);

  return (
    <>
      {/* Hero Banner Slider */}
      {featuredProducts.length > 0 && <HeroBanner products={featuredProducts} />}

      {/* Stats bar */}
      <div className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 divide-x divide-orange-400">
            {[
              { value: "100%", label: "Dayanıklı Malzeme" },
              { value: "6+", label: "Farklı Ürün" },
              { value: "Hızlı", label: "Teslimat" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-orange-100 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid
        products={otherProducts}
        title="Tüm Ürünlerimiz"
        subtitle="Günlük hayatınızı kolaylaştırmak için tasarlanmış, PLA ve PETG malzemelerle üretilmiş ürünler."
      />

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Özel Tasarım Mümkün
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aklınızdaki ürünü{" "}
            <span className="text-orange-500">birlikte tasarlayalım</span>
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Listede görmediğiniz bir ürün mü istiyorsunuz? Özel tasarım ve
            baskı talepleriniz için bizimle iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            İletişime Geç
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
