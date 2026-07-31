import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünler – VOXL 3D",
  description:
    "Tüm 3D baskı ürünlerimizi keşfedin. PLA ve PETG malzemelerle üretilmiş pratik ve dayanıklı ürünler.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Koleksiyon
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Tüm Ürünler
            </h1>
            <p className="text-lg text-gray-500">
              Günlük hayatınızı kolaylaştırmak için özenle tasarlanmış{" "}
              <span className="text-orange-500 font-medium">
                {products.length} ürün
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={products} />
    </>
  );
}
