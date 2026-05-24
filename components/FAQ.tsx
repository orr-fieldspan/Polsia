const faqs = [
  {
    q: "What kind of company is Fieldspan Embedded?",
    a: "A services firm. We do not sell a product. We staff small, senior engagements inside public institutions — ministries, treasuries, regulators, central-government coordination offices — and build AI capability with their teams, on their infrastructure.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Three to five senior Fieldspan people work on-site at the customer for roughly twelve weeks. They scope one workflow with the customer, pair with the customer's own engineers and analysts, build the capability inside the customer's environment, and transfer it at the end. There is no platform license. There is no per-seat fee.",
  },
  {
    q: "How is this different from a consulting firm or systems integrator?",
    a: "Three differences. First, the people on the engagement are senior practitioners — the founders are on the engagement, not selling the engagement. Second, we ship working systems, not slide decks. Third, the IP belongs to the customer the moment it is written: source, weights, runbooks. We are not building a product through your project.",
  },
  {
    q: "Where do your people and our data actually sit?",
    a: "Our people sit at desks inside your offices, on devices and networks you control, under your security policy. Your data does not leave your perimeter; it is not used to train anything for anyone else; it is not visible to Fieldspan after hand-off.",
  },
  {
    q: "How is the engagement priced?",
    a: "Fixed fee per engagement, scoped to one workflow and one outcome. No per-token billing, no per-seat creep, no surprise foreign-currency invoices mid-fiscal-year. If you want a second workflow, that is a second engagement — also fixed-fee.",
  },
  {
    q: "What happens after the engagement ends?",
    a: "The capability runs without us. Your team holds the source, the weights, the runbooks, and the operating practice. You can extend it, audit it, and operate it without a continued contract. If you want us back for the next workflow, that is a new engagement on a new statement of work.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
            Questions a CIO asks first
          </div>
          <h2 className="font-serif text-[34px] lg:text-[44px] leading-[1.05] tracking-tightest gradient-text">
            The short version, on the record.
          </h2>
          <p className="mt-6 text-[15px] text-muted leading-relaxed">
            If your question is not here, ask it in the briefing. Direct answers
            in writing, before anyone signs anything.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-[19px] lg:text-[21px] leading-snug tracking-tight text-white/95 group-hover:text-white">
                  {f.q}
                </h3>
                <span className="chev mt-2 inline-flex h-7 w-7 items-center justify-center rounded-full border hairline text-muted group-hover:text-accent group-hover:border-accent/50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
