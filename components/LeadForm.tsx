"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { siteConfig, whatsappHref } from "@/lib/config";
import { Button } from "./Button";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { trackEvent } from "@/lib/analytics";

const insuranceOptions = [
  "Life Insurance",
  "Term Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Other / Not sure yet",
];

const contactMethods = ["Phone Call", "WhatsApp", "Email"];

export function LeadForm({
  source = "website",
  compact = false,
  defaultRequirement,
}: {
  source?: string;
  compact?: boolean;
  defaultRequirement?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    setStatus("submitting");
    setErrors([]);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      city: String(data.get("city") || ""),
      requirement: String(data.get("requirement") || ""),
      preferredContact: String(data.get("preferredContact") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""),
      source,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setErrors(json.errors || ["Something went wrong. Please try again."]);
        setStatus("error");
        return;
      }
      trackEvent("lead_form_submit", { source });
      setStatus("success");
      form.reset();
    } catch {
      setErrors(["Something went wrong. Please check your connection and try again."]);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Thank you — we&apos;ve received your request.
        </h3>
        <p className="mt-2 text-sm text-navy-700/80">
          One of our advisors will reach out to you shortly. If your requirement is urgent, you
          can also reach us directly:
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={siteConfig.phone.href}
            onClick={() => trackEvent("phone_click", { location: "form_success" })}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900"
          >
            <PhoneIcon className="h-4 w-4" /> Call Us
          </a>
          <a
            href={whatsappHref("Hi, I just submitted a form on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "form_success" })}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8 shadow-card"
      noValidate
    >
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
            placeholder="10-digit mobile number"
          />
        </Field>

        <Field label="Email (optional)" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="City" htmlFor="city">
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className={inputClasses}
            placeholder="e.g. Lucknow"
          />
        </Field>

        <Field label="Insurance Requirement" htmlFor="requirement">
          <select
            id="requirement"
            name="requirement"
            defaultValue={defaultRequirement || ""}
            className={inputClasses}
          >
            <option value="">Select an option</option>
            {insuranceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Contact Method" htmlFor="preferredContact">
          <select id="preferredContact" name="preferredContact" defaultValue="" className={inputClasses}>
            <option value="">Select an option</option>
            {contactMethods.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message (optional)" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={3}
            className={inputClasses}
            placeholder="Tell us a little about what you're looking for"
          />
        </Field>
      </div>

      {errors.length > 0 ? (
        <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          <ul className="list-disc pl-5">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-relaxed text-navy-700/60">
        By submitting this form, you consent to being contacted by our team via phone, WhatsApp,
        or email regarding your insurance enquiry. We respect your privacy — see our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        .
      </p>

      <Button type="submit" size="lg" className="mt-5 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Get a Free Consultation"}
      </Button>
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-navy-900/15 bg-ivory/40 px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-700/40 focus:border-navy-900/40 focus:outline-none focus:ring-2 focus:ring-navy-900/10";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required ? <span className="text-gold-600">*</span> : null}
      </label>
      {children}
    </div>
  );
}
