# Bima Lucknow — Insurance Marketing Website

A premium, trustworthy marketing and lead-generation website for insurance
guidance, built for the domain **bimainlucknow.com**.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Zero UI/animation dependencies — components and icons are hand-built to keep
  the project lightweight and fast
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
app/                 Pages (App Router). One folder per route.
  products/[slug]/   Individual product pages (life, term, health, motor, other)
  api/lead/           Lead-form submission API route
components/          Reusable UI components
lib/
  config.ts          Central business configuration (name, phone, address, etc.)
  products.ts        Insurance product content
  seo.ts             Metadata / structured data helpers
  analytics.ts        Analytics event helper
public/              Static assets (favicon, etc.)
```

## Editing business information

Almost everything specific to the business (brand name, phone, WhatsApp,
email, address, social links) is centralized in **[`lib/config.ts`](lib/config.ts)**.
Edit that one file and the change applies across the whole site.

See **[`BUSINESS_INFORMATION_NEEDED.md`](BUSINESS_INFORMATION_NEEDED.md)** for
the full list of placeholders that still need real information before launch.

## Local development

Requires [Node.js](https://nodejs.org/) (LTS version).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Environment variables

Copy `.env.example` to `.env.local` for local development. See that file for
what each variable does. Never commit `.env.local` — it's already in
`.gitignore`.

## Build & lint

```bash
npm run lint
npm run build
```

## Lead form data

Form submissions are validated and logged server-side. They are **not**
stored anywhere permanent until `LEAD_WEBHOOK_URL` is configured to point at
an email/Sheets/CRM webhook. See `app/api/lead/route.ts`.

## Deployment

This project is configured for zero-config deployment on Vercel. Push to the
connected GitHub repository's main branch to trigger a production deployment.
