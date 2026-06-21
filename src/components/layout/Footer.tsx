"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-on-surface text-inverse-on-surface">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] text-inverse-primary mb-4">
              {t(siteConfig.name, siteConfig.nameHindi)}
            </h3>
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

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20want%20to%20know%20more%20about%20Shri%20Anjaneya`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-whatsapp text-white py-2.5 rounded-lg font-bold text-sm w-full hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              {t("Chat on WhatsApp", "व्हाट्सएप पर बात करें")}
            </a>
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
