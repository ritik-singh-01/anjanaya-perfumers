"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

const trustBadges = [
  {
    icon: "verified",
    en: "100% Authentic",
    hi: "100% प्रामाणिक",
    descEn: "Genuine products, sourced directly",
    descHi: "असली उत्पाद, सीधे स्रोत से",
  },
  {
    icon: "spa",
    en: "Handcrafted",
    hi: "हस्तनिर्मित",
    descEn: "Made the traditional way",
    descHi: "पारंपरिक विधि से निर्मित",
  },
  {
    icon: "workspace_premium",
    en: "Heritage Quality",
    hi: "विरासत गुणवत्ता",
    descEn: "Pure ingredients, trusted recipes",
    descHi: "शुद्ध सामग्री, विश्वसनीय विधियाँ",
  },
  {
    icon: "support_agent",
    en: "WhatsApp Support",
    hi: "व्हाट्सएप सहायता",
    descEn: "Personal pooja guidance",
    descHi: "व्यक्तिगत पूजा मार्गदर्शन",
  },
];

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustBadges.map((badge, i) => (
            <Reveal key={badge.icon} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {badge.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-on-surface">
                    {t(badge.en, badge.hi)}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {t(badge.descEn, badge.descHi)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
