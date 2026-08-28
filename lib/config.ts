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
    // Official Google Maps "Embed a map" link for the business's actual Maps
    // listing (LIC Of India, Life Plus Office, Amitabh Dixit).
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.721206502994!2d80.91603320562061!3d26.817004377934445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc3ecd27f88b%3A0x307a4746d83e1e24!2sL%20I%20C%20Of%20India%2C%20Life%20Plus%20Office%2C%20Amitabh%20Dixit!5e0!3m2!1sen!2sin!4v1787914004192!5m2!1sen!2sin",
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
