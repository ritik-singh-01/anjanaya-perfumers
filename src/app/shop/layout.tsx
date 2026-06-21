import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Attars & Pooja Samagri",
  description:
    "Browse Shri Anjaneya's collection of traditional attars and authentic pooja samagri from Kannauj — hawan samagri, dhoop, chandan, gulab jal and more.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop — Attars & Pooja Samagri | Shri Anjaneya",
    description:
      "Traditional attars and authentic pooja samagri from Kannauj — browse the full collection.",
    url: "/shop",
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
