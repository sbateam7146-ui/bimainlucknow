import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/why-choose-us",
    "/claims-support",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);

  const now = new Date();

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products/") ? 0.8 : 0.6,
  }));
}
