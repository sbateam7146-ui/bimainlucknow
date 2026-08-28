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
    display: "+91 87073 90508",
    href: "tel:+918707390508",
  },

  whatsapp: {
    display: "+91 87073 90508",
    // Digits only, with country code, no + or spaces — used to build wa.me links.
    numberForLink: "918707390508",
  },

  email: "sbateam7146@gmail.com",

  address: {
    line1: "LIC of India, Life Plus Office, Amitabh Dixit",
    line2: "Shanti Nagar, Chhota Barha, Alambagh, Lucknow, Uttar Pradesh",
    pincode: "226005",
    country: "India",
    // Basic no-API-key Google Maps embed centered on the address text below.
    // Deliberately geographic-only (no business/person name) for more reliable
    // geocoding. For a pinpoint-accurate marker, replace this with the iframe
    // "src" from Google Maps -> Search the exact location -> Share -> Embed a
    // map -> Copy HTML.
    mapEmbedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(
      "Shanti Nagar, Chhota Barha, Alambagh, Lucknow, Uttar Pradesh 226005"
    )}&z=15&output=embed`,
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
