import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { InlineDisclaimer } from "./Disclaimer";
import { mainNav, productLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/config";
import { PhoneIcon, MailIcon, MapPinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-ivory">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              Personalised insurance guidance to help you protect what matters most — with
              transparent communication at every step.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ivory/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ivory/80 hover:text-gold-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ivory/50">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ivory/80 hover:text-gold-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ivory/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${siteConfig.email.replace(/[[\]]/g, "")}`}>{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  {siteConfig.address.pincode ? ` – ${siteConfig.address.pincode}` : ""}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8">
          <InlineDisclaimer className="text-ivory/60" />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/50">
            &copy; {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ivory/60">
            <Link href="/privacy-policy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-400">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
