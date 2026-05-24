const capabilities = [
  {
    title: "Budget & fiscal analysis",
    body:
      "Embedded engineers and economists work with budget directorates to build internal tools that turn line-item budgets, ministerial submissions, and execution data into variance analyses, scenario models, and briefing memos at the cadence the cycle actually demands.",
  },
  {
    title: "Regulatory & legislative drafting",
    body:
      "We sit with legal and policy teams to build drafting and red-line tools that produce primary and secondary legislation with citation chains back to source statutes, prior memoranda, and parliamentary record — owned by the legal department, not by us.",
  },
  {
    title: "Procurement triage",
    body:
      "Inside the tender unit, we build the review pipeline that screens tender responses against evaluation criteria, surfaces conflict-of-interest signals, and benchmarks against historical award patterns. Every recommendation is reviewable line by line by your evaluators.",
  },
  {
    title: "Inter-ministerial coordination",
    body:
      "An engagement that crosses ministries: we build the shared agent layer that turns the email-and-PDF substrate between ministries into a structured, searchable, auditable flow — without forcing a single IT migration on any of them.",
  },
  {
    title: "Citizen correspondence",
    body:
      "We work with the unit that handles citizen mail to build first-draft response systems grounded in current policy, routed for human approval, with full provenance — and a translation layer for Hebrew, Arabic, and English written for the actual register of public correspondence.",
  },
  {
    title: "Internal knowledge retrieval",
    body:
      "Decades of internal memoranda, regulations, and meeting minutes — built into a retrieval layer your staff can query in natural language, with access controls enforced at the document level by your existing identity provider.",
  },
];

export function Capabilities() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
              Where the team goes to work
            </div>
            <h2 className="font-serif text-[34px] lg:text-[48px] leading-[1.05] tracking-tightest gradient-text">
              Six places a twelve-week embedded engagement pays for itself.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] text-muted leading-relaxed">
            Each engagement begins with one workflow, one owner, and a measured
            baseline. The team is sized to the scope, not to a price book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
          {capabilities.map((c, i) => (
            <div key={c.title} className="bg-ink p-7 lg:p-8 hover:bg-elevated transition-colors group">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10 group-hover:bg-accent/40 transition-colors" />
              </div>
              <h3 className="font-serif text-[20px] leading-snug mb-3">{c.title}</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
