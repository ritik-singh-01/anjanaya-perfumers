"use client";

import { useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";

interface ProductCarouselProps {
  title: { en: string; hi: string };
  subtitle?: { en: string; hi: string };
  products: Product[];
  viewAllHref?: string;
  /** Tint the band background */
  muted?: boolean;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  viewAllHref,
  muted = false,
}: ProductCarouselProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!products.length) return null;

  const scrollByDir = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.9, 600), behavior: "smooth" });
  };

  return (
    <section className={`py-12 md:py-16 ${muted ? "bg-surface-container-low" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">{t("Collection", "संग्रह")}</p>
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl">
                {t(title.en, title.hi)}
              </h2>
              {subtitle && (
                <p className="mt-2 max-w-xl text-sm text-on-surface-variant md:text-base">
                  {t(subtitle.en, subtitle.hi)}
                </p>
              )}
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => scrollByDir(-1)}
                aria-label={t("Scroll left", "बाएँ स्क्रॉल करें")}
                className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant text-on-surface transition hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollByDir(1)}
                aria-label={t("Scroll right", "दाएँ स्क्रॉल करें")}
                className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant text-on-surface transition hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-6"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="w-[46%] shrink-0 snap-start sm:w-[260px] md:w-[280px]"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {viewAllHref && (
          <div className="mt-6">
            <Link
              href={viewAllHref}
              className="group inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
            >
              {t("View all", "सभी देखें")}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
