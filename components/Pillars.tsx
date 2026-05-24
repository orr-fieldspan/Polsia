const services = [
  {
    n: "01",
    label: "Transformation",
    title: "Scoped engagements that ship.",
    body: "We scope a high-leverage AI workflow jointly with you, then a senior squad sits inside the ministry and builds it. Strategy and implementation in the same room — no separate strategy phase, no diagnostic deck without code shipped at the end of it. Sized in time and cost to the actual scope.",
    bullets: [
      "Joint scoping with the people who own the workflow",
      "Senior squad on-site, inside your perimeter",
      "Strategy paired with implementation, every cycle",
    ],
    tone: "bg-coral/15",
    dot: "bg-coral",
  },
  {
    n: "02",
    label: "Engineering",
    title: "Ongoing senior squads.",
    body: "A small senior team builds alongside yours on a monthly subscription. You pay for output — features shipped into production — not hours logged. The squad sticks around as long as it is compounding for you, and it stops when it isn't. You decide that, every cycle.",
    bullets: [
      "Monthly subscription priced to output",
      "Paid for what ships, not for time on the clock",
      "Continues by your choice, ends by your choice",
    ],
    tone: "bg-violet/15",
    dot: "bg-violet",
  },
];

export function Pillars() {
  return (
    <section id="engagement" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-3">
              How we engage
            </div>
            <h2 className="font-serif text-[34px] lg:text-[44px] leading-[1.05] tracking-tightest max-w-2xl">
              Two services. Built inside the institution.{" "}
              <span className="italic coral-text">Compounding every cycle.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[14px] text-muted leading-relaxed">
            One model, two shapes: a scoped transformation engagement, or a
            standing senior squad. Both are paid against what ships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.n}
              className={`relative rounded-3xl ${s.tone} border hairline p-7 lg:p-9 sticker`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                <span className="font-mono text-[11.5px] tracking-[0.18em] text-muted">
                  {s.n} — {s.label}
                </span>
              </div>
              <h3 className="font-serif text-[28px] lg:text-[32px] leading-tight tracking-tight mb-4">
                {s.title}
              </h3>
              <p className="text-[14.5px] text-ink/75 leading-relaxed mb-5">
                {s.body}
              </p>
              <ul className="space-y-2 pt-4 border-t hairline">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13.5px] text-ink/85"
                  >
                    <span className={`mt-1.5 h-1 w-1 rounded-full ${s.dot} shrink-0`} />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border hairline bg-card px-6 py-5 sticker flex flex-wrap items-center gap-x-8 gap-y-3">
          <div className="text-[11.5px] uppercase tracking-[0.2em] text-muted">
            Every cycle compounds
          </div>
          {[
            { label: "working capability shipped into your environment", color: "bg-coral" },
            { label: "code, weights & runbooks in your repo", color: "bg-violet" },
            { label: "your team operating at a higher level", color: "bg-honey" },
            { label: "the next workflow ships faster than the last", color: "bg-mint" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-[13px] text-ink/80"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
