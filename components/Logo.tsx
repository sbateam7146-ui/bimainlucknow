import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${siteConfig.brandName} home`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <span className="relative h-9 w-9">
          <Image
            src="/logo-mark.png"
            alt={`${siteConfig.brandName} logo`}
            fill
            sizes="36px"
            className="object-contain"
            priority
          />
        </span>
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
