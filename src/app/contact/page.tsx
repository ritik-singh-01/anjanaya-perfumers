"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb items={[{ label: t("Contact Us", "संपर्क करें") }]} />

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-headline)] font-bold mb-8 tracking-tight">
        {t("Contact Us", "संपर्क करें")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {t(
              "Have a question about our products? Need help choosing the right pooja samagri? We are here to help!",
              "हमारे उत्पादों के बारे में कोई सवाल है? सही पूजा सामग्री चुनने में मदद चाहिए? हम यहाँ आपकी मदद के लिए हैं!"
            )}
          </p>

          <div className="space-y-4">
            {[
              { icon: "chat", label: t("WhatsApp (Preferred)", "व्हाट्सएप (प्राथमिक)"), value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}`, highlight: true },
              { icon: "call", label: t("Phone", "फ़ोन"), value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: "mail", label: t("Email", "ईमेल"), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: "location_on", label: t("Address", "पता"), value: t(siteConfig.address, siteConfig.addressHindi) },
            ].map((item) => (
              <div key={item.icon} className={`flex items-start gap-4 p-4 rounded-xl ${item.highlight ? "bg-whatsapp/10 border border-whatsapp/20" : "bg-surface-container-low"}`}>
                <span className={`material-symbols-outlined ${item.highlight ? "text-whatsapp" : "text-primary"} text-2xl`}>
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm text-on-surface-variant">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-on-surface hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-on-surface">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-xl p-6 mt-8">
            <h3 className="font-bold mb-2 text-primary">
              {t("Business Hours", "व्यापार के घंटे")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("Monday – Saturday: 9:00 AM – 8:00 PM", "सोमवार – शनिवार: सुबह 9:00 – रात 8:00")}<br />
              {t("Sunday: 10:00 AM – 2:00 PM", "रविवार: सुबह 10:00 – दोपहर 2:00")}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-surface-container-low rounded-2xl p-8">
            <h2 className="text-xl font-[family-name:var(--font-headline)] font-bold mb-6">
              {t("Quick Actions", "त्वरित कार्यवाही")}
            </h2>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20need%20help%20choosing%20pooja%20items%20for%20my%20upcoming%20pooja.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-whatsapp text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">chat</span>
                <div>
                  <p className="font-bold">{t("Ask Our Pooja Expert", "पूजा विशेषज्ञ से पूछें")}</p>
                  <p className="text-sm text-white/80">{t("Get a custom samagri list", "कस्टम सामग्री सूची पाएँ")}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20want%20to%20place%20a%20bulk%20order%20for%20our%20temple.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-secondary text-on-secondary rounded-xl hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">temple_hindu</span>
                <div>
                  <p className="font-bold">{t("Temple / Bulk Orders", "मंदिर / थोक ऑर्डर")}</p>
                  <p className="text-sm text-on-secondary/80">{t("Special wholesale pricing", "विशेष थोक मूल्य")}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20have%20an%20issue%20with%20my%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors"
              >
                <span className="material-symbols-outlined text-primary">help</span>
                <div>
                  <p className="font-bold">{t("Order Support", "ऑर्डर सहायता")}</p>
                  <p className="text-sm text-on-surface-variant">{t("Track, return, or report an issue", "ट्रैक, वापसी, या समस्या रिपोर्ट")}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Grievance Officer */}
          <div className="bg-surface-container-low rounded-2xl p-6">
            <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-on-surface-variant">
              {t("Grievance Officer (as per IT Act 2000)", "शिकायत अधिकारी (IT Act 2000 अनुसार)")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("Name:", "नाम:")} Ritik Singh<br />
              {t("Email:", "ईमेल:")} {siteConfig.email}<br />
              {t("Phone:", "फ़ोन:")} {siteConfig.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
