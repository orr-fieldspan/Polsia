const pillars = [
  {
    eyebrow: "01 — Embed",
    title: "A senior team sits inside your institution.",
    body:
      "Three to five operators and engineers — the same people who scoped the engagement — work from inside your offices, on your network, under your security policy. No outsourced backbench. No staff augmentation. The people you meet are the people who do the work.",
    bullets: ["Senior practitioners only", "Working from inside the perimeter", "Cleared, badged, and on-site"],
  },
  {
    eyebrow: "02 — Build",
    title: "We build the workflow with your people, not for them.",
    body:
      "Every engagement pairs the Fieldspan team with a small group of your analysts, engineers, and policy owners. They learn what we know about deploying AI inside government; we learn what they know about the institution. The capability that ships is built jointly, owned jointly, and runs without us.",
    bullets: ["Paired with your internal team", "Built on infrastructure you control", "Operating practice transferred, not licensed"],
  },
  {
    eyebrow: "03 — Hand off",
    title: "We finish the engagement and we leave.",
    body:
      "At the end of the engagement, the code, the models, the documentation, and the operating runbook live with your team. Your people can extend the system, audit it, and run it without us. If you want to keep working together on the next workflow, we will. If you want us gone, you are not stuck.",
    bullets: ["Full source and weights transferred", "Runbooks and on-call written for your team", "Reversible — no captive dependencies"],
  },
];

export function Pillars() {
  return (
    <section id="engagement" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">How we engage</div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1.02] tracking-tightest gradient-text">
              Three phases. One small team. No software to license.
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-muted leading-relaxed">
            Fieldspan Embedded is a services engagement, not a SaaS contract.
            The deliverable is operating capability inside your institution —
            and a team of your own people who can run it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border hairline">
          {pillars.map((p, i) => (
            <article
              key={p.eyebrow}
              className="group relative bg-ink p-8 lg:p-10 hover:bg-elevated transition-colors"
            >
              <div className="text-[11.5px] uppercase tracking-[0.22em] text-accent/80 mb-6">
                {p.eyebrow}
              </div>
              <h3 className="font-serif text-[26px] lg:text-[30px] leading-[1.1] tracking-tight mb-5">
                {p.title}
              </h3>
              <p className="text-[14.5px] text-muted leading-relaxed mb-6">{p.body}</p>
              <ul className="space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: i === 0 ? "linear-gradient(90deg,transparent,rgba(90,230,255,0.5),transparent)" : "transparent",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
