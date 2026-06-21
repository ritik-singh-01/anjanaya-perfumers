import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: "Policies", href: "/policies/privacy" }, { label: "Privacy Policy" }]} />
      <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-on-surface-variant space-y-6">
        <p><strong>Effective Date:</strong> June 2026</p>
        <p>{siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This website is a <strong>product showcase</strong> — we display our collection of attars and pooja samagri. We do not sell, take payments, or ship orders through this website at this time. This policy explains the limited information we handle when you browse or contact us.</p>

        <h2 className="text-xl font-bold text-on-surface">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No account or checkout:</strong> We do not have user accounts, carts, or online payments, so we do not collect names, addresses, or payment details through this site.</li>
          <li><strong>Browser preferences:</strong> Your language choice (English/Hindi) is stored locally in your own browser. It stays on your device and is never sent to us.</li>
          <li><strong>When you contact us:</strong> If you reach out via WhatsApp, phone, or email, we receive whatever details you choose to share so we can answer your enquiry.</li>
          <li><strong>Basic technical data:</strong> Like most websites, our host may log standard request data (such as IP address and browser type) for security and reliability.</li>
        </ul>

        <h2 className="text-xl font-bold text-on-surface">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your product enquiries and questions</li>
          <li>To keep the website secure and working reliably</li>
          <li>We do <strong>not</strong> sell, rent, or trade your information</li>
        </ul>

        <h2 className="text-xl font-bold text-on-surface">Data Protection</h2>
        <p>The website is served over secure HTTPS. Because we do not run checkout or store customer databases, the amount of personal data involved is minimal by design. We handle any information you share in line with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>

        <h2 className="text-xl font-bold text-on-surface">Your Rights</h2>
        <p>Under the DPDP Act 2023, you may access, correct, or request deletion of any personal data you have shared with us directly. Contact our Grievance Officer for any such request.</p>

        <h2 className="text-xl font-bold text-on-surface">Grievance Officer</h2>
        <p>Name: Ritik Singh<br />Email: {siteConfig.email}<br />Phone: {siteConfig.phone}</p>

        <h2 className="text-xl font-bold text-on-surface">Third-Party Services</h2>
        <p>When you choose to enquire via WhatsApp, that conversation is handled by WhatsApp (Meta) under its own privacy policy. Our fonts are self-hosted; icon assets are served from Google Fonts. We do not embed advertising or sell data to third parties.</p>

        <h2 className="text-xl font-bold text-on-surface">Contact</h2>
        <p>For privacy-related queries, contact us at {siteConfig.email} or on WhatsApp at {siteConfig.phone}.</p>
      </div>
    </div>
  );
}
