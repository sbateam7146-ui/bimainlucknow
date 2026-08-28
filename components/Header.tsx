"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { mainNav, productLinks } from "@/lib/nav";
import { ButtonLink } from "./Button";
import { MenuIcon, CloseIcon, ChevronDownIcon, PhoneIcon } from "./icons";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            if (item.name === "Products") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-2 text-sm font-medium transition-colors hover:bg-navy-900/5 xl:px-4 ${
                      pathname?.startsWith("/products") ? "text-gold-700" : "text-navy-900"
                    }`}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-3.5 w-3.5" />
                  </Link>
                  {productsOpen ? (
                    <div className="absolute left-0 top-full w-64 rounded-2xl border border-navy-900/10 bg-white p-2 shadow-soft">
                      {productLinks.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-navy-800 hover:bg-navy-900/5"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-2 text-sm font-medium transition-colors hover:bg-navy-900/5 xl:px-4 ${
                  pathname === item.href ? "text-gold-700" : "text-navy-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phone.href}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-900 xl:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <ButtonLink
            href="/contact"
            size="md"
            onClick={() => trackEvent("cta_click_consultation", { location: "header" })}
          >
            Get a Free Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-navy-900/10 bg-ivory lg:hidden">
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-navy-900 border-b border-navy-900/5 last:border-none"
              >
                {item.name}
              </Link>
            ))}
            <div className="pl-4">
              {productLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-navy-700"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <ButtonLink
              href="/contact"
              className="mt-4 w-full"
              onClick={() => {
                setOpen(false);
                trackEvent("cta_click_consultation", { location: "mobile_menu" });
              }}
            >
              Get a Free Consultation
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
