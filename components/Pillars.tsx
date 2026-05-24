const pillars = [
  {
    eyebrow: "01 — Strategy",
    title: "Map the institution before we build inside it.",
    body:
      "We start by mapping the workflows, data sources, decision rights, and audit obligations of the institution. The deliverable is a deployment plan a CIO can defend in front of a regulator — not a slide deck.",
    bullets: ["Workflow & decision-rights audit", "Data-classification mapping", "Regulatory & audit alignment"],
  },
  {
    eyebrow: "02 — Deployment",
    title: "Install AI inside the perimeter, not next to it.",
    body:
      "Models, orchestration, vector stores, and observability all deploy inside the customer's environment — on-premises, in a sovereign cloud, or in an air-gapped enclave. No outbound calls. No vendor lock-in on weights.",
    bullets: ["On-prem / sovereign cloud / air-gapped", "Open-weight models you can inspect", "Identity, logging, and SIEM integration"],
  },
  {
    eyebrow: "03 — Operations",
    title: "Run agents the way you run a department.",
    body:
      "Every agent has a defined remit, an owner, an SLA, and a paper trail. Outputs are reviewable, reversible, and tied back to the source. The platform behaves like staff — not like a chatbot bolted onto a workflow.",
    bullets: ["Role-scoped agents with named owners", "Full provenance on every output", "Human-in-the-loop by default"],
  },
];

export function Pillars() {
  return (
    <section id="platform" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">The Platform</div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1.02] tracking-tightest gradient-text">
              Three disciplines, one deployed system.
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-muted leading-relaxed">
            Fieldspan Embedded is not a model and not a chatbot. It is the system that
            turns a model into operational capacity for a public institution.
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

              <div className="mt-8 flex items-center gap-2 text-[13px] text-accent/90">
                <span>Read the brief</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

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
