"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function SignatureAttar() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-on-surface text-inverse-on-surface">
      {/* Soft warm glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[50vmin] w-[50vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(209,67,0,0.22),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        {/* Attar image */}
        <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-square">
          <Image
            src="/images/products/Attar mix Box Bottle big.jpg"
            alt={t("Shri Anjaneya traditional attar", "श्री अंजनेय पारंपरिक अत्तर")}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <Reveal className="order-2 max-w-lg lg:pl-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-fixed-dim md:text-sm">
            {t("Our Signature", "हमारी पहचान")}
          </p>
          <h2 className="display-serif mb-5 text-4xl text-inverse-primary md:text-5xl">
            {t("The Anjaneya Attar", "अंजनेय अत्तर")}
          </h2>
          <p className="mb-8 leading-relaxed text-inverse-on-surface/75">
            {t(
              "Alcohol-free, long-lasting attars distilled in Kannauj from flowers, woods and resins — the same craft that has perfumed prayer for generations. Enquire to find the scent that's yours.",
              "कन्नौज में फूलों, लकड़ियों और रेज़िन से आसवित, अल्कोहल-रहित और लंबे समय तक टिकने वाले अत्तर — वही कला जो पीढ़ियों से प्रार्थना को सुगंधित करती आई है। अपनी सुगंध चुनने के लिए पूछें।"
            )}
          </p>
          <Link
            href="/shop?category=perfumes-attars"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-primary-container active:scale-95"
          >
            {t("Explore Attars", "अत्तर देखें")}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5">
              arrow_forward
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
