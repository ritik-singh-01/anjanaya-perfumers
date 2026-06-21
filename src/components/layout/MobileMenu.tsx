"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; labelEn: string; labelHi: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-background z-[70] shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
            <span className="text-lg font-bold text-primary font-[family-name:var(--font-headline)]">
              {t("Menu", "मेन्यू")}
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-container rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 py-4">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3.5 text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-primary">home</span>
              <span className="font-medium">{t("Home", "होम")}</span>
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-6 py-3.5 text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-primary">
                  {link.href === "/shop"
                    ? "storefront"
                    : link.href === "/kits"
                    ? "inventory_2"
                    : link.href === "/about"
                    ? "info"
                    : "call"}
                </span>
                <span className="font-medium">{t(link.labelEn, link.labelHi)}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low">
            <a
              href="https://wa.me/918169638918?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Anjanaya%20Perfumers'%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp text-white py-3 rounded-lg font-bold text-sm w-full hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
