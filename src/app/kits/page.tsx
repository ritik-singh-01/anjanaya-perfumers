"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/ui/Breadcrumb";

const kits = [
  { name: "Daily Pooja Kit", nameHi: "दैनिक पूजा किट", price: "₹299/month", items: "Agarbatti, Dhoop, Kapoor, Kumkum, Roli", icon: "wb_sunny" },
  { name: "Satyanarayan Pooja Kit", nameHi: "सत्यनारायण पूजा किट", price: "₹499", items: "Hawan samagri, Panchamrit ingredients, Prasad items, Kalawa, Janeu, Akshat", icon: "auto_stories" },
  { name: "Navratri Special Kit", nameHi: "नवरात्रि स्पेशल किट", price: "₹599", items: "9-day pooja essentials, Chunri, Kalash, Coconut decorations, Hawan samagri", icon: "celebration" },
  { name: "Diwali Pooja Kit", nameHi: "दिवाली पूजा किट", price: "₹699", items: "Lakshmi-Ganesh items, Dhoop, Premium Agarbatti, Kumkum, Akshat, Diyas", icon: "brightness_7" },
  { name: "Griha Pravesh Kit", nameHi: "गृह प्रवेश किट", price: "₹799", items: "Complete housewarming pooja items, Hawan samagri, Nariyal, Kalash set", icon: "home" },
  { name: "Monthly Pooja Box — Premium", nameHi: "मासिक पूजा बॉक्स — प्रीमियम", price: "₹799/month", items: "Standard + Gulab Jal + Festival special item of the month", icon: "card_giftcard" },
];

export default function KitsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: t("Curated Pooja Kits", "पूजा किट") }]} />

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl display-serif mb-4 tracking-tight">
          {t("Curated Pooja Kits", "क्यूरेटेड पूजा किट")}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          {t(
            "Complete pooja kits so you never miss a single item. Curated by our experts for every occasion — from daily worship to grand festivals.",
            "पूर्ण पूजा किट ताकि आप कोई भी सामान न भूलें। दैनिक पूजा से लेकर भव्य त्यौहारों तक — हमारे विशेषज्ञों द्वारा तैयार।"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {kits.map((kit) => (
          <div
            key={kit.name}
            className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 hover:shadow-lg hover:border-primary/20 transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">{kit.icon}</span>
            </div>
            <h3 className="text-xl display-serif mb-1">
              {t(kit.name, kit.nameHi)}
            </h3>
            <p className="text-2xl font-bold text-primary mb-4">{kit.price}</p>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              <span className="font-semibold">{t("Includes:", "शामिल है:")}</span> {kit.items}
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(kit.name)}.%20Please%20share%20details%20and%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp text-white py-3 rounded-lg font-bold text-sm w-full hover:opacity-90 transition-opacity active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              {t("Enquire about this Kit", "इस किट के बारे में पूछें")}
            </a>
          </div>
        ))}
      </div>

      {/* Custom Kit CTA */}
      <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-on-primary">
        <h2 className="text-2xl md:text-3xl display-serif mb-4">
          {t("Build Your Own Custom Kit", "अपनी कस्टम किट बनाएँ")}
        </h2>
        <p className="text-on-primary/80 mb-6 max-w-xl mx-auto">
          {t(
            "Tell us which pooja or ceremony you are planning, and our expert will create a personalized kit with everything you need.",
            "हमें बताएं कि आप कौन सी पूजा या समारोह की योजना बना रहे हैं, और हमारे विशेषज्ञ आपकी ज़रूरत की हर चीज़ के साथ एक व्यक्तिगत किट बनाएंगे।"
          )}
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20need%20a%20custom%20pooja%20kit.%20Here%20are%20the%20details%20of%20my%20pooja:`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">chat</span>
          {t("Chat with Expert", "विशेषज्ञ से बात करें")}
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link href="/shop" className="text-primary font-semibold hover:underline">
          {t("← Browse all products individually", "← सभी उत्पाद अलग-अलग देखें")}
        </Link>
      </div>
    </div>
  );
}
