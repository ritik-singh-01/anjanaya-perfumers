"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";

interface Slide {
  image: string;
  eyebrowEn: string;
  eyebrowHi: string;
  titleEn: string;
  titleHi: string;
  subEn: string;
  subHi: string;
  href: string;
  ctaEn: string;
  ctaHi: string;
}

const slides: Slide[] = [
  {
    image: "/images/banners/hero-banner.jpg",
    eyebrowEn: "Anjanaya Perfumers",
    eyebrowHi: "अंजनाया परफ्यूमर्स",
    titleEn: "Sacred scents, crafted with devotion",
    titleHi: "पवित्र सुगंध, श्रद्धा से रचित",
    subEn: "Traditional attars & authentic pooja samagri — a heritage of fragrance for your every ritual.",
    subHi: "पारंपरिक अत्तर और प्रामाणिक पूजा सामग्री — आपके हर अनुष्ठान के लिए सुगंध की विरासत।",
    href: "/shop",
    ctaEn: "Explore the Collection",
    ctaHi: "संग्रह देखें",
  },
  {
    image: "/images/categories/perfumes-attars.jpg",
    eyebrowEn: "Traditional Attars",
    eyebrowHi: "पारंपरिक अत्तर",
    titleEn: "Pure, alcohol-free fragrances",
    titleHi: "शुद्ध, अल्कोहल-रहित सुगंध",
    subEn: "Distilled the traditional way from flowers, woods and resins — long-lasting and gentle on skin.",
    subHi: "फूलों, लकड़ियों और रेज़िन से पारंपरिक विधि से आसवित — लंबे समय तक टिकने वाले और त्वचा के अनुकूल।",
    href: "/shop?category=perfumes-attars",
    ctaEn: "View Attars",
    ctaHi: "अत्तर देखें",
  },
  {
    image: "/images/categories/hawan-samagri.jpg",
    eyebrowEn: "Complete Pooja Samagri",
    eyebrowHi: "संपूर्ण पूजा सामग्री",
    titleEn: "Everything for your rituals",
    titleHi: "हर अनुष्ठान के लिए सब कुछ",
    subEn: "Hawan samagri, dhoop, chandan, gulab jal and more — sourced and prepared with care.",
    subHi: "हवन सामग्री, धूप, चंदन, गुलाब जल और भी बहुत कुछ — सावधानी से चुना और तैयार किया गया।",
    href: "/shop?category=pooja-samagri",
    ctaEn: "View Samagri",
    ctaHi: "सामग्री देखें",
  },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(id);
  }, [reduce, paused, count]);

  const enquireUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi! I'd like to know more about Anjanaya Perfumers' collection."
  )}`;

  const active = slides[index];

  return (
    <section
      className="relative h-[calc(100vh-88px)] min-h-[520px] max-h-[880px] w-full overflow-hidden bg-on-surface md:h-[calc(100vh-92px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={t(s.titleEn, s.titleHi)}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform ease-out duration-[6000ms] ${
              i === index && !reduce ? "scale-110" : "scale-100"
            }`}
          />
          {/* Legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-white"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/80 md:text-sm">
              {t(active.eyebrowEn, active.eyebrowHi)}
            </p>
            <h1 className="display-serif mb-5 text-4xl md:text-6xl lg:text-7xl">
              {t(active.titleEn, active.titleHi)}
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              {t(active.subEn, active.subHi)}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={active.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-primary-container active:scale-95"
              >
                {t(active.ctaEn, active.ctaHi)}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </Link>
              <a
                href={enquireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(index - 1)}
        aria-label={t("Previous slide", "पिछला")}
        className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 md:left-6"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label={t("Next slide", "अगला")}
        className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 md:right-6"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setIndex(i)}
            aria-label={`${t("Go to slide", "स्लाइड")} ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
