import Link from "next/link";
import type { ProductInfo } from "@/lib/products";
import { ArrowRightIcon, CarIcon, HeartPulseIcon, LayersIcon, ShieldIcon } from "./icons";

const iconMap: Record<string, (props: { className?: string }) => JSX.Element> = {
  "life-insurance": ShieldIcon,
  "term-insurance": ShieldIcon,
  "health-insurance": HeartPulseIcon,
  "motor-insurance": CarIcon,
  "other-insurance": LayersIcon,
};

export function ProductCard({ product }: { product: ProductInfo }) {
  const Icon = iconMap[product.slug] || ShieldIcon;
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card transition-shadow hover:shadow-soft sm:p-7"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{product.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
