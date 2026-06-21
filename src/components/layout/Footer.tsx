"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-on-surface text-inverse-on-surface">
      {/* Invitation band */}
      <div className="border-b border-inverse-on-surface/10">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-inverse-primary mb-3">
              {t("Shri Anjaneya", "श्री अंजनेय")}
            </p>
            <h2 className="display-serif text-3xl md:text-4xl text-inverse-on-surface">
              {t("Bring home the fragrance of devotion", "भक्ति की सुगंध घर लाएँ")}
            </h2>
            <p className="mt-4 leading-relaxed text-inverse-on-surface/70">
              {t(
                "Tell us what your pooja needs and our team will guide you personally — on WhatsApp, in minutes.",
                "हमें अपनी पूजा की ज़रूरत बताएं और हमारी टीम व्हाट्सएप पर मिनटों में आपका मार्गदर्शन करेगी।"
              )}
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20want%20to%20know%20more%20about%20Shri%20Anjaneya`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 font-bold text-white shadow-lg shadow-black/25 transition-all hover:opacity-90 active:scale-95"
          >
            <span className="material-symbols-outlined">chat</span>
            {t("Enquire on WhatsApp", "व्हाट्सएप पर पूछें")}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt={t(siteConfig.name, siteConfig.nameHindi)}
              width={1204}
              height={580}
              className="h-16 w-auto mb-5"
            />
            <p className="text-inverse-on-surface/70 text-sm leading-relaxed mb-6">
              {t(
                "Authentic pooja samagri, hawan items, and traditional attars — handcrafted with devotion. Explore our collection and enquire on WhatsApp.",
                "प्रामाणिक पूजा सामग्री, हवन सामान, और पारंपरिक अत्तर — श्रद्धा से निर्मित। हमारा संग्रह देखें और व्हाट्सएप पर पूछें।"
              )}
            </p>
            <p className="text-xs text-inverse-on-surface/50 italic">
              &quot;{t(siteConfig.tagline, siteConfig.taglineHindi)}&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-inverse-primary">
              {t("Shop", "दुकान")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/shop?category=pooja-samagri", en: "Pooja Samagri", hi: "पूजा सामग्री" },
                { href: "/shop?category=perfumes-attars", en: "Perfumes & Attars", hi: "इत्र और अत्तर" },
                { href: "/festivals", en: "Shop by Festival", hi: "त्यौहार अनुसार" },
                { href: "/kits", en: "Curated Pooja Kits", hi: "पूजा किट" },
                { href: "/shop", en: "All Products", hi: "सभी उत्पाद" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-inverse-on-surface/60 hover:text-inverse-primary transition-colors"
                  >
                    {t(link.en, link.hi)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-inverse-primary">
              {t("Company", "कंपनी")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", en: "Our Story", hi: "हमारी कहानी" },
                { href: "/contact", en: "Contact Us", hi: "संपर्क करें" },
                { href: "/faq", en: "FAQ", hi: "सामान्य प्रश्न" },
                { href: "/policies/privacy", en: "Privacy Policy", hi: "गोपनीयता नीति" },
                { href: "/policies/terms", en: "Terms & Conditions", hi: "नियम और शर्तें" },
                { href: "/policies/shipping", en: "Availability & Enquiries", hi: "उपलब्धता और पूछताछ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-inverse-on-surface/60 hover:text-inverse-primary transition-colors"
                  >
                    {t(link.en, link.hi)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-inverse-primary">
              {t("Contact", "संपर्क")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-inverse-primary text-sm mt-0.5">call</span>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-inverse-on-surface/60 hover:text-inverse-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-inverse-primary text-sm mt-0.5">mail</span>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-inverse-on-surface/60 hover:text-inverse-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-inverse-primary text-sm mt-0.5">location_on</span>
                <span className="text-sm text-inverse-on-surface/60">
                  {t(siteConfig.address, siteConfig.addressHindi)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-inverse-on-surface/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-inverse-on-surface/40">
            © {new Date().getFullYear()} {siteConfig.name}. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
          </p>
          <div className="flex items-center gap-4">
            {!siteConfig.gst.includes("X") && (
              <>
                <span className="text-xs text-inverse-on-surface/40">
                  GSTIN: {siteConfig.gst}
                </span>
                <span className="text-xs text-inverse-on-surface/40">|</span>
              </>
            )}
            <span className="text-xs text-inverse-on-surface/40">
              {t("Made in India", "भारत में निर्मित")} 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
