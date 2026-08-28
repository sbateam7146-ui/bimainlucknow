"use client";

import type { ReactNode } from "react";
import { trackEvent, type LeadEventName } from "@/lib/analytics";

// A plain <a> tag that reports an analytics event on click. Exists so that
// Server Component pages can trigger tracked clicks by passing serializable
// props (an event name + string params) instead of a function — functions
// cannot be passed from a Server Component into an interactive element.
export function TrackedAnchor({
  href,
  children,
  className,
  target,
  rel,
  event,
  eventParams,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  event: LeadEventName;
  eventParams?: Record<string, string>;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => trackEvent(event, eventParams)}
    >
      {children}
    </a>
  );
}
