"use client";

import { FilterState } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";

interface SortDropdownProps {
  value: FilterState["sortBy"];
  onChange: (value: FilterState["sortBy"]) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-on-surface-variant whitespace-nowrap">
        {t("Sort by:", "क्रम:")}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as FilterState["sortBy"])}
        className="bg-surface-container border-none text-sm rounded-lg focus:ring-primary py-2 pl-4 pr-10 cursor-pointer"
      >
        <option value="featured">{t("Featured", "विशेष")}</option>
        <option value="price-low">{t("Price: Low to High", "मूल्य: कम से अधिक")}</option>
        <option value="price-high">{t("Price: High to Low", "मूल्य: अधिक से कम")}</option>
        <option value="newest">{t("Newest", "नवीनतम")}</option>
        <option value="rating">{t("Top Rated", "सर्वश्रेष्ठ रेटिंग")}</option>
      </select>
    </div>
  );
}
