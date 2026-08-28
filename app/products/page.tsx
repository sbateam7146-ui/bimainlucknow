import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { InlineDisclaimer } from "@/components/Disclaimer";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Products",
  description:
    "Explore life, term, health, motor, and other insurance categories with clear, honest explanations to help you decide what may suit your needs.",
  path: "/products",
  keywords: ["insurance products Lucknow", "types of insurance India"],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance Products"
        title="Explore protection built around real life needs."
        description="Each category below explains what the insurance is generally designed to do, who it may suit, and what to consider — in plain language."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Products" }]}
      />
      <Section>
        <SectionHeading
          title="Choose a category to learn more"
          description="Not sure where to start? Reach out for a free consultation and we'll help you figure out what's relevant to you."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <InlineDisclaimer className="mt-12 max-w-3xl" />
      </Section>
    </>
  );
}
