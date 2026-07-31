import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/lib/products";
import ProductActions from "@/components/ProductActions";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Ürün Bulunamadı – VOXL 3D" };
  return {
    title: `${product.name} – VOXL 3D`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Ana Sayfa
            </Link>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/products"
              className="hover:text-orange-500 transition-colors"
            >
              Ürünler
            </Link>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Background glow */}
              <div className="absolute inset-8 bg-orange-100 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden aspect-square shadow-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
                {product.isFeatured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ⭐ Öne Çıkan Ürün
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
                3D Baskı Ürünü
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specs */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Teknik Özellikler
              </h2>
              <dl className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <dt className="text-sm text-gray-500 font-medium">
                    Baskı Malzemesi
                  </dt>
                  <dd className="text-sm font-bold text-gray-900 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    {product.material}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <dt className="text-sm text-gray-500 font-medium">
                    Boyutlar
                  </dt>
                  <dd className="text-sm font-bold text-gray-900">
                    {product.dimensions}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-2">
                  <dt className="text-sm text-gray-500 font-medium">
                    Ürün Kodu
                  </dt>
                  <dd className="text-sm font-mono text-gray-600">
                    {product.id.toUpperCase()}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Features list */}
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-3">
                Neden Bu Ürün?
              </h2>
              <ul className="space-y-2">
                {[
                  "Yüksek kaliteli, dayanıklı malzeme",
                  "Kolay montaj ve kullanım",
                  "Uzun ömürlü baskı kalitesi",
                  "Türkiye içi hızlı kargo",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-orange-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions (Client Component) */}
            <ProductActions product={product} />

          </div>
        </div>
      </div>
    </div>
  );
}
