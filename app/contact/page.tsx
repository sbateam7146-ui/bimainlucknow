import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappHref } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch for a free insurance consultation — call, WhatsApp, or send us a message and we'll get back to you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your insurance needs."
        description="Reach us however is easiest for you. We aim to respond to every enquiry promptly."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <Section className="bg-white" id="advisor">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title="Get in touch" />
            <div className="mt-6 space-y-4">
              <a
                href={siteConfig.phone.href}
                className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-ivory/50 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                    Call Us
                  </p>
                  <p className="font-medium text-navy-900">{siteConfig.phone.display}</p>
                </div>
              </a>

              <a
                href={whatsappHref("Hi, I'd like to talk to an advisor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-ivory/50 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1f9c4d]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                    WhatsApp
                  </p>
                  <p className="font-medium text-navy-900">{siteConfig.whatsapp.display}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email.replace(/[[\]]/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-ivory/50 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                    Email
                  </p>
                  <p className="font-medium text-navy-900">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-ivory/50 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                    Office Address
                  </p>
                  <p className="font-medium text-navy-900">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    {siteConfig.address.pincode ? ` – ${siteConfig.address.pincode}` : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-navy-900/10">
              {siteConfig.address.mapEmbedSrc ? (
                <iframe
                  title="Office location map"
                  src={siteConfig.address.mapEmbedSrc}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-navy-900/5 text-center text-sm text-navy-700/60 p-6">
                  Map will appear here once the office address and Google Maps link are
                  confirmed.
                </div>
              )}
            </div>

            <InlineDisclaimer className="mt-6" />
          </div>

          <div>
            <SectionHeading title="Send us a message" />
            <div className="mt-6">
              <LeadForm source="contact-page" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
