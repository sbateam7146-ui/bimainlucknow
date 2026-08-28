import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about term insurance, life insurance, health insurance, claims, and how to get started.",
  path: "/faq",
});

const faqGroups = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How can I speak to an advisor?",
        answer:
          "You can call us, message us on WhatsApp, or fill out the contact form on this website. We'll get back to you to understand your requirement.",
      },
      {
        question: "Is there any cost for a consultation?",
        answer: "No, our initial consultation and guidance are provided free of charge.",
      },
      {
        question: "How much insurance should I consider?",
        answer:
          "This depends on factors like your income, dependents, existing liabilities (such as loans), and financial goals. We can help you think through this during a consultation rather than giving a generic number.",
      },
    ],
  },
  {
    title: "Life & Term Insurance",
    items: [
      {
        question: "What is term insurance?",
        answer:
          "Term insurance is a type of life insurance that provides a payout to your nominee if you pass away during the policy term, in exchange for a premium. It is generally considered a straightforward, protection-focused product.",
      },
      {
        question: "Why do I need life insurance?",
        answer:
          "Life insurance can help provide financial security to your family or dependents if you are no longer able to provide for them, helping cover ongoing expenses, loans, or future goals like education.",
      },
      {
        question: "What is the difference between term insurance and other life insurance?",
        answer:
          "Term insurance is typically pure protection at a lower premium, without a savings/investment component. Other life insurance types may combine protection with savings or investment features, usually at a higher premium. The right fit depends on your goals.",
      },
      {
        question: "Can I insure my family?",
        answer:
          "Yes — depending on the product, you can often insure yourself and, in many cases, extend certain types of coverage (like health insurance) to include family members. We can help you explore what's available.",
      },
    ],
  },
  {
    title: "Health Insurance",
    items: [
      {
        question: "What is health insurance?",
        answer:
          "Health insurance is designed to help cover eligible medical and hospitalisation expenses in exchange for a premium, subject to the specific policy's terms, exclusions, and limits.",
      },
      {
        question: "What documents may be required for a health insurance claim?",
        answer:
          "This typically includes identity proof, hospital bills, discharge summary, and any specific forms required by the insurer or TPA. Exact requirements vary by insurer, so please confirm directly with them or ask us for guidance.",
      },
    ],
  },
  {
    title: "Claims",
    items: [
      {
        question: "How does a claim generally work?",
        answer:
          "In general: you notify the insurer, submit the required documents, the insurer assesses the claim against your policy terms, and then communicates a decision. See our Claims Support page for more detail.",
      },
      {
        question: "Who decides whether my claim is approved?",
        answer:
          "Claim decisions are made solely by the insurer that issued your policy, based on your policy terms and the documentation provided. We can help guide and follow up on the process, but do not make claim decisions ourselves.",
      },
    ],
  },
];

const allFaqsFlat = faqGroups.flatMap((group) => group.items);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(allFaqsFlat)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Straightforward answers to the questions we hear most often. If you don't see yours here, just reach out."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />

      <Section className="bg-white">
        <div className="space-y-14">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-2xl font-semibold text-navy-900">{group.title}</h2>
              <div className="mt-5 max-w-3xl">
                <FAQAccordion items={group.items} />
              </div>
            </div>
          ))}
        </div>
        <InlineDisclaimer className="mt-14 max-w-3xl" />
        <p className="mt-6 max-w-3xl text-sm text-navy-700/70">
          Still have questions? Call us at {siteConfig.phone.display} or use the{" "}
          <a href="/contact" className="underline">
            contact form
          </a>
          .
        </p>
      </Section>
    </>
  );
}
