"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";
import MobileMenu from "./MobileMenu";
import SearchBar from "@/components/ui/SearchBar";

const navLinks = [
  { href: "/", labelEn: "Home", labelHi: "होम" },
  { href: "/shop", labelEn: "Shop All", labelHi: "सभी उत्पाद" },
  { href: "/kits", labelEn: "Pooja Kits", labelHi: "पूजा किट" },
  { href: "/about", labelEn: "Our Story", labelHi: "हमारी कहानी" },
  { href: "/faq", labelEn: "FAQ", labelHi: "सामान्य प्रश्न" },
  { href: "/contact", labelEn: "Contact", labelHi: "संपर्क" },
];

// Satvik-style category mega-nav: top-level "words" with dropdowns
const megaNav = [
  { href: "/", en: "Home", hi: "होम" },
  {
    href: "/shop?category=perfumes-attars",
    en: "Attars",
    hi: "अत्तर",
    children: [
      { href: "/shop?category=perfumes-attars", en: "All Attars", hi: "सभी अत्तर" },
      { href: "/shop?sub=individual-attars", en: "Individual Attars", hi: "एकल अत्तर" },
      { href: "/shop?sub=attar-collections", en: "Attar Collections", hi: "अत्तर संग्रह" },
      { href: "/shop?sub=scent-collections", en: "Scent Collections", hi: "सेंट संग्रह" },
    ],
  },
  {
    href: "/shop?category=pooja-samagri",
    en: "Pooja Samagri",
    hi: "पूजा सामग्री",
    children: [
      { href: "/shop?sub=hawan-samagri", en: "Hawan Samagri", hi: "हवन सामग्री" },
      { href: "/shop?sub=dhoop-agarbatti", en: "Dhoop & Agarbatti", hi: "धूप और अगरबत्ती" },
      { href: "/shop?sub=chandan-tilak", en: "Chandan & Tilak", hi: "चंदन और तिलक" },
      { href: "/shop?sub=guggal-loban", en: "Guggal & Loban", hi: "गुग्गल और लोबान" },
      { href: "/shop?sub=sacred-water", en: "Gulab Jal & Waters", hi: "गुलाब जल" },
      { href: "/shop?sub=sindoor-kumkum", en: "Sindoor & Kumkum", hi: "सिंदूर और कुमकुम" },
      { href: "/shop?sub=pooja-essentials", en: "Pooja Essentials", hi: "पूजा आवश्यकताएँ" },
      { href: "/kits", en: "Curated Pooja Kits", hi: "पूजा किट" },
    ],
  },
  { href: "/shop?category=brass-idols", en: "Brass Idols", hi: "पीतल मूर्तियाँ" },
  { href: "/shop?category=jap-mala", en: "Jap Mala", hi: "जप माला" },
  { href: "/shop?category=rudraksha", en: "Rudraksha", hi: "रुद्राक्ष" },
  { href: "/shop?category=gifting", en: "Gifting", hi: "उपहार" },
];

// Flattened category list for the mobile menu
const shopCategories = [
  { href: "/shop", en: "All Products", hi: "सभी उत्पाद" },
  { href: "/shop?category=perfumes-attars", en: "Attars & Perfumes", hi: "अत्तर और इत्र" },
  { href: "/shop?sub=hawan-samagri", en: "Hawan Samagri", hi: "हवन सामग्री" },
  { href: "/shop?sub=dhoop-agarbatti", en: "Dhoop & Agarbatti", hi: "धूप और अगरबत्ती" },
  { href: "/shop?sub=chandan-tilak", en: "Chandan & Tilak", hi: "चंदन और तिलक" },
  { href: "/shop?sub=guggal-loban", en: "Guggal & Loban", hi: "गुग्गल और लोबान" },
  { href: "/shop?sub=sacred-water", en: "Gulab Jal & Waters", hi: "गुलाब जल" },
  { href: "/shop?sub=sindoor-kumkum", en: "Sindoor & Kumkum", hi: "सिंदूर और कुमकुम" },
  { href: "/shop?category=brass-idols", en: "Brass Idols", hi: "पीतल मूर्तियाँ" },
  { href: "/shop?category=jap-mala", en: "Jap Mala", hi: "जप माला" },
  { href: "/shop?category=rudraksha", en: "Rudraksha", hi: "रुद्राक्ष" },
  { href: "/shop?category=gifting", en: "Gifting", hi: "उपहार" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  const enquireUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi! I'd like to know more about Shri Anjaneya's collection."
  )}`;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 glass-nav shadow-[0_12px_40px_rgba(32,27,19,0.04)]">
        {/* Top announcement bar */}
        <div className="bg-primary text-on-primary text-center py-1.5 px-4 text-[11px] md:text-xs font-medium tracking-wide truncate">
          {t(
            `✨ Handcrafted attars & authentic pooja samagri — explore our collection & enquire on WhatsApp`,
            `✨ हस्तनिर्मित अत्तर और प्रामाणिक पूजा सामग्री — संग्रह देखें और व्हाट्सएप पर पूछें`
          )}
        </div>

        <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center"
              aria-label={t("Shri Anjaneya — Home", "श्री अंजनेय — होम")}
            >
              <Image
                src="/images/logo.png"
                alt="Shri Anjaneya"
                width={1204}
                height={580}
                priority
                className="h-10 w-auto md:h-12"
              />
            </Link>

            {/* Desktop nav — Satvik-style category words */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              {megaNav.map((item) =>
                "children" in item && item.children ? (
                  <div key={item.en} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center gap-0.5 text-on-surface/70 hover:text-primary transition-colors font-medium text-sm tracking-tight"
                    >
                      {t(item.en, item.hi)}
                      <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">
                        expand_more
                      </span>
                    </Link>
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="w-60 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-2 shadow-xl">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm text-on-surface/80 transition-colors hover:bg-surface-container hover:text-primary"
                          >
                            {t(c.en, c.hi)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.en}
                    href={item.href}
                    className="text-on-surface/70 hover:text-primary transition-colors font-medium text-sm tracking-tight"
                  >
                    {t(item.en, item.hi)}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop search */}
            <div className="hidden lg:block">
              <SearchBar />
            </div>

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-all text-sm font-bold"
              title={language === "en" ? "हिंदी में देखें" : "View in English"}
            >
              {language === "en" ? "हि" : "EN"}
            </button>

            {/* Mobile search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-on-surface hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined">search</span>
            </button>

            {/* Enquire on WhatsApp */}
            <a
              href={enquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary text-on-primary px-4 py-2 text-sm font-medium hover:bg-primary-container transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              {t("Enquire", "पूछताछ")}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-on-surface hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="lg:hidden px-4 pb-3">
            <SearchBar onSearch={() => setSearchOpen(false)} />
          </div>
        )}
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        categories={shopCategories}
      />
    </>
  );
}
