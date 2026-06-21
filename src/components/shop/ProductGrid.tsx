"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({ products, emptyMessage }: ProductGridProps) {
  const { t } = useLanguage();

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">
          inventory_2
        </span>
        <p className="text-on-surface-variant text-lg">
          {emptyMessage || t("No products found.", "कोई उत्पाद नहीं मिला।")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
