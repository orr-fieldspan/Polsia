const capabilities = [
  {
    title: "Budget & fiscal analysis",
    body:
      "Agents that ingest line-item budgets, ministerial submissions, and historical execution data, then produce variance analyses, scenario models, and briefing memos at the cadence of the budget cycle.",
  },
  {
    title: "Regulatory & legislative drafting",
    body:
      "Drafting and red-lining support for primary and secondary legislation, with citation chains back to source statutes, prior memoranda, and parliamentary record.",
  },
  {
    title: "Procurement triage",
    body:
      "Automated review of tender responses against evaluation criteria, conflict-of-interest checks, and historical award patterns — with every recommendation reviewable line by line.",
  },
  {
    title: "Inter-ministerial coordination",
    body:
      "A shared agent layer that turns the email-and-PDF substrate between ministries into a structured, searchable, auditable flow without forcing a single IT migration.",
  },
  {
    title: "Citizen correspondence",
    body:
      "First-draft responses to citizen inquiries grounded in current policy, routed for human approval, with full provenance and a translation layer for Hebrew, Arabic, and English.",
  },
  {
    title: "Internal knowledge retrieval",
    body:
      "A retrieval layer over decades of internal memoranda, regulations, and meeting minutes — searchable in natural language, with access controls enforced at the document level.",
  },
];

export function Capabilities() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
              Where it goes to work
            </div>
            <h2 className="font-serif text-[34px] lg:text-[48px] leading-[1.05] tracking-tightest gradient-text">
              Six places the platform pays for itself in a fiscal quarter.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] text-muted leading-relaxed">
            Each deployment begins with one workflow, one owner, and a measured
            baseline. Capability compounds from there.
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
