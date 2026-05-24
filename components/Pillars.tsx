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
    body: "We pair with your people and build the workflow together — on infrastructure you control.",
    tone: "bg-violet/15",
    dot: "bg-violet",
  },
  {
    n: "03",
    title: "Hand off",
    body: "Code, models, and runbooks transfer to your team. The capability runs without us.",
    tone: "bg-honey/30",
    dot: "bg-honey",
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
              Three phases. One small team. No license to renew.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <article
              key={p.n}
              className={`relative rounded-3xl ${p.tone} border hairline p-7 lg:p-8 sticker`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                <span className="font-mono text-[11.5px] tracking-[0.18em] text-muted">
                  {p.n}
                </span>
              </div>
              <h3 className="font-serif text-[28px] leading-tight tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-[14.5px] text-ink/75 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
