import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Error 404</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-900">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-md text-base text-navy-700/75">
        The page you&apos;re looking for may have moved. Try heading back to the homepage, or get
        in touch if you need help finding something.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact Us
        </ButtonLink>
      </div>
    </Container>
  );
}
