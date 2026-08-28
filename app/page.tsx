import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { TrustPillars } from "@/components/TrustPillars";
import { FAQAccordion } from "@/components/FAQAccordion";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { TrackedAnchor } from "@/components/TrackedAnchor";
import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardCheckIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { products } from "@/lib/products";
import { siteConfig, whatsappHref } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.brandName} | Insurance Guidance in Lucknow`,
  description:
    "Get personalised, transparent guidance on life, term, health, and motor insurance. Free consultation, no pressure — protect what matters most.",
  path: "/",
  keywords: [
    "insurance advisor Lucknow",
    "term insurance Lucknow",
    "health insurance Lucknow",
    "life insurance advisor",
    "motor insurance Lucknow",
  ],
});

const processSteps = [
  {
    title: "Share Your Needs",
    description: "Tell us a little about your family, goals, and current coverage — takes two minutes.",
  },
  {
    title: "Get Personalised Guidance",
    description: "An advisor reviews your situation and explains suitable options in plain language.",
  },
  {
    title: "Compare With Confidence",
    description: "We help you understand differences between plans so you can decide without pressure.",
  },
  {
    title: "Stay Supported",
    description: "We remain a point of contact for questions, renewals, and future changes in your life.",
  },
];

const homeFaqs = [
  {
    question: "Is this service free for me?",
    answer:
      "Yes, our consultation and guidance are free of charge. We are here to help you understand your options clearly.",
  },
  {
    question: "Will I be pressured to buy something?",
    answer:
      "No. Our goal is to help you make an informed decision at your own pace. There is no obligation to purchase after a consultation.",
  },
  {
    question: "Which areas do you serve?",
    answer: `We primarily assist customers in ${siteConfig.business.serviceArea}.`,
  },
  {
    question: "How quickly will someone contact me?",
    answer:
      "We aim to respond to every enquiry as promptly as possible. You can also reach us directly by phone or WhatsApp for faster contact.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 text-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy-400/10 blur-3xl"
        />
        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <Eyebrow>Insurance Guidance, Done Right</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl text-balance">
              Protect What Matters Most.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ivory/75">
              We help individuals and families in Lucknow choose suitable life, health, and motor
              insurance protection — with clear explanations, honest comparisons, and no
              high-pressure sales tactics.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/contact"
                variant="secondary"
                size="lg"
                event="cta_click_consultation"
                eventParams={{ location: "hero" }}
              >
                Get a Free Consultation
                <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/contact#advisor"
                variant="outline"
                size="lg"
                className="border-ivory/25 text-ivory hover:bg-ivory/10"
                event="cta_click_advisor"
                eventParams={{ location: "hero" }}
              >
                Talk to an Advisor
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ivory/70">
              <TrackedAnchor
                href={siteConfig.phone.href}
                event="phone_click"
                eventParams={{ location: "hero" }}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <PhoneIcon className="h-4 w-4" /> {siteConfig.phone.display}
              </TrackedAnchor>
              <TrackedAnchor
                href={whatsappHref("Hi, I'd like to know more about insurance options.")}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp_click"
                eventParams={{ location: "hero" }}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </TrackedAnchor>
              <span className="flex items-center gap-2">
                <MessageIcon className="h-4 w-4" /> No-obligation guidance
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-ivory/10 bg-ivory/5 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                What Guidance Looks Like
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "A clear picture of what you actually need — not a generic bundle",
                  "Side-by-side explanations, in plain English, before you decide",
                  "Straight answers about exclusions and terms, not just benefits",
                  "A single point of contact for questions, before and after purchase",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ivory/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST PILLARS */}
      <Section>
        <SectionHeading
          eyebrow="Why Families Work With Us"
          title="Guidance built around trust, not targets."
          description="We believe good insurance advice starts with understanding your life — then explaining options honestly, so you can decide with confidence."
        />
        <div className="mt-10">
          <TrustPillars />
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Insurance Products"
          title="Protection built around your life stage."
          description="Explore the categories below to understand how each type of insurance may fit into your financial planning."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, guided path to the right protection."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card">
              <span className="font-display text-3xl font-semibold text-gold-500/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US TEASER */}
      <Section className="bg-navy-900 text-ivory">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Insurance guidance that puts your interests first.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/75">
              From your first question to years down the line, we aim to be a dependable partner
              in your financial protection journey — not a one-time sales interaction.
            </p>
            <ButtonLink href="/why-choose-us" variant="secondary" className="mt-6">
              See Why Choose Us
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Product comparison across categories",
              "Assistance through the claims process",
              "Ongoing support, not one-time selling",
              "Clear answers to your questions, always",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-ivory/10 bg-ivory/5 p-5">
                <ClipboardCheckIcon className="h-5 w-5 text-gold-400" />
                <p className="mt-3 text-sm leading-relaxed text-ivory/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ PREVIEW */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Common Questions" title="Answers before you ask." />
            <ButtonLink href="/faq" variant="outline" className="mt-6">
              View All FAQs
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
          <FAQAccordion items={homeFaqs} />
        </div>
      </Section>

      {/* FINAL CTA + LEAD FORM */}
      <Section id="get-started" className="bg-ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-900">
              Request your free consultation.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy-700/80">
              Share a few details and we&apos;ll get in touch to understand your requirement — no
              cost, no obligation.
            </p>
            <div className="mt-8 space-y-4">
              <TrackedAnchor
                href={siteConfig.phone.href}
                event="phone_click"
                eventParams={{ location: "final_cta" }}
                className="flex items-center gap-3 text-sm font-medium text-navy-900"
              >
                <PhoneIcon className="h-5 w-5 text-gold-600" /> {siteConfig.phone.display}
              </TrackedAnchor>
              <a
                href={`mailto:${siteConfig.email.replace(/[[\]]/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-navy-900"
              >
                <MailIcon className="h-5 w-5 text-gold-600" /> {siteConfig.email}
              </a>
            </div>
            <InlineDisclaimer className="mt-8" />
          </div>
          <LeadForm source="homepage" />
        </div>
      </Section>
    </>
  );
}
