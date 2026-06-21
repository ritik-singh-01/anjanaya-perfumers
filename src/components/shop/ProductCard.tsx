"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice, getProductWhatsAppMessage } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    getProductWhatsAppMessage(product.name, product.price)
  )}`;

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <Link
        href={`/shop/${product.slug}`}
        className="card-lift relative aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-2xl shadow-sm"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
          {product.discount > 0 && (
            <Badge variant="discount">{product.discount}% OFF</Badge>
          )}
          {product.isNew && <Badge variant="new">{t("New", "नया")}</Badge>}
          {product.isBestseller && (
            <Badge variant="bestseller">{t("Bestseller", "बेस्टसेलर")}</Badge>
          )}
          {!product.inStock && (
            <Badge variant="soldout">{t("Sold Out", "स्टॉक में नहीं")}</Badge>
          )}
        </div>

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Hover overlay — enquire on WhatsApp */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-primary text-on-primary py-3 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-xl flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">chat</span>
          {t("Enquire", "पूछताछ")}
        </button>
      </Link>

      {/* Info */}
      <div className="flex-grow">
        <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
          {product.subcategory}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors font-[family-name:var(--font-headline)] leading-tight line-clamp-2 min-h-[2.6em]">
            {t(product.name, product.nameHindi)}
          </h3>
        </Link>
        <p className="text-sm text-on-surface-variant mt-1 mb-2">
          {product.weight}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-on-surface">
            {formatPrice(product.price)}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-on-surface-variant line-through">
              {formatPrice(product.mrp)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex text-secondary-container">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-xs"
                style={{
                  fontVariationSettings: `'FILL' ${i < Math.floor(product.rating) ? 1 : 0}`,
                }}
              >
                star
              </span>
            ))}
          </div>
          <span className="text-xs text-on-surface-variant">
            ({product.reviewCount})
          </span>
        </div>
      </div>

      {/* WhatsApp quick order (mobile-friendly) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-1.5 text-whatsapp text-xs font-semibold hover:underline md:hidden"
      >
        <span className="material-symbols-outlined text-xs">chat</span>
        {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
      </a>
    </div>
  );
}
