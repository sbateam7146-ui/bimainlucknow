import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";
import { getProductBySlug, products } from "@/lib/products";
import { buildMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ButtonLink } from "@/components/Button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
    keywords: [`${product.name} Lucknow`, `${product.name} advisor`, product.name],
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <PageHero
        eyebrow="Insurance Product"
        title={product.name}
        description={product.tagline}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: product.name },
        ]}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading title="Overview" />
            <div className="mt-5 space-y-4">
              {product.overview.map((para) => (
                <p key={para} className="text-base leading-relaxed text-navy-700/85">
                  {para}
                </p>
              ))}
            </div>

            <h3 className="mt-10 font-display text-xl font-semibold text-navy-900">
              Who It May Be Suitable For
            </h3>
            <ul className="mt-4 space-y-3">
              {product.suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-navy-700/85">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-navy-900">
              Key Considerations
            </h3>
            <ul className="mt-4 space-y-3">
              {product.considerations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900/40" />
                  <span className="text-sm leading-relaxed text-navy-700/85">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get Guidance on {product.shortName} Insurance</ButtonLink>
              <ButtonLink href="/faq" variant="outline">
                Read General FAQs
              </ButtonLink>
            </div>

            <InlineDisclaimer className="mt-10" />
          </div>

          <div>
            <div className="sticky top-24">
              <LeadForm source={`product-${product.slug}`} compact defaultRequirement={product.name} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Common Questions" title={`${product.name} FAQs`} />
        <div className="mt-8 max-w-3xl">
          <FAQAccordion items={product.faqs} />
        </div>
      </Section>
    </>
  );
}
