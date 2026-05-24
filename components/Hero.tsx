export function Hero() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <Blobs />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="inline-flex items-center gap-2.5 mb-8 rounded-full bg-card hairline border px-3.5 py-1.5 sticker">
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-coral pulse-ring" />
            <span className="relative h-2 w-2 rounded-full bg-coral" />
          </span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
            A services firm — not a product
          </span>
        </div>

        <h1 className="font-serif tracking-tightest text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.98] max-w-4xl">
          Most public-sector AI is procured.{" "}
          <span className="italic coral-text squiggle">Most of it never lands.</span>
        </h1>

        <p className="mt-8 max-w-xl text-[16.5px] leading-relaxed text-muted">
          The transformation is signed for in procurement, but it has to be
          built inside the institution. That gap is where most public-sector
          AI quietly fails. Fieldspan Embedded sends a small senior team
          inside the ministry to close it — building the capability with
          your people, and leaving them operating at a higher level than
          they started.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 h-11 text-[14px] font-medium hover:bg-coral transition-colors"
          >
            Request a briefing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#engagement"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-5 h-11 text-[14px] font-medium hover:bg-honey/40 transition-colors"
          >
            How we engage
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-6">
          {[
            { k: "3–5", v: "senior people per engagement" },
            { k: "12 wk", v: "typical length, kickoff to live" },
            { k: "100%", v: "code and IP owned by the customer" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-4xl tracking-tight">{s.k}</div>
              <div className="mt-1 text-[12.5px] text-muted leading-snug max-w-[14ch]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blobs() {
  return (
    <>
      <div className="absolute -top-24 -right-16 h-[420px] w-[420px] rounded-full bg-honey/70 blur-3xl orb" />
      <div
        className="absolute top-32 -left-32 h-[360px] w-[360px] rounded-full bg-coral/40 blur-3xl orb"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-violet/25 blur-3xl orb"
        style={{ animationDelay: "-5s" }}
      />
      <div className="absolute top-10 right-12 hidden md:block wobble">
        <Sticker label="public sector" tone="coral" rotate={-6} />
      </div>
      <div className="absolute bottom-16 left-8 hidden md:block wobble" style={{ animationDelay: "-2s" }}>
        <Sticker label="ships in 12 weeks" tone="violet" rotate={4} />
      </div>
    </>
  );
}

function Sticker({ label, tone, rotate }: { label: string; tone: "coral" | "violet"; rotate: number }) {
  const bg = tone === "coral" ? "bg-coral text-paper" : "bg-violet text-paper";
  return (
    <span
      className={`${bg} rounded-full px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.18em] sticker inline-block`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {label}
    </span>
  );
}
