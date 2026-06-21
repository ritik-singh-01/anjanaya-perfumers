"use client";

import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: t("Our Story", "हमारी कहानी") }]} />

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-headline)] font-bold mb-8 tracking-tight">
        {t("Our Story", "हमारी कहानी")}
      </h1>

      <div className="prose prose-lg max-w-none">
        <div className="bg-surface-container-low rounded-2xl p-8 mb-12">
          <p className="text-xl md:text-2xl font-[family-name:var(--font-headline)] text-primary italic leading-relaxed">
            &quot;{t(
              "Shraddha se bani, vishwaas se pohochi — Made with devotion, delivered with trust.",
              "श्रद्धा से बनी, विश्वास से पहुँची — श्रद्धा से निर्मित, विश्वास से वितरित।"
            )}&quot;
          </p>
        </div>

        <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold mb-4">
          {t("Paramparagat Quality — Traditional Excellence", "पारंपरागत गुणवत्ता")}
        </h2>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          {t(
            "Shri Anjaneya is built on generations of expertise in crafting authentic pooja samagri, traditional attars, and sacred ritual items in Kannauj — India's perfume capital. What began as a trusted local name now showcases its collection online for devotees across India.",
            "श्री अंजनेय पीढ़ियों की विशेषज्ञता की नींव पर बना है — कन्नौज में प्रामाणिक पूजा सामग्री, पारंपरिक अत्तर, और पवित्र अनुष्ठान सामान। जो एक विश्वसनीय स्थानीय नाम के रूप में शुरू हुआ, अब अपना संग्रह ऑनलाइन प्रदर्शित कर रहा है।"
          )}
        </p>

        <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold mb-4">
          {t("Why Choose Shri Anjaneya?", "श्री अंजनेय क्यों चुनें?")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: "verified", en: "100% Authentic Products", hi: "100% प्रामाणिक उत्पाद", descEn: "Every item is sourced directly and tested for purity. No artificial additives, ever.", descHi: "हर उत्पाद सीधे स्रोत से प्राप्त और शुद्धता के लिए परीक्षित।" },
            { icon: "diversity_1", en: "Generations of Trust", hi: "पीढ़ियों का विश्वास", descEn: "Our offline reputation is our biggest asset. Thousands of families trust us for their daily pooja needs.", descHi: "हमारी ऑफ़लाइन प्रतिष्ठा हमारी सबसे बड़ी संपत्ति है।" },
            { icon: "inventory_2", en: "Festival-Ready Kits", hi: "त्यौहार-तैयार किट", descEn: "Complete pooja kits curated by experts so you never miss a single item for any ritual.", descHi: "विशेषज्ञों द्वारा तैयार पूर्ण पूजा किट।" },
            { icon: "support_agent", en: "Pooja Expert Guidance", hi: "पूजा विशेषज्ञ मार्गदर्शन", descEn: "Not sure what you need? Our WhatsApp expert will guide you with the complete samagri list.", descHi: "निश्चित नहीं कि आपको क्या चाहिए? हमारे व्हाट्सएप विशेषज्ञ मार्गदर्शन करेंगे।" },
          ].map((item) => (
            <div key={item.icon} className="bg-surface-container-low rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold mb-2">{t(item.en, item.hi)}</h3>
              <p className="text-sm text-on-surface-variant">{t(item.descEn, item.descHi)}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold mb-4">
          {t("Our Promise", "हमारा वादा")}
        </h2>
        <ul className="space-y-3 mb-8">
          {[
            { en: "Freshness Guarantee — especially for dhoop, agarbatti, and chandan products", hi: "ताज़गी की गारंटी — विशेषकर धूप, अगरबत्ती और चंदन उत्पादों के लिए" },
            { en: "Pure, traditional ingredients — no artificial additives in our attars or samagri", hi: "शुद्ध, पारंपरिक सामग्री — हमारे अत्तर या सामग्री में कोई कृत्रिम मिलावट नहीं" },
            { en: "Honest advice — we help you choose exactly what your ritual needs", hi: "ईमानदार सलाह — हम आपकी पूजा के लिए सही सामग्री चुनने में मदद करते हैं" },
            { en: "Responsive WhatsApp support — we reply within 2 hours", hi: "उत्तरदायी व्हाट्सएप सहायता — हम 2 घंटे में जवाब देते हैं" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">done</span>
              <span className="text-on-surface-variant">{t(item.en, item.hi)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
