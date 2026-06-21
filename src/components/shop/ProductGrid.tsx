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
        <p className="text-on-surface text-lg font-medium mb-2">
          {emptyMessage || t("Coming soon to our collection.", "जल्द ही हमारे संग्रह में।")}
        </p>
        <p className="text-on-surface-variant/80 text-sm mb-6 max-w-md mx-auto">
          {t(
            "We're expanding this range — message us and we'll help you find exactly what you need.",
            "हम यह श्रेणी बढ़ा रहे हैं — हमें संदेश करें और हम आपकी ज़रूरत खोजने में मदद करेंगे।"
          )}
        </p>
        <a
          href="https://wa.me/918169638918?text=Hi!%20I'm%20looking%20for%20a%20product%20at%20Shri%20Anjaneya."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3 font-semibold hover:opacity-90 transition active:scale-95"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
