export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductInfo {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  overview: string[];
  suitableFor: string[];
  considerations: string[];
  faqs: ProductFaq[];
}

export const products: ProductInfo[] = [
  {
    slug: "life-insurance",
    name: "Life Insurance",
    shortName: "Life",
    tagline: "Long-term financial protection for the people who depend on you.",
    summary:
      "Life insurance is designed to provide financial protection and long-term planning support for your family in your absence.",
    overview: [
      "Life insurance is a long-term financial protection tool. In exchange for regular premiums, an insurer agrees to pay a sum to your chosen nominee if something happens to you during the policy term.",
      "Beyond pure protection, some life insurance plans are also structured around long-term savings or family financial planning goals. The right structure depends on your personal circumstances, income, and responsibilities.",
      "Because life insurance plans vary widely between insurers, the specific benefits, charges, and terms of any plan are governed entirely by that insurer's policy document — not by this website.",
    ],
    suitableFor: [
      "Individuals with dependents (spouse, children, or parents) who rely on their income",
      "People with long-term financial responsibilities, such as a home loan",
      "Anyone building a long-term financial safety net for their family",
    ],
    considerations: [
      "Coverage amount should reflect your income, liabilities, and family's future needs",
      "Premiums, exclusions, and benefits differ significantly between insurers and plans",
      "Read the sales brochure and policy wording carefully before purchasing any plan",
      "Insurance is the subject matter of solicitation — this page does not guarantee any specific benefit or return",
    ],
    faqs: [
      {
        question: "Who should consider life insurance?",
        answer:
          "Anyone whose family or dependents would face financial hardship in their absence may want to consider life insurance as part of their financial planning.",
      },
      {
        question: "Does life insurance guarantee a fixed return?",
        answer:
          "Benefits, returns, and guarantees (if any) depend entirely on the specific plan and insurer you choose. We do not promise or imply any specific return on this website.",
      },
      {
        question: "Can I compare multiple life insurance options?",
        answer:
          "Yes. Part of the guidance we offer is helping you understand and compare different types of plans so you can make an informed decision.",
      },
    ],
  },
  {
    slug: "term-insurance",
    name: "Term Insurance",
    shortName: "Term",
    tagline: "Straightforward income replacement for your family, at an affordable premium.",
    summary:
      "Term insurance is a simple, pure-protection form of life insurance focused on income replacement for your family.",
    overview: [
      "Term insurance is generally considered the simplest and most affordable form of life insurance. It provides a pre-agreed sum to your nominee if you pass away during the policy term, with no maturity payout if you outlive the term (unless a specific return-of-premium variant is chosen).",
      "Because it is designed purely for protection, term insurance is often used as a way to replace lost income and help a family maintain financial stability and continue long-term plans such as a child's education or a home loan.",
      "Exact eligibility, premium, and claim conditions vary by insurer and are set out in that insurer's policy document.",
    ],
    suitableFor: [
      "Primary income earners supporting a family",
      "Individuals seeking high protection cover at a relatively lower premium",
      "People wanting to secure loan repayments or future family expenses",
    ],
    considerations: [
      "Term insurance is typically pure protection — it does not usually build a cash/savings value",
      "Premiums are generally influenced by age, health, and lifestyle at the time of purchase",
      "Disclose your health and lifestyle information accurately — inaccurate disclosure can affect a future claim",
      "Insurance is the subject matter of solicitation — read the policy document carefully",
    ],
    faqs: [
      {
        question: "What is term insurance?",
        answer:
          "Term insurance is a type of life insurance that provides financial protection to your family for a fixed period (the 'term'), in exchange for a premium, without an investment component in the basic version.",
      },
      {
        question: "What is the difference between term insurance and other life insurance?",
        answer:
          "Term insurance is typically pure protection at a lower premium, while other forms of life insurance may combine protection with a savings or investment element, usually at a higher premium. The right choice depends on your goals.",
      },
      {
        question: "How much term cover should I consider?",
        answer:
          "This depends on your income, outstanding loans, dependents, and future goals. We can help you think through this during a free consultation rather than guessing a generic number.",
      },
    ],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    shortName: "Health",
    tagline: "Help protect your family's finances against unexpected medical expenses.",
    summary:
      "Health insurance helps provide financial protection against hospitalisation and related medical expenses for you and your family.",
    overview: [
      "Health insurance is designed to help reduce the financial burden of medical treatment, hospitalisation, and related healthcare expenses, subject to the terms, limits, and exclusions of the specific policy.",
      "Plans can typically be taken individually or as a family floater covering multiple family members under a single sum insured, depending on what the insurer offers.",
      "Coverage details — including waiting periods, room-rent limits, exclusions, and network hospitals — vary by insurer and plan, and are governed by that insurer's policy wording.",
    ],
    suitableFor: [
      "Individuals and families without adequate hospitalisation coverage",
      "Growing families planning for children's future healthcare needs",
      "Anyone wanting to reduce reliance on employer-provided health cover alone",
    ],
    considerations: [
      "Pre-existing conditions are usually subject to a waiting period defined by the insurer",
      "Sum insured should be assessed against rising healthcare costs and family size",
      "Cashless treatment is generally available only at the insurer's network hospitals",
      "Read the policy wording carefully for exclusions, sub-limits, and claim conditions",
    ],
    faqs: [
      {
        question: "What is health insurance?",
        answer:
          "Health insurance is a policy that helps cover eligible hospitalisation and related medical expenses in exchange for a premium, subject to the policy's terms and conditions.",
      },
      {
        question: "Can I insure my whole family under one plan?",
        answer:
          "Many insurers offer family floater plans that cover multiple members under a shared sum insured. Whether this suits you depends on your family's size, ages, and health profile — we can help you evaluate this.",
      },
      {
        question: "Are pre-existing conditions covered immediately?",
        answer:
          "Usually not. Most insurers apply a waiting period for pre-existing conditions, as defined in the specific policy document. Please check the exact terms before purchase.",
      },
    ],
  },
  {
    slug: "motor-insurance",
    name: "Motor Insurance",
    shortName: "Motor",
    tagline: "Protection for your vehicle and the liability that comes with driving it.",
    summary:
      "Motor insurance helps protect you financially against vehicle damage and third-party liability while driving.",
    overview: [
      "Motor insurance in India is generally available as third-party liability cover (which is mandatory by law) or comprehensive cover, which can additionally protect your own vehicle against damage, theft, and certain other risks, depending on the policy.",
      "Comprehensive plans may also allow optional add-ons (such as zero-depreciation cover), where offered by the insurer, to broaden protection.",
      "Exact coverage, exclusions, and claim procedures are defined by the issuing insurer's policy wording and applicable motor insurance regulations.",
    ],
    suitableFor: [
      "Car and two-wheeler owners seeking legally mandated third-party cover",
      "Vehicle owners wanting broader protection through comprehensive cover",
      "Anyone renewing an existing motor policy and comparing options",
    ],
    considerations: [
      "Third-party motor insurance is mandatory under Indian law for vehicles used on public roads",
      "Comprehensive cover generally costs more but can offer wider protection where applicable",
      "No-claim bonus and add-on availability vary by insurer",
      "Read the policy schedule carefully to understand what is and is not covered",
    ],
    faqs: [
      {
        question: "Is motor insurance mandatory in India?",
        answer:
          "Yes. At minimum, third-party liability motor insurance is legally required for vehicles used on public roads in India.",
      },
      {
        question: "What is the difference between third-party and comprehensive cover?",
        answer:
          "Third-party cover addresses liability towards others involved in an accident you cause. Comprehensive cover can additionally protect your own vehicle, where applicable under the policy terms.",
      },
      {
        question: "Can I switch insurers when renewing my motor policy?",
        answer:
          "Generally yes, subject to the process and requirements of the new insurer. We can help you understand and compare your renewal options.",
      },
    ],
  },
  {
    slug: "other-insurance",
    name: "Other Insurance",
    shortName: "Other",
    tagline: "Additional protection options for your home, travel, and business needs.",
    summary:
      "Beyond life, health, and motor insurance, several other types of protection may be relevant depending on your situation.",
    overview: [
      "Insurance needs go beyond the most common categories. Depending on your circumstances, options such as home insurance, travel insurance, personal accident cover, or business/commercial insurance may also be worth considering.",
      "This section will be expanded over time as specific product details are finalised. If you have a specific protection need that isn't listed on this site yet, please reach out and we will guide you individually.",
    ],
    suitableFor: [
      "Homeowners seeking protection against fire, theft, or natural calamities",
      "Frequent travellers wanting protection during domestic or international trips",
      "Business owners exploring commercial or liability protection",
    ],
    considerations: [
      "Product availability depends on the specific insurers we are able to guide you toward",
      "Terms, coverage, and exclusions are always set by the issuing insurer's policy document",
      "Speak with an advisor to understand which additional covers may be relevant to you",
    ],
    faqs: [
      {
        question: "What other types of insurance are commonly available?",
        answer:
          "Common examples include home insurance, travel insurance, personal accident cover, and business/commercial insurance, though availability depends on the insurers we work with.",
      },
      {
        question: "Can you help me even if my need isn't listed here?",
        answer:
          "Yes — please contact us and describe your requirement. We will guide you honestly on whether we can assist and what the options may look like.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductInfo | undefined {
  return products.find((p) => p.slug === slug);
}
