import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import {
  ClipboardCheckIcon,
  CompassIcon,
  LayersIcon,
  MessageIcon,
  ScaleIcon,
  UsersIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose Us",
  description:
    "Personalised guidance, transparent communication, and long-term support — see how we approach insurance guidance differently.",
  path: "/why-choose-us",
});

const reasons = [
  {
    icon: CompassIcon,
    title: "Personalised Guidance",
    description:
      "We start by listening — your income, dependents, goals, and existing coverage all shape our suggestions, not a generic script.",
  },
  {
    icon: ScaleIcon,
    title: "Transparent Communication",
    description:
      "We explain benefits and limitations honestly, so decisions are made with full information, not just a sales pitch.",
  },
  {
    icon: LayersIcon,
    title: "Product Comparison",
    description:
      "Where multiple suitable options exist, we help you compare them side-by-side in plain language.",
  },
  {
    icon: MessageIcon,
    title: "Responsive Customer Support",
    description:
      "Reach us by phone, WhatsApp, or a simple form — we aim to respond to every query promptly.",
  },
  {
    icon: UsersIcon,
    title: "Long-Term Relationship",
    description:
      "Our role doesn't end at purchase. As your life changes, we remain available to help you reassess your coverage.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Assistance Through Your Journey",
    description:
      "From choosing a policy to understanding the claims process, we aim to be a steady point of contact throughout.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Guidance that puts your interests first."
        description="We built our approach around the things that matter most when someone is making an insurance decision: clarity, honesty, and support that lasts."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Why Choose Us" }]}
      />

      <Section className="bg-white">
        <SectionHeading title="What sets our approach apart" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-navy-900/10 bg-ivory/50 p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                <reason.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{reason.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-ivory">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Ready to talk through your options?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ivory/75">
              A free, no-obligation consultation is the easiest way to see if our guidance is
              useful for you.
            </p>
          </div>
          <ButtonLink href="/contact" variant="secondary" size="lg" className="shrink-0">
            Get a Free Consultation
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
