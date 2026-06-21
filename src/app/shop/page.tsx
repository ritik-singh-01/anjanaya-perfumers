"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FilterState, ProductCategory } from "@/types/product";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import SortDropdown from "@/components/shop/SortDropdown";
import Pagination from "@/components/shop/Pagination";

const PRODUCTS_PER_PAGE = 12;

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory | null;
  const subParam = searchParams.get("sub");
  const { t } = useLanguage();

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    priceRange: [0, 1000],
    festival: searchParams.get("festival"),
    sortBy: "featured",
    searchQuery: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = subParam
      ? products.filter((p) => p.subcategory === subParam)
      : [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.priceRange[1] < 1000) {
      result = result.filter(
        (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }

    if (filters.festival) {
      result = result.filter((p) => p.festival?.includes(filters.festival!));
    }

    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [filters, subParam]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: t("Shop", "दुकान") }]} />

      <header className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-headline)] font-bold text-on-surface tracking-tight mb-2">
              {t("Guided by Tradition", "परंपरा से प्रेरित")}
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl font-light">
              {t(
                "Curated essentials for your daily meditation and festive rituals. Each piece is a bridge between ancient wisdom and modern living.",
                "दैनिक ध्यान और उत्सव अनुष्ठानों के लिए चुनी हुई आवश्यकताएँ।"
              )}
            </p>
          </div>
          <SortDropdown
            value={filters.sortBy}
            onChange={(sortBy) => handleFilterChange({ ...filters, sortBy })}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        <div className="lg:col-span-3">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-9">
          <p className="text-sm text-on-surface-variant mb-6">
            {t(
              `Showing ${paginatedProducts.length} of ${filteredProducts.length} products`,
              `${filteredProducts.length} में से ${paginatedProducts.length} उत्पाद दिखाए जा रहे हैं`
            )}
          </p>
          <ProductGrid products={paginatedProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
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
      <ShopContent />
    </Suspense>
  );
}
