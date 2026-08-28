import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${siteConfig.brandName} home`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
          inverted ? "border-ivory/30 text-ivory" : "border-navy-900/15 text-navy-900"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3.2 5.5 5.8v5.4c0 4.5 2.8 8.3 6.5 9.2 3.7-.9 6.5-4.7 6.5-9.2V5.8L12 3.2Z" />
          <path d="m9.2 12 1.9 1.9 3.7-4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            inverted ? "text-ivory" : "text-navy-900"
          }`}
        >
          {siteConfig.brandName}
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.16em] ${
            inverted ? "text-ivory/60" : "text-navy-700/60"
          }`}
        >
          {siteConfig.brandTagline}
        </span>
      </span>
    </Link>
  );
}
