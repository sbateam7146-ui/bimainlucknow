import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
