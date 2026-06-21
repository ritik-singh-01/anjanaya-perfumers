"use client";

import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/shop/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const { t } = useLanguage();

  if (products.length === 0) return null;

  return (
    <section>
      <div className="flex justify-between items-end mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-headline)] font-bold">
          {t("Sacred Offerings", "पवित्र प्रसाद")}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
