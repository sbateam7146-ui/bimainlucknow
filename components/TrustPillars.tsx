import { CompassIcon, MessageIcon, ScaleIcon, UsersIcon } from "./icons";

const pillars = [
  {
    icon: CompassIcon,
    title: "Personalised Guidance",
    description:
      "We take the time to understand your situation before suggesting any direction — not a one-size-fits-all pitch.",
  },
  {
    icon: ScaleIcon,
    title: "Transparent Communication",
    description:
      "Plain-language explanations of how products work, with honest answers about what they do and do not cover.",
  },
  {
    icon: MessageIcon,
    title: "Always Reachable",
    description:
      "Speak with us over phone, WhatsApp, or a simple form — whichever is most convenient for you.",
  },
  {
    icon: UsersIcon,
    title: "Long-Term Relationship",
    description:
      "We aim to support you well beyond the first policy — as your needs evolve, our guidance evolves with them.",
  },
];

export function TrustPillars() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
            <pillar.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
}
