"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const tabs = [
    {
      label: t("Description", "विवरण"),
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold">
            {t("About this Product", "इस उत्पाद के बारे में")}
          </h3>
          <p className="text-on-surface-variant leading-loose">
            {t(product.description, product.descriptionHindi)}
          </p>
        </div>
      ),
    },
    ...(product.ingredients
      ? [
          {
            label: t("Ingredients", "सामग्री"),
            content: (
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold">
                  {t("Ingredients & Composition", "सामग्री और संरचना")}
                </h3>
                <p className="text-on-surface-variant leading-loose">{product.ingredients}</p>
              </div>
            ),
          },
        ]
      : []),
    ...(product.howToUse
      ? [
          {
            label: t("How to Use", "उपयोग विधि"),
            content: (
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold">
                  {t("How to Use", "उपयोग विधि")}
                </h3>
                <p className="text-on-surface-variant leading-loose">{product.howToUse}</p>
              </div>
            ),
          },
        ]
      : []),
    {
      label: t(`Reviews (${product.reviewCount})`, `रिव्यू (${product.reviewCount})`),
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold">
            {t("Customer Reviews", "ग्राहक रिव्यू")}
          </h3>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl font-bold">{product.rating}</div>
            <div>
              <div className="flex text-secondary-container mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: `'FILL' ${i < Math.floor(product.rating) ? 1 : 0}`,
                    }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant">
                {t(`Based on ${product.reviewCount} reviews`, `${product.reviewCount} रिव्यू पर आधारित`)}
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant italic">
            {t(
              "Customer reviews will appear here. Be the first to share your experience!",
              "ग्राहक रिव्यू यहाँ दिखाई देंगे। अपना अनुभव साझा करने वाले पहले व्यक्ति बनें!"
            )}
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="mb-16 md:mb-24">
      <div className="flex border-b border-outline-variant/20 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={cn(
              "px-6 md:px-8 py-4 font-medium whitespace-nowrap transition-colors",
              i === activeTab
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="max-w-3xl">{tabs[activeTab].content}</div>
    </section>
  );
}
