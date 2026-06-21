import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = { title: "Returns & Refunds" };

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: "Policies", href: "/policies/returns" }, { label: "Returns & Refunds" }]} />
      <h1 className="text-3xl md:text-4xl display-serif mb-8">Returns &amp; Refunds</h1>
      <div className="prose prose-lg max-w-none text-on-surface-variant space-y-6">
        <p><strong>Last Updated:</strong> June 2026</p>

        <h2 className="text-xl font-bold text-on-surface">Showcase Mode</h2>
        <p>{siteConfig.name} currently uses this website to <strong>showcase</strong> its products. We do not sell or ship orders online at this time, so online returns and refunds do not apply.</p>

        <h2 className="text-xl font-bold text-on-surface">Purchases Made by Enquiry</h2>
        <p>If you purchase from us directly after an enquiry (via WhatsApp, phone, or in person), any applicable return, replacement, or refund terms will be explained and agreed with you at the time of purchase.</p>

        <h2 className="text-xl font-bold text-on-surface">Damaged or Incorrect Items</h2>
        <p>If something you received through us is damaged or incorrect, please contact us promptly with photos and we will do our best to make it right.</p>

        <h2 className="text-xl font-bold text-on-surface">Contact</h2>
        <p>For any query: WhatsApp {siteConfig.phone} or email {siteConfig.email}.</p>
      </div>
    </div>
  );
}
