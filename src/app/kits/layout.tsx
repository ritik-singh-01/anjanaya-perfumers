import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Pooja Kits",
  description:
    "Curated pooja kits from Shri Anjaneya for daily worship and festivals — everything you need for the ritual in one thoughtfully assembled set.",
  alternates: { canonical: "/kits" },
  openGraph: {
    title: "Curated Pooja Kits | Shri Anjaneya",
    description: "Complete pooja kits for daily worship and festivals.",
    url: "/kits",
  },
};

export default function KitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
