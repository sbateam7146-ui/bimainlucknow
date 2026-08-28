import Link from "next/link";
import { Container } from "./Container";
import { Eyebrow } from "./Section";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { name: string; href?: string }[];
}) {
  return (
    <div className="border-b border-navy-900/10 bg-gradient-to-b from-navy-900 to-navy-950 text-ivory">
      <Container className="py-14 sm:py-20">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ivory/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.name} className="flex items-center gap-1.5">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold-400">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ivory/85">
                      {crumb.name}
                    </span>
                  )}
                  {i < breadcrumb.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-3xl sm:text-5xl font-semibold text-balance">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ivory/75">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
