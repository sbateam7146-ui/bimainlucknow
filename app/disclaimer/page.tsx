import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LegalReviewNotice } from "@/components/LegalNotice";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclosures about the information provided on this website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Disclaimer" }]}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <LegalReviewNotice />

          <div className="space-y-8 text-sm leading-relaxed text-navy-800/90">
            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                General Information Only
              </h2>
              <p className="mt-3">
                The content on {siteConfig.domain} is provided for general informational
                purposes to help visitors understand broad categories of insurance. It is not
                personalised financial or legal advice, and should not be treated as a
                substitute for reviewing the official sales brochure and policy wording of any
                specific insurance product.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Insurance Is the Subject Matter of Solicitation
              </h2>
              <p className="mt-3">
                Insurance is the subject matter of solicitation. For more details on risk
                factors, terms, and conditions, please read the relevant sales brochure carefully
                before concluding a sale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                No Guaranteed Returns or Benefits
              </h2>
              <p className="mt-3">
                We do not promise, guarantee, or imply any specific investment return, benefit
                amount, or claim outcome anywhere on this Website. Any figures, if shown in the
                future, would be illustrative only and subject to the specific insurer&apos;s
                terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Regulatory Status
              </h2>
              <p className="mt-3">
                [PLACEHOLDER — this section must state the business&apos;s actual IRDAI
                registration / license status, registration number, and validity, exactly as
                issued by the regulator. Do not publish this website for lead generation until
                this section is completed with verified, accurate regulatory information, or
                legal counsel confirms it is not required for your specific business model.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Third-Party Products
              </h2>
              <p className="mt-3">
                Any insurance products referenced or eventually recommended are underwritten and
                issued by third-party licensed insurers. {siteConfig.brandName} is not the
                insurer and does not determine policy terms, pricing, or claim decisions.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
