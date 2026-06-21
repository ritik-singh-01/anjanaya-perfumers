"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

const displayCategories = [
  {
    id: "hawan-samagri",
    href: "/shop?category=pooja-samagri",
    en: "Hawan Samagri",
    hi: "हवन सामग्री",
    image: "/images/categories/hawan-samagri.jpg",
    color: "from-amber-900/80",
  },
  {
    id: "chandan-products",
    href: "/shop?category=pooja-samagri",
    en: "Chandan Products",
    hi: "चंदन उत्पाद",
    image: "/images/categories/chandan.jpg",
    color: "from-orange-900/80",
  },
  {
    id: "dhoop-loban",
    href: "/shop?category=pooja-samagri",
    en: "Dhoop & Loban",
    hi: "धूप और लोबान",
    image: "/images/categories/dhoop-loban.jpg",
    color: "from-red-900/80",
  },
  {
    id: "sacred-waters",
    href: "/shop?category=pooja-samagri",
    en: "Sacred Waters",
    hi: "पवित्र जल",
    image: "/images/categories/sacred-waters.jpg",
    color: "from-teal-900/80",
  },
  {
    id: "perfumes-attars",
    href: "/shop?category=perfumes-attars",
    en: "Perfumes & Attars",
    hi: "इत्र और अत्तर",
    image: "/images/categories/perfumes-attars.jpg",
    color: "from-purple-900/80",
  },
  {
    id: "pooja-essentials",
    href: "/shop?category=pooja-samagri",
    en: "Pooja Essentials",
    hi: "पूजा आवश्यकताएँ",
    image: "/images/categories/pooja-essentials.jpg",
    color: "from-rose-900/80",
  },
];

export default function CategoryGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 mandala-bg">
      <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl mb-2">
            {t("Sacred Collections", "पवित्र संग्रह")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {displayCategories.map((cat, i) => (
          <Reveal
            key={cat.id}
            delay={Math.min(i * 0.07, 0.42)}
            className={i % 3 === 1 ? "md:mt-12" : ""}
          >
            <Link
              href={cat.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low"
            >
              <Image
                src={cat.image}
                alt={cat.en}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent to-transparent`} />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <h3 className="text-lg md:text-2xl font-[family-name:var(--font-headline)]">
                  {t(cat.en, cat.hi)}
                </h3>
                <p className="hindi-text opacity-90 text-sm md:text-base">
                  {t(cat.hi, cat.en)}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
