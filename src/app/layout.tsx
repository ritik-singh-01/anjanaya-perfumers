import type { Metadata } from "next";
import { Marcellus, Fira_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

// Classical display serif for headlines — heritage-luxury (Satvik reference).
const marcellus = Marcellus({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Clean humanist sans for body/UI.
const firaSans = Fira_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anjanaya Perfumers — Authentic Pooja Samagri & Attars | अंजनाया परफ्यूमर्स",
    template: "%s | Anjanaya Perfumers",
  },
  description:
    "Discover authentic pooja samagri, hawan samagri, chandan, gulab jal, dhoop, loban, and traditional attars — handcrafted with devotion. Browse our collection and enquire on WhatsApp.",
  keywords: [
    "pooja samagri online",
    "hawan samagri",
    "buy dhoop online",
    "chandan tikka online",
    "gulab jal for pooja",
    "pooja kit for home",
    "attar perfume",
    "loban dhoop",
    "pooja items near me",
    "anjanaya perfumers",
    "पूजा सामग्री",
    "हवन सामग्री",
  ],
  authors: [{ name: "Anjanaya Perfumers" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Anjanaya Perfumers",
    title: "Anjanaya Perfumers — Authentic Pooja Samagri & Attars",
    description:
      "Authentic pooja samagri, hawan items, chandan, gulab jal, and traditional attars. Trusted quality since generations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjanaya Perfumers — Authentic Pooja Samagri & Attars",
    description:
      "Authentic pooja samagri, hawan samagri & traditional attars — handcrafted with devotion. Browse and enquire on WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${firaSans.variable} h-full`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#a73400" />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] antialiased bg-background text-on-surface">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-[88px] md:pt-[92px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
