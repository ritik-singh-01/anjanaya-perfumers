import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop by Festival",
  description:
    "Pooja samagri and traditional attars for every Indian festival — Diwali, Navratri, Ganesh Chaturthi, Shivratri, Janmashtami and more, from Shri Anjaneya.",
  alternates: { canonical: "/festivals" },
  openGraph: {
    title: "Shop by Festival | Shri Anjaneya",
    description: "Samagri and attars curated for India's festivals and ceremonies.",
    url: "/festivals",
  },
};

export default function FestivalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
