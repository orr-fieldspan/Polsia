export function Hero() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <BackgroundField />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 pt-24 pb-28 lg:pt-36 lg:pb-40">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-accent pulse-ring" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[12.5px] uppercase tracking-[0.22em] text-muted">
            A services firm, not a product
          </span>
        </div>

        <h1 className="font-serif tracking-tightest text-[44px] sm:text-[60px] lg:text-[84px] leading-[0.95] max-w-5xl">
          <span className="gradient-text">We embed senior teams</span>
          <br />
          <span className="gradient-text">inside the institutions</span>
          <br />
          <span className="accent-gradient italic font-light">that run a nation.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted">
          Fieldspan Embedded is a small AI engagement firm. We send a senior
          team of operators and engineers to work inside your ministry for a
          defined period, build the AI capability the institution actually
          needs, and leave it owned by your people. Not a license. Not a
          platform. A team.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 h-11 text-[14px] font-medium hover:bg-accent transition-colors"
          >
            Request a briefing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#engagement"
            className="inline-flex items-center gap-2 rounded-full border hairline px-5 h-11 text-[14px] font-medium text-white/90 hover:bg-white/[0.04] transition-colors"
          >
            How we engage
          </a>
          <span className="text-[12.5px] text-muted ml-2">
            Small team. Short engagement. Capability that stays with you.
          </span>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border hairline">
          {[
            { k: "3–5", v: "Senior people on the ground per engagement" },
            { k: "12 wk", v: "Typical engagement length" },
            { k: "100%", v: "Code, models, and IP retained by the customer" },
            { k: "0", v: "Long-term vendor dependency at hand-off" },
          ].map((s) => (
            <div key={s.v} className="bg-ink p-6">
              <div className="font-serif text-3xl tracking-tight">{s.k}</div>
              <div className="mt-1 text-[12.5px] text-muted leading-snug">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundField() {
  return (
    <>
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl orb" />
      <div
        className="absolute top-40 -left-32 h-[420px] w-[420px] rounded-full blur-3xl orb"
        style={{ background: "rgba(110,123,255,0.22)", animationDelay: "-3s" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </>
  );
}
