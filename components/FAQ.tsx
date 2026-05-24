const faqs = [
  {
    q: "How is this different from a consultancy?",
    a: "The founders are on the engagement, not selling it. We ship working systems, not decks. And the IP belongs to you the moment it is written — source, weights, runbooks.",
  },
  {
    q: "How is it priced?",
    a: "Pricing is shared in the briefing once we have scoped the engagement together. What we never charge for: tokens, per-seat licenses, or platform subscriptions. You pay for a team and an outcome.",
  },
  {
    q: "Where do our people and our data sit?",
    a: "Our people sit in your offices, on your devices, under your policy. Your data never leaves your perimeter, and it is not used to train anything for anyone else.",
  },
  {
    q: "What happens after the engagement ends?",
    a: "The capability keeps running without us — and so does your team. They hold the code, weights, and runbooks, and they have spent the engagement learning to operate, extend, and audit the system on their own. You end up with both a working capability and people who are more capable than they were.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-3">
            Quick answers
          </div>
          <h2 className="font-serif text-[32px] lg:text-[40px] leading-[1.05] tracking-tightest">
            Questions a CIO asks <span className="italic coral-text">first.</span>
          </h2>
        </div>

        <div className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-[19px] lg:text-[21px] leading-snug tracking-tight">
                  {f.q}
                </h3>
                <span className="chev mt-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border hairline text-muted group-hover:text-coral group-hover:border-coral/50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
