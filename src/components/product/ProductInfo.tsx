"use client";

import { Product } from "@/types/product";
import { formatPrice, getProductWhatsAppMessage } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Badge from "@/components/ui/Badge";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    getProductWhatsAppMessage(product.name, product.price)
  )}`;

  return (
    <div className="flex flex-col">
      {/* Rating */}
      <div className="mb-2 flex items-center gap-2">
        <div className="flex text-secondary-container">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-base"
              style={{
                fontVariationSettings: `'FILL' ${i < Math.floor(product.rating) ? 1 : i < product.rating ? 0.5 : 0}`,
              }}
            >
              {i < Math.floor(product.rating) ? "star" : i < product.rating ? "star_half" : "star"}
            </span>
          ))}
        </div>
        <span className="text-sm font-medium text-on-surface-variant">
          {product.rating} ({product.reviewCount} {t("reviews", "रिव्यू")})
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-2 tracking-tight">
        {t(product.name, product.nameHindi)}
      </h1>
      <h2 className="text-xl md:text-2xl font-[family-name:var(--font-headline)] text-primary mb-6">
        {t(product.nameHindi, product.name)}{" "}
        <span className="text-lg opacity-60">/ {product.weight}</span>
      </h2>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.discount > 0 && <Badge variant="discount">{product.discount}% OFF</Badge>}
        {product.isNew && <Badge variant="new">{t("New", "नया")}</Badge>}
        {product.isBestseller && <Badge variant="bestseller">{t("Bestseller", "बेस्टसेलर")}</Badge>}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-3xl md:text-4xl font-bold text-on-surface">
          {formatPrice(product.price)}
        </span>
        {product.discount > 0 && (
          <>
            <span className="text-xl text-on-surface-variant/60 line-through">
              {formatPrice(product.mrp)}
            </span>
            <span className="text-primary font-bold">
              {t(`Save ${formatPrice(product.mrp - product.price)}`, `बचत ${formatPrice(product.mrp - product.price)}`)}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-on-surface-variant leading-relaxed mb-8 text-base md:text-lg">
        {t(product.shortDescription, product.descriptionHindi)}
      </p>

      {/* Enquiry CTAs — showcase mode, no checkout */}
      <div className="flex flex-col gap-3 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-whatsapp/20 active:scale-95"
        >
          <span className="material-symbols-outlined">chat</span>
          {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 border border-outline-variant text-on-surface py-4 rounded-full font-semibold text-base hover:bg-surface-container transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">call</span>
          {t("Call to Enquire", "कॉल करके पूछें")}
        </a>
        <p className="text-xs text-on-surface-variant text-center mt-1 leading-relaxed">
          {t(
            "We currently showcase our collection. Enquire to check availability and how to purchase.",
            "हम अभी अपना संग्रह प्रदर्शित कर रहे हैं। उपलब्धता और खरीद की जानकारी के लिए पूछें।"
          )}
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 mt-8 md:mt-12 py-6 border-y border-outline-variant/10">
        {[
          { icon: "eco", en: "100% Pure", hi: "100% शुद्ध" },
          { icon: "history_edu", en: "Traditional", hi: "पारंपरिक" },
          { icon: "support_agent", en: "Personal Guidance", hi: "व्यक्तिगत मार्गदर्शन" },
        ].map((badge) => (
          <div key={badge.icon} className="flex flex-col items-center text-center gap-2">
            <span className="material-symbols-outlined text-primary">{badge.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              {t(badge.en, badge.hi)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
