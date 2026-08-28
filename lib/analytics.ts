// Lightweight analytics event helper. Safe to call even when no analytics
// provider is configured (NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID unset)
// — the calls simply become no-ops.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type LeadEventName =
  | "cta_click_consultation"
  | "cta_click_advisor"
  | "phone_click"
  | "whatsapp_click"
  | "contact_form_submit"
  | "lead_form_submit"
  | "product_enquiry"
  | "quote_request";

export function trackEvent(name: LeadEventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", name, params);
    }
  } catch {
    // Analytics must never break the user experience.
  }
}
