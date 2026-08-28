"use client";

import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappHref("Hi, I would like to know more about insurance options.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "float_button" })}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-950/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
