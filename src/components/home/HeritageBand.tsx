"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

const credentials = [
  { icon: "history_edu", en: "Generations of craft", hi: "पीढ़ियों की कला" },
  { icon: "spa", en: "Pure ingredients", hi: "शुद्ध सामग्री" },
  { icon: "water_drop", en: "Alcohol-free attars", hi: "अल्कोहल-रहित अत्तर" },
];

export default function HeritageBand() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Narrative */}
        <Reveal>
          <p className="eyebrow mb-3">{t("Our Heritage", "हमारी विरासत")}</p>
          <h2 className="display-serif text-3xl md:text-4xl lg:text-5xl">
            {t("From the heart of Kannauj", "कन्नौज के हृदय से")}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-on-surface-variant md:text-lg">
            <p>
              {t(
                "For generations, Shri Anjaneya has crafted traditional attars and pooja samagri in Kannauj — India's perfume capital — distilling fragrance the slow, time-honoured way.",
                "पीढ़ियों से, श्री अंजनेय कन्नौज — भारत की इत्र राजधानी — में पारंपरिक अत्तर और पूजा सामग्री बनाता आया है, सुगंध को धीमी, समय-सिद्ध विधि से आसवित करते हुए।"
              )}
            </p>
            <p>
              {t(
                "Pure ingredients, trusted recipes, and a quiet devotion to authenticity — the kind of care a machine can never replicate.",
                "शुद्ध सामग्री, विश्वसनीय विधियाँ, और प्रामाणिकता के प्रति शांत समर्पण — ऐसी देखभाल जो कोई मशीन कभी नहीं कर सकती।"
              )}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-outline-variant/40 pt-6">
            {credentials.map((c) => (
              <span
                key={c.icon}
                className="flex items-center gap-2 text-sm font-medium text-on-surface"
              >
                <span className="material-symbols-outlined text-base text-primary">
                  {c.icon}
                </span>
                {t(c.en, c.hi)}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-outline-variant px-7 py-3.5 font-medium text-on-surface transition-all hover:bg-surface-container active:scale-95"
          >
            {t("Read our story", "हमारी कहानी पढ़ें")}
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-0.5">
              arrow_forward
            </span>
          </Link>
        </Reveal>

        {/* Image with offset matted frame */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-primary/25"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:aspect-[5/4]">
              <Image
                src="/images/products-studio/Attar kewra gulab mix.jpg"
                alt={t(
                  "Traditional attar craft in Kannauj",
                  "कन्नौज में पारंपरिक अत्तर कला"
                )}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
