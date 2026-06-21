"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface SearchBarProps {
  onSearch?: () => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onSearch?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
        search
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("Search products...", "उत्पाद खोजें...")}
        className="pl-10 pr-4 py-2 bg-surface-variant/30 border-none rounded-full text-sm focus:ring-1 focus:ring-primary w-full lg:w-64 outline-none"
      />
    </form>
  );
}
