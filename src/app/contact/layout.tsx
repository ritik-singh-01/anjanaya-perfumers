import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shri Anjaneya — enquire about our traditional attars and pooja samagri on WhatsApp or by phone. Based in Kannauj, Uttar Pradesh.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Shri Anjaneya",
    description: "Enquire about our attars and pooja samagri on WhatsApp or by phone.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
