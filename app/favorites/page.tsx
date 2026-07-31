"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const allProducts = getAllProducts();
  
  const [displayedIds, setDisplayedIds] = useState<string[]>(favoriteIds);

  useEffect(() => {
    setDisplayedIds(prev => {
      const added = favoriteIds.filter(id => !prev.includes(id));
      if (added.length > 0) return [...prev, ...added];
      return prev;
    });
  }, [favoriteIds]);

  const favoriteProducts = allProducts.filter(p => displayedIds.includes(p.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorileriniz Boş</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Henüz favorilerinize hiçbir ürün eklemediniz. Ürünlerimizi inceleyip beğendiklerinizi kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
        </p>
        <Link
          href="/products"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors"
        >
          Ürünleri Keşfet
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Favorilerim
          </h1>
          <p className="text-gray-500">
            Toplam <span className="font-bold text-orange-500">{favoriteIds.length}</span> ürün favorilerinizde bulunuyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
