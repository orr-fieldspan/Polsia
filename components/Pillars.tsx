const pillars = [
  {
    n: "01",
    title: "Embed",
    body: "A small senior team sits inside your offices, on your network, under your security policy.",
    tone: "bg-coral/15",
    dot: "bg-coral",
  },
  {
    n: "02",
    title: "Build",
    body: "We pair with your engineers, analysts, and policy owners and build the workflow together — inside the institution.",
    tone: "bg-violet/15",
    dot: "bg-violet",
  },
  {
    n: "03",
    title: "Uplift",
    body: "Your team comes out of the engagement operating at a higher level. Practice, judgment, and tooling are transferred, not licensed.",
    tone: "bg-honey/30",
    dot: "bg-honey",
  },
  {
    n: "04",
    title: "Hand off",
    body: "Code, weights, and runbooks transfer. The capability — and the people who now run it — stay with you.",
    tone: "bg-mint/25",
    dot: "bg-mint",
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
            <h2 className="font-serif text-[34px] lg:text-[44px] leading-[1.05] tracking-tightest max-w-xl">
              Four phases. One small team. <span className="italic coral-text">A more capable institution.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <article
              key={p.n}
              className={`relative rounded-3xl ${p.tone} border hairline p-6 lg:p-7 sticker`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                <span className="font-mono text-[11.5px] tracking-[0.18em] text-muted">
                  {p.n}
                </span>
              </div>
              <h3 className="font-serif text-[26px] leading-tight tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-ink/75 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border hairline bg-card px-6 py-5 sticker flex flex-wrap items-center gap-x-8 gap-y-3">
          <div className="text-[11.5px] uppercase tracking-[0.2em] text-muted">
            What stays when we leave
          </div>
          {[
            "the working capability",
            "code, weights & runbooks",
            "the operating practice",
            "a team that can now run and extend it",
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-2 text-[13px] text-ink/80">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  ["bg-coral", "bg-violet", "bg-honey", "bg-mint"][i]
                }`}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
