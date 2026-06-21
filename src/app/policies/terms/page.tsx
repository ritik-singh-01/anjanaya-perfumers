import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: "Policies", href: "/policies/terms" }, { label: "Terms & Conditions" }]} />
      <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold mb-8">Terms &amp; Conditions</h1>
      <div className="prose prose-lg max-w-none text-on-surface-variant space-y-6">
        <p><strong>Last Updated:</strong> March 2026</p>
        <p>By accessing and using the {siteConfig.name} website, you agree to the following terms and conditions.</p>

        <h2 className="text-xl font-bold text-on-surface">Showcase & Enquiries</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>This website showcases our products. We are <strong>not currently selling or delivering online</strong> through the website.</li>
          <li>Prices shown are indicative, listed in Indian Rupees (INR), and may change without prior notice.</li>
          <li>To purchase, please enquire via WhatsApp or phone; the terms of any sale are agreed with you directly at that time.</li>
          <li>Product images are for representation. Actual products may vary slightly in appearance.</li>
        </ul>

        <h2 className="text-xl font-bold text-on-surface">Acceptable Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree to use this website lawfully and not to disrupt, copy, or misuse its content.</li>
          <li>Product information is provided in good faith for reference.</li>
        </ul>

        <h2 className="text-xl font-bold text-on-surface">Intellectual Property</h2>
        <p>All content on this website, including images, text, logos, and design, is the property of {siteConfig.name} and protected under Indian copyright laws.</p>

        <h2 className="text-xl font-bold text-on-surface">Limitation of Liability</h2>
        <p>{siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>

        <h2 className="text-xl font-bold text-on-surface">Governing Law</h2>
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Gurgaon, Haryana.</p>

        <h2 className="text-xl font-bold text-on-surface">Contact</h2>
        <p>For queries regarding these terms, contact us at {siteConfig.email}.</p>
      </div>
    </div>
  );
}
