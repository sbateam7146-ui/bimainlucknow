export function InlineDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-navy-700/70 ${className}`}>
      Insurance is the subject matter of solicitation. For more details on risk factors, terms
      and conditions, please read the relevant sales brochure and policy wording carefully
      before concluding a purchase. This website provides general information and guidance
      only — it does not constitute financial advice, and does not guarantee any specific
      benefit, return, or claim outcome. Product features, benefits, and claim decisions are
      determined solely by the relevant insurer as per the policy terms.
    </p>
  );
}
