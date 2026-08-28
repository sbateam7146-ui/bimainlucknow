# Information Needed From the Business Owner

This website was built with clearly marked placeholders wherever real business
information was required but not available. Nothing fake (no invented company
names, license numbers, awards, testimonials, or statistics) has been used.

Everything below should be reviewed and provided before the site is treated as
fully "live" for real customer lead generation. Once you have this information,
send it over and it can be updated in a few minutes — it is all centralized in
one file: `lib/config.ts`.

## 1. Business identity
- [ ] Confirmed legal / registered business name (used in `legalName`)
- [ ] Confirmed public-facing brand name (currently a placeholder: "Bima Lucknow",
      derived directly from the domain name — replace if you prefer something else)
- [ ] Logo file (SVG or PNG, transparent background preferred) — currently using a
      simple placeholder icon mark

## 2. Contact details
- [ ] Business phone number (currently a placeholder in `lib/config.ts`)
- [ ] WhatsApp Business number
- [ ] Business email address (currently a placeholder: info@bimainlucknow.com —
      confirm this mailbox actually exists and is monitored, or provide another)
- [ ] Office address (line 1, area, PIN code)
- [ ] Business hours
- [ ] Google Maps link for the office (Google Maps → Share → Embed a map → copy
      the src URL into `mapEmbedSrc` in `lib/config.ts`)

## 3. Regulatory / compliance information
- [ ] IRDAI registration number / composite corporate agent license number (if
      applicable to your business model) — **do not publish the Disclaimer page's
      regulatory section until this is confirmed and verified**
- [ ] Confirmation from a qualified legal/compliance professional that the
      Privacy Policy, Terms & Conditions, and Disclaimer pages meet your actual
      regulatory obligations (these are currently general-purpose drafts, clearly
      marked as needing review on each page)

## 4. Content
- [ ] A short "About Us" introduction (who you are, how the business started)
- [ ] Confirmation of which insurance categories you actually want to promote
      (the site currently covers Life, Term, Health, Motor, and a placeholder
      "Other Insurance" section)
- [ ] Any real testimonials you are able to provide with the customer's
      explicit permission (none have been invented — none currently appear on
      the site)

## 5. Social media
- [ ] Facebook page URL (optional)
- [ ] Instagram profile URL (optional)
- [ ] LinkedIn page URL (optional)
- [ ] YouTube channel URL (optional)

## 6. Lead handling
- [ ] Decide where you want form submissions to go: email inbox, Google
      Sheets, a CRM, or a WhatsApp integration. Right now, submissions are only
      logged on the server (visible in Vercel's logs) and are **not** being
      stored anywhere permanent. Once you choose a tool, we can connect it via
      the `LEAD_WEBHOOK_URL` environment variable — most tools (Zapier, Make,
      Google Sheets via a webhook, most CRMs) can accept this with no code
      changes.

## 7. Analytics (optional, can be added anytime)
- [ ] Google Analytics 4 Measurement ID
- [ ] Google Search Console verification code
- [ ] Meta (Facebook) Pixel ID

---

**Nothing above blocks the site from being deployed for internal review** —
placeholders are clearly marked in the UI itself (e.g. "[+91 XXXXX XXXXX]") so
nothing looks like real, verified information by accident.
