import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LegalReviewNotice } from "@/components/LegalNotice";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information on this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <LegalReviewNotice />

          <div className="prose-legal space-y-8 text-sm leading-relaxed text-navy-800/90">
            <p>Last updated: [DATE TO BE CONFIRMED]</p>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                1. Introduction
              </h2>
              <p className="mt-3">
                This Privacy Policy explains how {siteConfig.brandName} (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) collects, uses, and protects information you
                provide through this website ({siteConfig.domain}). By using this website, you
                agree to the practices described here.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                2. Information We Collect
              </h2>
              <p className="mt-3">When you use our contact or enquiry forms, we may collect:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address (if provided)</li>
                <li>City</li>
                <li>Insurance requirement and any message you choose to share</li>
              </ul>
              <p className="mt-3">
                We may also collect limited technical information automatically (such as browser
                type or approximate location derived from IP address) through analytics tools,
                where enabled.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                3. How We Use Your Information
              </h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>To respond to your enquiry and provide insurance guidance</li>
                <li>To contact you via phone, WhatsApp, or email as you have consented to</li>
                <li>To improve our website and services</li>
              </ul>
              <p className="mt-3">
                <span className="rounded bg-gold-100 px-1.5 py-0.5 font-medium text-gold-800">
                  Placeholder:
                </span>{" "}
                Confirm the specific lead-management tool(s) or CRM (if any) that will process
                this data, and update this section accordingly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                4. Data Sharing
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share information with
                insurers, product providers, or service partners solely to the extent necessary
                to assist with your enquiry, and, where you have consented, with a
                lead-management or CRM tool used to manage enquiries.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                5. Data Retention
              </h2>
              <p className="mt-3">
                [PLACEHOLDER — retention period to be confirmed by the business owner, in line
                with applicable law.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                6. Your Rights
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal
                information by contacting us at {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                7. Cookies &amp; Analytics
              </h2>
              <p className="mt-3">
                This website may use analytics tools (such as Google Analytics) to understand how
                visitors use the site. These tools may use cookies. You can control cookies
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                8. Contact Us
              </h2>
              <p className="mt-3">
                For privacy-related questions, contact us at {siteConfig.email} or{" "}
                {siteConfig.phone.display}.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
