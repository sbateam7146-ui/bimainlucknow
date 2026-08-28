import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} | Insurance Guidance in Lucknow`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Personalised insurance guidance for life, term, health, and motor insurance. Get a free consultation and make informed protection decisions for your family.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brandName,
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-navy-900 antialiased">
        <JsonLd data={organizationJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
        <StickyMobileBar />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
