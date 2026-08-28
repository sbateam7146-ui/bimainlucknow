"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type LeadEventName } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-ivory hover:bg-navy-800 focus-visible:outline-navy-900 shadow-soft",
  secondary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 focus-visible:outline-gold-600 shadow-soft",
  outline:
    "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5 focus-visible:outline-navy-900",
  ghost: "text-navy-900 hover:bg-navy-900/5 focus-visible:outline-navy-900",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const shared =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  event,
  eventParams,
  target,
  rel,
}: CommonProps & {
  href: string;
  onClick?: () => void;
  // Serializable tracking info — safe to pass from a Server Component page.
  // Prefer this over `onClick` when the parent isn't already a Client Component.
  event?: LeadEventName;
  eventParams?: Record<string, string>;
  target?: string;
  rel?: string;
}) {
  function handleClick() {
    onClick?.();
    if (event) trackEvent(event, eventParams);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={`${shared} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  disabled,
}: CommonProps & {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${shared} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
