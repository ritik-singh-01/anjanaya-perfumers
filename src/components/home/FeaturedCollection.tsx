"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import { formatPrice } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

interface FeaturedCollectionProps {
  products: Product[];
}

export default function FeaturedCollection({ products }: FeaturedCollectionProps) {
  const { t } = useLanguage();
  if (products.length < 3) return null;

  const [feature, ...rest] = products;
  const small = rest.slice(0, 4);

  const Card = ({ p, large = false }: { p: Product; large?: boolean }) => (
    <Link
      href={`/shop/${p.slug}`}
      className={`card-lift group relative block overflow-hidden rounded-2xl shadow-sm ${
        large
          ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto"
          : "aspect-square"
      }`}
    >
      <Image
        src={p.images[0]}
        alt={t(p.name, p.nameHindi)}
        fill
        sizes={large ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 50vw, 25vw"}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
        <h3
          className={`display-serif leading-tight ${
            large ? "text-2xl md:text-3xl" : "text-base md:text-lg"
          }`}
        >
          {t(p.name, p.nameHindi)}
        </h3>
        <p className={`mt-1 font-semibold ${large ? "text-lg" : "text-sm"}`}>
          {formatPrice(p.price)}
        </p>
      </div>
    </Link>
  );

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-2">{t("Featured Collection", "विशेष संग्रह")}</p>
              <h2 className="display-serif text-3xl md:text-4xl lg:text-5xl">
                {t("Editor's Picks", "हमारी पसंद")}
              </h2>
              <p className="mt-3 max-w-xl text-on-surface-variant md:text-lg">
                {t(
                  "A handpicked edit of our most-loved attars and pooja essentials — favourites of devotees across India.",
                  "हमारे सबसे पसंदीदा अत्तर और पूजा सामग्री का चुनिंदा संग्रह — पूरे भारत के भक्तों की पसंद।"
                )}
              </p>
            </div>
            <Link
              href="/shop"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
            >
              {t("View all", "सभी देखें")}
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:auto-rows-fr">
            <Card p={feature} large />
            {small.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
