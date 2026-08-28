import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  requirement?: string;
  preferredContact?: string;
  message?: string;
  source?: string;
  // honeypot field - real users never fill this in
  company?: string;
}

const PHONE_REGEX = /^[+]?[0-9\s-]{8,15}$/;

function validate(body: Partial<LeadPayload>): string[] {
  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) {
    errors.push("Please enter your name.");
  }
  if (!body.phone || !PHONE_REGEX.test(body.phone.trim())) {
    errors.push("Please enter a valid phone number.");
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("Please enter a valid email address.");
  }
  return errors;
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, errors: ["Invalid request."] }, { status: 400 });
  }

  // Honeypot: silently succeed without processing (likely a bot).
  if (body.company) {
    return NextResponse.json({ success: true });
  }

  const errors = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const lead = {
    name: body.name?.trim(),
    phone: body.phone?.trim(),
    email: body.email?.trim() || null,
    city: body.city?.trim() || null,
    requirement: body.requirement?.trim() || null,
    preferredContact: body.preferredContact?.trim() || null,
    message: body.message?.trim() || null,
    source: body.source || "website",
    receivedAt: new Date().toISOString(),
  };

  // Always log server-side so the submission is visible in Vercel's logs.
  console.log("[lead-submission]", JSON.stringify(lead));

  // Forward to a webhook (Zapier / Make / Google Sheets / CRM) if configured.
  // Leads are NOT stored anywhere else until LEAD_WEBHOOK_URL is set — see
  // BUSINESS_INFORMATION_NEEDED.md.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[lead-webhook-error]", err);
      // The lead was still logged above; do not fail the user-facing request.
    }
  }

  return NextResponse.json({ success: true });
}
