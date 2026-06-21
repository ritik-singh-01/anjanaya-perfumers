import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = { title: "Availability & Enquiries" };

export default function AvailabilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: "Policies", href: "/policies/shipping" }, { label: "Availability & Enquiries" }]} />
      <h1 className="text-3xl md:text-4xl display-serif mb-8">Availability &amp; Enquiries</h1>
      <div className="prose prose-lg max-w-none text-on-surface-variant space-y-6">
        <p><strong>Last Updated:</strong> June 2026</p>

        <h2 className="text-xl font-bold text-on-surface">A Showcase, For Now</h2>
        <p>This website is currently a <strong>showcase</strong> of the {siteConfig.name} collection. We are <strong>not processing online orders or home delivery</strong> through the website at this time. Prices shown are for reference and may change.</p>

        <h2 className="text-xl font-bold text-on-surface">How to Enquire</h2>
        <p>Found something you like? Reach out and we will help you with availability, current pricing, and how to purchase:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>WhatsApp:</strong> tap the &quot;Enquire on WhatsApp&quot; button on any product, or message us at {siteConfig.phone}.</li>
          <li><strong>Phone:</strong> call us at {siteConfig.phone}.</li>
          <li><strong>Email:</strong> {siteConfig.email}.</li>
        </ul>
        <p>Each product page includes an enquiry button that opens a WhatsApp chat with the product details pre-filled, so we can assist you quickly.</p>

        <h2 className="text-xl font-bold text-on-surface">Coming Soon</h2>
        <p>We are working towards online ordering and delivery. When that launches, full shipping details and timelines will be published here. To be notified, simply drop us a message on WhatsApp.</p>

        <h2 className="text-xl font-bold text-on-surface">Contact</h2>
        <p>For any query: WhatsApp {siteConfig.phone} or email {siteConfig.email}.</p>
      </div>
    </div>
  );
}
