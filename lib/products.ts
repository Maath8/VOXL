import type { Product } from "@/types/product";
import productsData from "@/data/products.json";

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getFeaturedProducts(): Product[] {
  return (productsData as Product[]).filter((p) => p.isFeatured);
}

export function getProductById(id: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.id === id);
}
