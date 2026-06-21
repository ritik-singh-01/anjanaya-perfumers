"use client";

import { useState } from "react";
import { ProductCategory, FilterState } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const categoryOptions: { id: ProductCategory; en: string; hi: string }[] = [
  { id: "pooja-samagri", en: "Pooja Samagri", hi: "पूजा सामग्री" },
  { id: "perfumes-attars", en: "Perfumes & Attars", hi: "इत्र और अत्तर" },
  { id: "curated-kits", en: "Curated Kits", hi: "पूजा किट" },
  { id: "combo-offers", en: "Combo Offers", hi: "कॉम्बो ऑफर" },
  { id: "temple-bulk", en: "Temple & Bulk", hi: "मंदिर और थोक" },
];

const festivalOptions = [
  { id: "diwali", en: "Diwali", hi: "दिवाली" },
  { id: "navratri", en: "Navratri", hi: "नवरात्रि" },
  { id: "janmashtami", en: "Janmashtami", hi: "जन्माष्टमी" },
  { id: "ganesh-chaturthi", en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" },
  { id: "daily", en: "Daily Rituals", hi: "दैनिक पूजा" },
  { id: "sawan", en: "Sawan Special", hi: "सावन स्पेशल" },
];

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilter = (updates: Partial<FilterState>) => {
    onFilterChange({ ...filters, ...updates });
  };

  const filterContent = (
    <>
      {/* Price Range */}
      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-xl font-semibold mb-6 text-on-surface border-b border-outline-variant/20 pb-2">
          {t("Price Range", "मूल्य सीमा")}
        </h3>
        <div className="px-2">
          <input
            type="range"
            min={0}
            max={1000}
            step={50}
            value={filters.priceRange[1]}
            onChange={(e) =>
              updateFilter({
                priceRange: [filters.priceRange[0], Number(e.target.value)],
              })
            }
            className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-4 text-sm font-medium text-on-surface-variant">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}+</span>
          </div>
        </div>
      </section>

      {/* Category */}
      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-xl font-semibold mb-6 text-on-surface border-b border-outline-variant/20 pb-2">
          {t("Category", "श्रेणी")}
        </h3>
        <div className="space-y-3">
          {categoryOptions.map((cat) => (
            <label key={cat.id} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category === cat.id}
                onChange={() =>
                  updateFilter({
                    category: filters.category === cat.id ? null : cat.id,
                  })
                }
                className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 mr-3"
              />
              <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                {t(cat.en, cat.hi)}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Festival */}
      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-xl font-semibold mb-6 text-on-surface border-b border-outline-variant/20 pb-2">
          {t("By Festival", "त्यौहार के अनुसार")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {festivalOptions.map((fest) => (
            <button
              key={fest.id}
              onClick={() =>
                updateFilter({
                  festival: filters.festival === fest.id ? null : fest.id,
                })
              }
              className={cn(
                "px-4 py-2 text-xs font-semibold rounded-full transition-all",
                filters.festival === fest.id
                  ? "bg-primary-container text-on-primary-container shadow-md"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              )}
            >
              {t(fest.en, fest.hi)}
            </button>
          ))}
        </div>
      </section>

      {/* Clear filters */}
      <button
        onClick={() =>
          onFilterChange({
            category: null,
            priceRange: [0, 1000],
            festival: null,
            sortBy: "featured",
            searchQuery: "",
          })
        }
        className="w-full py-2 text-sm text-primary font-semibold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
      >
        {t("Clear All Filters", "सभी फ़िल्टर हटाएँ")}
      </button>
    </>
  );

  return (
    <>
      {/* Mobile filter toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden flex items-center gap-2 text-sm font-semibold text-primary mb-4"
      >
        <span className="material-symbols-outlined text-sm">tune</span>
        {t("Filters", "फ़िल्टर")}
        <span className="material-symbols-outlined text-xs">
          {mobileOpen ? "expand_less" : "expand_more"}
        </span>
      </button>

      {/* Mobile filter panel */}
      <div className={cn("lg:hidden mb-6", mobileOpen ? "block" : "hidden")}>
        <div className="space-y-8 p-4 bg-surface-container-low rounded-xl">
          {filterContent}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block space-y-10">
        {filterContent}
      </aside>
    </>
  );
}
