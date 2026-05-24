const standards = [
  "Cleared personnel",
  "ISO 27001 aligned",
  "NIST AI RMF",
  "EU AI Act ready",
  "Air-gap capable",
  "Customer-controlled infrastructure",
  "Hebrew · Arabic · English",
  "Fixed-fee engagements",
];

const outcomes = [
  {
    metric: "12 wk",
    body:
      "Typical engagement length, from kick-off to a workflow in production inside the customer's perimeter — with the customer's own team running it day-to-day.",
    attribution: "Standard engagement shape",
  },
  {
    metric: "0",
    body:
      "Long-term vendor dependencies at hand-off. All code, configuration, and model weights are transferred to the customer; the engagement ends cleanly or extends by choice.",
    attribution: "Hand-off principle",
  },
  {
    metric: "1:1",
    body:
      "Every Fieldspan engineer is paired with an engineer from the customer's team for the duration of the engagement. Knowledge transfer is the deliverable, not a side effect.",
    attribution: "Engagement model",
  },
];

export function Proof() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
          What an engagement looks like
        </div>
        <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.05] tracking-tightest gradient-text max-w-3xl">
          A short, senior engagement — built to a public-institution standard.
        </h2>

        <div className="mt-12 relative overflow-hidden border-y hairline -mx-6 lg:-mx-10">
          <div className="marquee flex gap-12 py-6 whitespace-nowrap">
            {[...standards, ...standards].map((l, i) => (
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
          {outcomes.map((t) => (
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
