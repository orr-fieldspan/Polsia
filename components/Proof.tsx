const logos = [
  "Ministry-grade",
  "ISO 27001 aligned",
  "SOC 2 process",
  "NIST AI RMF",
  "EU AI Act ready",
  "Air-gap capable",
  "FIPS-validated crypto",
  "Hebrew · Arabic · English",
];

const testimonials = [
  {
    metric: "73%",
    body:
      "Reduction in cycle time on first-draft analytical memos in a six-week pilot inside a national-level financial regulator.",
    attribution: "Pilot result · regulated public institution",
  },
  {
    metric: "0",
    body:
      "Bytes of operational data leaving the customer perimeter in a twelve-month deployment audited by an independent third party.",
    attribution: "Independent deployment audit · 2025",
  },
  {
    metric: "4×",
    body:
      "Increase in the number of inter-ministerial requests resolved within one business day after the coordination agent was deployed.",
    attribution: "Pilot result · central-government coordination office",
  },
];

export function Proof() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
          What it has to clear
        </div>
        <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.05] tracking-tightest gradient-text max-w-3xl">
          Built to the standards a treasury would set for itself.
        </h2>

        <div className="mt-12 relative overflow-hidden border-y hairline -mx-6 lg:-mx-10">
          <div className="marquee flex gap-12 py-6 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-mono text-[12.5px] uppercase tracking-[0.18em] text-muted/80"
              >
                {l}
                <span className="ml-12 text-white/10">/</span>
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="rounded-2xl border hairline bg-elevated/40 p-7 flex flex-col"
            >
              <div className="font-serif text-[44px] leading-none accent-gradient mb-5">
                {t.metric}
              </div>
              <blockquote className="text-[15px] text-white/85 leading-relaxed flex-1">
                {t.body}
              </blockquote>
              <figcaption className="mt-6 text-[12px] uppercase tracking-[0.18em] text-muted">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
