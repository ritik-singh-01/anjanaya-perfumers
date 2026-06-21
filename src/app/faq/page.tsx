import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "FAQ — Attars & Pooja Samagri",
  description:
    "Answers about Shri Anjaneya's traditional attars and pooja samagri from Kannauj — what attar is, alcohol-free fragrances, hawan samagri, how to enquire, and more.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What is attar (ittar)?",
    a: "Attar is a traditional natural perfume distilled from flowers, herbs, woods and resins, typically without alcohol. Shri Anjaneya's attars are crafted in Kannauj, India's centuries-old perfume capital.",
  },
  {
    q: "Are your attars alcohol-free?",
    a: "Yes. Our traditional attars are alcohol-free and long-lasting, which makes them gentle on skin and well suited to both daily wear and worship.",
  },
  {
    q: "Where are your products made?",
    a: "In Kannauj, Uttar Pradesh — a city renowned for generations of attar-making craftsmanship.",
  },
  {
    q: "What pooja samagri do you offer?",
    a: "Hawan samagri, dhoop and agarbatti, chandan and tilak, gulab jal and sacred waters, guggal and loban, sindoor and kumkum, and complete pooja kits.",
  },
  {
    q: "How do I buy or check availability?",
    a: "We currently showcase our collection online. Tap 'Enquire on WhatsApp' on any product (or call us) and we'll help with availability, current pricing and how to purchase.",
  },
  {
    q: "Do you deliver online?",
    a: "Online ordering and delivery are coming soon. For now, please enquire via WhatsApp and we'll guide you through purchasing.",
  },
  {
    q: "What is hawan samagri used for?",
    a: "Hawan samagri is a sacred blend of herbs, roots and aromatics offered into the fire during hawan and yagya ceremonies to purify the atmosphere and create a divine ambiance.",
  },
  {
    q: "How long does attar last?",
    a: "Being concentrated and oil-based, a small dab of attar typically lasts several hours, and a single bottle lasts a long time.",
  },
  {
    q: "Are the products authentic and pure?",
    a: "Yes. Every item is sourced and prepared traditionally, using pure ingredients with no artificial additives.",
  },
  {
    q: "Can I order in bulk, or for a temple or event?",
    a: "Absolutely. Message us on WhatsApp with your requirement and we'll arrange a custom quote.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <Reveal>
        <h1 className="display-serif mb-3 text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="mb-8 text-on-surface-variant">
          Everything you might want to know about our attars and pooja samagri. Still curious?{" "}
          <a
            href="https://wa.me/918169638918?text=Hi!%20I%20have%20a%20question%20about%20Shri%20Anjaneya."
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Ask us on WhatsApp
          </a>
          .
        </p>
      </Reveal>
      <div className="divide-y divide-outline-variant/20">
        {faqs.map((f, i) => (
          <Reveal key={i} delay={Math.min(i * 0.07, 0.42)}>
          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-on-surface">
              {f.q}
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45">
                add
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-on-surface-variant">{f.a}</p>
          </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
