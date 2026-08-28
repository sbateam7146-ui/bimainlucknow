import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Claims Support",
  description:
    "Understand the general claims-support process and how we can assist you when you need to file an insurance claim.",
  path: "/claims-support",
});

const steps = [
  {
    title: "Notify the Insurer",
    description:
      "As soon as an insurable event occurs, the insurer (or their designated claims desk / TPA) should be notified, generally within the timeframe specified in your policy.",
  },
  {
    title: "Submit Required Documents",
    description:
      "The insurer will specify the documents needed to process the claim (such as identity proof, medical records, FIR/repair estimates, or death certificate, depending on the claim type).",
  },
  {
    title: "Claim Assessment",
    description:
      "The insurer reviews the submitted claim and documentation against the policy terms to assess eligibility and the amount payable, if any.",
  },
  {
    title: "Follow-Up",
    description:
      "We can help you follow up on the status of your claim and understand any additional information the insurer may request.",
  },
  {
    title: "Resolution",
    description:
      "The insurer communicates the final claim decision and, where approved, processes settlement as per their internal timelines and the policy terms.",
  },
];

export default function ClaimsSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Claims Support"
        title="Understanding the claims process."
        description="Filing a claim can feel overwhelming. Here is a general overview of how the process typically works, and how we can support you along the way."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Claims Support" }]}
      />

      <Section className="bg-white">
        <SectionHeading eyebrow="General Process" title="How a claim generally works" />
        <div className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-5 rounded-2xl border border-navy-900/10 bg-ivory/50 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-base font-semibold text-ivory">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gold-200 bg-gold-50 p-6">
          <h3 className="font-display text-lg font-semibold text-navy-900">
            Important: Claim decisions rest with your insurer
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-800/85">
            The steps above describe a general, typical claims process. The exact process,
            required documents, timelines, and eligibility for any specific claim are determined
            solely by the insurer that issued your policy, in accordance with your policy terms
            and applicable regulations. We can help you navigate and follow up on the process,
            but we do not make claim decisions and cannot guarantee any outcome.
          </p>
        </div>

        <InlineDisclaimer className="mt-8" />

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-navy-900 p-6 text-ivory sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold">Need help with an active claim?</h3>
            <p className="mt-1 text-sm text-ivory/75">
              Reach out and we&apos;ll do our best to guide you through the next steps.
            </p>
          </div>
          <ButtonLink href="/contact" variant="secondary" className="shrink-0">
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
