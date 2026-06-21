"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";

interface FeaturedProductsProps {
  products: Product[];
  title?: { en: string; hi: string };
}

export default function FeaturedProducts({ products, title }: FeaturedProductsProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl mb-4">
                {title
                  ? t(title.en, title.hi)
                  : t("Divine Offerings", "दिव्य प्रसाद")}
              </h2>
              <p className="text-on-surface-variant max-w-xl text-sm md:text-base">
                {t(
                  "Curated items to elevate your spiritual practices, crafted with devotion and authenticity.",
                  "आपकी आध्यात्मिक पद्धतियों को ऊँचा उठाने के लिए चुनी हुई वस्तुएँ, श्रद्धा और प्रामाणिकता से निर्मित।"
                )}
              </p>
            </div>
            <Link
              href="/shop"
              className="text-primary font-semibold flex items-center gap-2 group whitespace-nowrap"
            >
              {t("View All Products", "सभी उत्पाद देखें")}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
