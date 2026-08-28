// ---------------------------------------------------------------------------
// CENTRAL BUSINESS CONFIGURATION
// ---------------------------------------------------------------------------
// This is the ONE file to edit to update brand name, contact details,
// address, and social links across the entire website.
//
// Anything wrapped in [BRACKETS] is a PLACEHOLDER and must be replaced with
// real information before the site goes live. See BUSINESS_INFORMATION_NEEDED.md
// for the full list of what is still required from the business owner.
// ---------------------------------------------------------------------------

export const siteConfig = {
  // Working display name derived from the domain (bimainlucknow.com -> "Bima Lucknow").
  // This is NOT a registered legal/trade name. Replace with the confirmed
  // legal or trade name once available.
  brandName: "Bima Lucknow",
  brandTagline: "Insurance Guidance You Can Trust",

  // Full legal / registered business name (for footer, legal pages, invoices).
  legalName: "[LEGAL BUSINESS NAME — TO BE CONFIRMED]",

  domain: "https://bimainlucknow.com",

  phone: {
    display: "[+91 XXXXX XXXXX]",
    href: "tel:+91XXXXXXXXX",
  },

  whatsapp: {
    display: "[+91 XXXXX XXXXX]",
    // Digits only, with country code, no + or spaces — used to build wa.me links.
    numberForLink: "91XXXXXXXXXX",
  },

  email: "[info@bimainlucknow.com]",

  address: {
    line1: "[Office Address Line 1]",
    line2: "[Locality, Lucknow, Uttar Pradesh]",
    pincode: "[PIN Code]",
    country: "India",
    // Paste a Google Maps "Embed a map" iframe src URL here once the office
    // location is confirmed. Leave blank to show a placeholder instead.
    mapEmbedSrc: "",
  },

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  // IRDAI / regulatory registration details. Leave blank until the business
  // owner provides verified, current information. Do not fabricate.
  regulatory: {
    irdaiRegistrationNumber: "",
    corporateAgentLicenseNumber: "",
  },

  business: {
    // Used in structured data / local SEO. Adjust once hours are confirmed.
    hours: "[Mon–Sat, 10:00 AM – 6:30 PM]",
    serviceArea: "Lucknow and surrounding areas, Uttar Pradesh",
  },
} as const;

export function whatsappHref(prefilledMessage?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.numberForLink}`;
  return prefilledMessage
    ? `${base}?text=${encodeURIComponent(prefilledMessage)}`
    : base;
}
