"use client";

import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import type { Product } from "@/types/product";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const inCart = isInCart(product.id);
  const fav = isFavorite(product.id);

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-4xl font-extrabold text-gray-900">
          {product.price} ₺
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          id={`detail-add-to-cart-${product.id}`}
          onClick={() => addToCart(product)}
          className={`flex-1 flex items-center justify-center gap-2.5 font-bold text-lg py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${
            inCart
              ? "bg-green-500 hover:bg-green-600 text-white hover:shadow-green-200 hover:shadow-xl"
              : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-orange-200 hover:shadow-xl"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {inCart ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            )}
          </svg>
          {inCart ? "Sepete Eklendi" : "Sepete Ekle"}
        </button>

        <button
          id={`detail-toggle-favorite-${product.id}`}
          onClick={() => toggleFavorite(product.id)}
          className={`inline-flex items-center justify-center gap-2 font-semibold text-lg px-8 py-4 rounded-xl border-2 transition-all duration-200 ${
            fav
              ? "bg-orange-50 border-orange-400 text-orange-500"
              : "bg-white border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-400"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={fav ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {fav ? "Favorilerde" : "Favorilere Ekle"}
        </button>
      </div>
    </div>
  );
}
