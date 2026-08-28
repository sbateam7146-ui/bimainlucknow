import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { CompassIcon, MessageIcon, ScaleIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about our mission, values, and approach to helping families in Lucknow make informed insurance decisions.",
  path: "/about",
});

const values = [
  {
    icon: ScaleIcon,
    title: "Transparency",
    description:
      "We explain products honestly, including limitations, so you can make a fully informed decision.",
  },
  {
    icon: CompassIcon,
    title: "Personalised Guidance",
    description:
      "Every family's situation is different. We take time to understand yours before recommending a direction.",
  },
  {
    icon: UsersIcon,
    title: "Customer-First",
    description:
      "Your interests come before any single product or provider. We are here to guide, not to push.",
  },
  {
    icon: MessageIcon,
    title: "Clear Communication",
    description:
      "Insurance terminology can be confusing. We aim to explain it simply, without unnecessary jargon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Insurance guidance, built around people."
        description="We help individuals and families in Lucknow understand and choose insurance protection that suits their life stage and goals."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About Us" }]}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Company Introduction" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700/85">
              <p>
                Financial planning is, at its heart, about reaching your life&apos;s goals at the
                right time — with the right protection in place along the way. You are precious
                to your family, and they can&apos;t afford to lose you. But nobody knows how long
                they will live; life is precious, yet fragile. So who looks after your family once
                you&apos;re no longer there for them?
              </p>
              <p>
                We work under Life Insurance Corporation of India (LIC) — an institution that has
                stood beside millions of families across the country since 1956. Our guiding
                motto is an ancient Sanskrit line, योगक्षेमं वहाम्यहम् (Yogakshemam Vahamyaham),
                meaning <em>&quot;Your welfare is our responsibility.&quot;</em> It shapes every
                conversation we have with you.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Our Purpose" title="Mission &amp; Vision" />
            <div className="mt-5 space-y-5">
              <div className="rounded-2xl border border-navy-900/10 bg-ivory/60 p-5">
                <h3 className="font-display text-lg font-semibold text-navy-900">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/85">
                  &quot;Your welfare is our responsibility&quot; — योगक्षेमं वहाम्यहम्. We help
                  individuals and families make informed, confident insurance decisions through
                  honest guidance and transparent communication.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-900/10 bg-ivory/60 p-5">
                <h3 className="font-display text-lg font-semibold text-navy-900">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/85">
                  To be a trusted, long-term insurance guidance partner for families across
                  Lucknow and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What We Stand For" title="Our Values" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-navy-900/10 bg-white p-6 text-center shadow-card">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                <value.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-ivory">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ShieldIcon className="h-9 w-9 text-gold-400" />
            <h2 className="mt-4 font-display text-3xl font-semibold">
              A customer-first philosophy.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/75">
              We measure success not by how many policies are sold, but by whether customers
              feel genuinely guided — with clear explanations, honest comparisons, and support
              that continues after the paperwork is done.
            </p>
          </div>
          <div className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-ivory/80">
              Have questions about how we work, or want to know more before reaching out?
              We&apos;re happy to talk you through it with no obligation.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-6">
              Talk to Us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
