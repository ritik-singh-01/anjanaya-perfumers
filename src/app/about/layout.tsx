import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The Shri Anjaneya story — generations of attar-making craft from Kannauj, India's perfume capital, now offering authentic pooja samagri and traditional attars.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Story | Shri Anjaneya",
    description: "Generations of attar-making craft from Kannauj.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
