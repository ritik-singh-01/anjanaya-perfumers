"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { searchProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductGrid from "@/components/shop/ProductGrid";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { t } = useLanguage();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: t("Search Results", "खोज परिणाम") }]} />

      <h1 className="text-2xl md:text-4xl font-[family-name:var(--font-headline)] font-bold mb-2">
        {query
          ? t(`Results for "${query}"`, `"${query}" के परिणाम`)
          : t("Search Products", "उत्पाद खोजें")}
      </h1>
      <p className="text-on-surface-variant mb-8">
        {results.length > 0
          ? t(`${results.length} products found`, `${results.length} उत्पाद मिले`)
          : query
          ? t("No products found. Try a different search term.", "कोई उत्पाद नहीं मिला। अलग शब्द खोजें।")
          : ""}
      </p>

      <ProductGrid products={results} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
          <span className="material-symbols-outlined text-4xl text-outline-variant animate-spin">
            progress_activity
          </span>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
