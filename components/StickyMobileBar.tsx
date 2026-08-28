"use client";

import { siteConfig, whatsappHref } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon, MessageIcon } from "./icons";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy-900/10 bg-white/95 backdrop-blur sm:hidden">
      <a
        href={siteConfig.phone.href}
        onClick={() => trackEvent("phone_click", { location: "sticky_bar" })}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-navy-900"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a
        href={whatsappHref("Hi, I would like to know more about insurance options.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { location: "sticky_bar" })}
        className="flex flex-col items-center justify-center gap-1 border-x border-navy-900/10 py-2.5 text-[#1f9c4d]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_click_consultation", { location: "sticky_bar" })}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-navy-900"
      >
        <MessageIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">Enquire</span>
      </Link>
    </div>
  );
}
