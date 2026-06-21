"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductCarousel from "@/components/home/ProductCarousel";
import SignatureAttar from "@/components/home/SignatureAttar";
import VideoShowcase from "@/components/home/VideoShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { products, getProductsByCategory, getBestsellers } from "@/data/products";

export default function HomePage() {
  const { t } = useLanguage();

  const attars = getProductsByCategory("perfumes-attars");
  const hawan = products.filter((p) => p.subcategory === "hawan-samagri");
  const dhoop = products.filter((p) => p.subcategory === "dhoop-agarbatti");
  const bestsellers = getBestsellers();

  return (
    <>
      {/* 1. Poster slideshow hero */}
      <HeroSection />

      {/* 2. Trust / USP badges */}
      <TrustSection />

      {/* 3. Category gallery */}
      <CategoryGrid />

      {/* 4. Traditional attars */}
      <ProductCarousel
        title={{ en: "Traditional Attars", hi: "पारंपरिक अत्तर" }}
        subtitle={{
          en: "Pure, alcohol-free fragrances distilled the traditional way.",
          hi: "शुद्ध, अल्कोहल-रहित सुगंध — पारंपरिक विधि से आसवित।",
        }}
        products={attars}
        viewAllHref="/shop?category=perfumes-attars"
      />

      {/* 5. Signature 3D attar moment */}
      <SignatureAttar />

      {/* 6. Hawan samagri */}
      <ProductCarousel
        title={{ en: "Hawan Samagri", hi: "हवन सामग्री" }}
        subtitle={{
          en: "Sacred blends for yagya and havan — purifying and aromatic.",
          hi: "यज्ञ और हवन के लिए पवित्र मिश्रण — शुद्ध करने वाले और सुगंधित।",
        }}
        products={hawan}
        viewAllHref="/shop?category=pooja-samagri"
        muted
      />

      {/* 7. Pooja kits promo band */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-surface-container lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[440px]">
                <Image
                  src="/images/categories/pooja-essentials.jpg"
                  alt={t("Curated Pooja Kits", "क्यूरेटेड पूजा किट")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 md:p-12 lg:p-16">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t("Curated for you", "आपके लिए चयनित")}
                </p>
                <h2 className="display-serif text-3xl md:text-4xl lg:text-5xl">
                  {t("Complete Pooja Kits", "संपूर्ण पूजा किट")}
                </h2>
                <p className="max-w-md leading-relaxed text-on-surface-variant">
                  {t(
                    "Everything you need for daily worship and festivals, thoughtfully put together — so you never miss a single item.",
                    "दैनिक पूजा और त्यौहारों के लिए ज़रूरी हर चीज़, सोच-समझकर एक साथ — ताकि कोई सामान न छूटे।"
                  )}
                </p>
                <Link
                  href="/kits"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-primary-container active:scale-95"
                >
                  {t("Explore Kits", "किट देखें")}
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Dhoop & agarbatti */}
      <ProductCarousel
        title={{ en: "Dhoop & Agarbatti", hi: "धूप और अगरबत्ती" }}
        subtitle={{
          en: "Fill your home with sacred fragrance, every day.",
          hi: "हर दिन अपने घर को पवित्र सुगंध से भरें।",
        }}
        products={dhoop}
        viewAllHref="/shop?category=pooja-samagri"
      />

      {/* 9. Video-ready cinematic band */}
      <VideoShowcase
        poster="/images/banners/hero-banner.jpg"
        titleEn="The art of attar"
        titleHi="अत्तर की कला"
        subEn="Generations of craft, distilled drop by drop."
        subHi="पीढ़ियों की कला, बूँद-बूँद आसवित।"
        ctaHref="/about"
        ctaEn="Our Story"
        ctaHi="हमारी कहानी"
      />

      {/* 10. Bestsellers grid */}
      {bestsellers.length > 0 && (
        <FeaturedProducts
          products={bestsellers}
          title={{ en: "Most Loved", hi: "सबसे पसंदीदा" }}
        />
      )}

      {/* 11. Expert help CTA */}
      <section className="py-16 md:py-24 bg-primary text-on-primary text-center">
        <Reveal className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl mb-4">
            {t("Need Help Choosing Pooja Items?", "पूजा सामग्री चुनने में मदद चाहिए?")}
          </h2>
          <p className="text-on-primary/80 mb-8 text-lg">
            {t(
              "Tell us which pooja you're preparing for and our expert will guide you — via WhatsApp!",
              "हमें बताएं कि आप किस पूजा की तैयारी कर रहे हैं और हमारे विशेषज्ञ व्हाट्सएप पर आपका मार्गदर्शन करेंगे!"
            )}
          </p>
          <a
            href="https://wa.me/918169638918?text=Hi!%20I%20need%20help%20choosing%20pooja%20items.%20Can%20you%20guide%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">chat</span>
            {t("Ask Our Pooja Expert", "हमारे विशेषज्ञ से पूछें")}
          </a>
        </Reveal>
      </section>
    </>
  );
}
