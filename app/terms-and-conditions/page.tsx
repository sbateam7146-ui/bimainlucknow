import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LegalReviewNotice } from "@/components/LegalNotice";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of this website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms &amp; Conditions"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Terms & Conditions" }]}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <LegalReviewNotice />

          <div className="space-y-8 text-sm leading-relaxed text-navy-800/90">
            <p>Last updated: [DATE TO BE CONFIRMED]</p>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using {siteConfig.domain} (the &quot;Website&quot;), you agree to
                be bound by these Terms &amp; Conditions. If you do not agree, please do not use
                this Website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                2. Nature of This Website
              </h2>
              <p className="mt-3">
                This Website provides general information about insurance categories and
                facilitates enquiries for guidance. It does not itself issue insurance policies.
                Any insurance product ultimately purchased is issued by, and subject to the terms
                and conditions of, the relevant licensed insurer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                3. No Guarantee of Outcomes
              </h2>
              <p className="mt-3">
                Content on this Website is for general informational purposes only and does not
                constitute financial, legal, or insurance advice, nor a guarantee of any specific
                benefit, return, coverage, or claim outcome. Always refer to the official sales
                brochure and policy document of the specific insurer before making a decision.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                4. Accuracy of Information
              </h2>
              <p className="mt-3">
                While we aim to keep information accurate and up to date, insurance products,
                terms, and regulations change over time. We do not warrant that all content is
                complete, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                5. Intellectual Property
              </h2>
              <p className="mt-3">
                All content, design, and branding on this Website, unless otherwise noted, is the
                property of {siteConfig.brandName} and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                6. Limitation of Liability
              </h2>
              <p className="mt-3">
                [PLACEHOLDER — a limitation-of-liability clause appropriate to your jurisdiction
                and business structure should be drafted by a qualified legal professional.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                7. Governing Law
              </h2>
              <p className="mt-3">
                [PLACEHOLDER — to be confirmed, typically the courts of the jurisdiction where the
                business is registered, e.g. Lucknow, Uttar Pradesh, India.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                8. Contact Us
              </h2>
              <p className="mt-3">
                Questions about these Terms can be directed to {siteConfig.email}.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
