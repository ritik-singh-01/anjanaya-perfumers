"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "@/components/ui/Breadcrumb";

const festivals = [
  { name: "Diwali", hi: "दिवाली", icon: "diamond" },
  { name: "Navratri", hi: "नवरात्रि", icon: "celebration" },
  { name: "Ganesh Chaturthi", hi: "गणेश चतुर्थी", icon: "temple_hindu" },
  { name: "Janmashtami", hi: "जन्माष्टमी", icon: "child_care" },
  { name: "Shivratri", hi: "शिवरात्रि", icon: "self_improvement" },
  { name: "Holi", hi: "होली", icon: "palette" },
  { name: "Raksha Bandhan", hi: "रक्षा बंधन", icon: "favorite" },
  { name: "Karwa Chauth", hi: "करवा चौथ", icon: "nightlight" },
  { name: "Makar Sankranti", hi: "मकर संक्रांति", icon: "air" },
  { name: "Dussehra", hi: "दशहरा", icon: "local_fire_department" },
  { name: "Dhanteras", hi: "धनतेरस", icon: "savings" },
  { name: "Wedding Season", hi: "विवाह सीज़न", icon: "diversity_3" },
];

export default function FestivalsPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <Breadcrumb items={[{ label: t("Festivals", "त्यौहार") }]} />

      <div className="mb-10 text-center md:mb-12">
        <h1 className="display-serif text-4xl md:text-5xl">
          {t("Shop by Festival", "त्यौहार अनुसार खरीदें")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-on-surface-variant">
          {t(
            "Find the right samagri and attars for every occasion — curated for India's festivals and ceremonies.",
            "हर अवसर के लिए सही सामग्री और अत्तर — भारत के त्यौहारों और समारोहों के लिए चुने हुए।"
          )}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {festivals.map((f) => (
          <Link
            key={f.name}
            href={`/shop?festival=${encodeURIComponent(f.name)}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-outline-variant/15 bg-surface-container-low p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
              <span className="material-symbols-outlined text-2xl">{f.icon}</span>
            </span>
            <span className="font-[family-name:var(--font-headline)] text-base text-on-surface md:text-lg">
              {t(f.name, f.hi)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
