"use client";

import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 rounded-lg font-semibold text-sm transition-all",
            page === currentPage
              ? "bg-primary text-on-primary shadow-lg"
              : "text-on-surface-variant hover:bg-surface-container-high"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </div>
  );
}
