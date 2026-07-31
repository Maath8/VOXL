"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

interface HeroBannerProps {
  products: Product[];
}

export default function HeroBanner({ products }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!products || products.length === 0) return null;

  const product = products[currentIndex];
  const inCart = isInCart(product.id);
  const fav = isFavorite(product.id);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150); // 300ms fade-out süresi
  };

  const goToSlide = (index: number) => handleSlideChange(index);
  const nextSlide = () => handleSlideChange((currentIndex + 1) % products.length);
  const prevSlide = () => handleSlideChange((currentIndex - 1 + products.length) % products.length);

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-40 blur-3xl transition-all duration-1000" />
        <div className="absolute -bottom-16 right-1/3 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl transition-all duration-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        {/* Slider Navigation Arrows (Only show if multiple products) */}
        {products.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all hover:scale-110 focus:outline-none"
              aria-label="Önceki ürün"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all hover:scale-110 focus:outline-none"
              aria-label="Sonraki ürün"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Product Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-8 bg-orange-200 rounded-3xl opacity-30 blur-2xl transition-all duration-1000" />
              <div
                key={`img-${product.id}`}
                className={`relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-4 h-full ${isTransitioning
                  ? "animate-out fade-out slide-out-to-bottom-4 duration-300 ease-in"
                  : "animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out"
                  }`}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
              ⭐ Öne Çıkan Ürün
            </div>
          </div>

          {/* Right: Product Info */}
          <div
            key={`info-${product.id}`}
            className={`order-1 md:order-2 space-y-6 ${isTransitioning
              ? "animate-out fade-out slide-out-to-bottom-4 duration-300 ease-in"
              : "animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out sm:slide-in-from-right-4"
              }`}
          >
            <div>
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
                3D Baskı · {product.material}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md min-h-[80px]">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-gray-900">
                {product.price} ₺
              </span>
            </div>

            {/* Specs chips */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
                {product.dimensions}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {product.material} Baskı
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="hero-add-to-cart"
                onClick={() => addToCart(product)}
                className={`inline-flex items-center justify-center gap-2 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${inCart
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

              <div className="flex gap-3">
                <button
                  type="button"
                  id="hero-toggle-favorite"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product.id);
                  }}
                  className={`inline-flex items-center justify-center gap-2 font-semibold text-lg px-5 py-4 rounded-xl border-2 transition-all duration-200 ${fav
                    ? "bg-orange-50 border-orange-400 text-orange-500"
                    : "bg-white border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-400"
                    }`}
                  aria-label="Favorilere ekle"
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

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-lg px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-orange-300 transition-all duration-200"
                >
                  Detay
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        {products.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Slayt ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${currentIndex === index
                  ? "w-8 h-2.5 bg-orange-500"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-orange-300"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
