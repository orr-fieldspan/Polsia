export function Hero() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <Blobs />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-7 rounded-full bg-card hairline border px-3.5 py-1.5 sticker">
              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-coral pulse-ring" />
                <span className="relative h-2 w-2 rounded-full bg-coral" />
              </span>
              <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                Top-tier transformation, embedded
              </span>
            </div>

            <h1 className="font-serif tracking-tightest text-[44px] sm:text-[58px] lg:text-[76px] leading-[0.98]">
              Modernize the state.{" "}
              <span className="italic coral-text squiggle">From inside.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[16.5px] leading-[1.65] text-muted">
              Top-tier AI transformation know-how — the kind a ministry
              cannot hire onto its own payroll — brought inside your offices
              as a partner. Senior practitioners from frontier-tech and
              hyper-growth operations, paired with your team, shipping
              cycle after cycle.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
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
              <span className="text-[12px] text-muted ml-1">
                Briefings booked directly with the founders.
              </span>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-4 max-w-xl">
              {[
                { k: "3–5", v: "senior people on the ground" },
                { k: "Monthly", v: "ship cycle, paid against output" },
                { k: "Day one", v: "code & weights live in your repo" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-serif text-[28px] leading-none tracking-tight">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-[12px] text-muted leading-snug">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ShipCard />
          </div>
        </div>

        <div className="mt-20 hidden lg:flex items-center gap-2 text-[11.5px] uppercase tracking-[0.22em] text-muted">
          <span className="h-px w-10 bg-ink/15" />
          Scroll to the engagement
        </div>
      </div>
    </section>
  );
}

function ShipCard() {
  const items = [
    { msg: "feat: budget-variance agent", pair: "squad + ministry team", age: "2d", done: true },
    { msg: "feat: regulatory citation index", pair: "squad + ministry team", age: "5d", done: true },
    { msg: "feat: cross-ministry coordinator", pair: "ministry team", age: "9d", done: true, solo: true },
  ];
  return (
    <div
      className="relative rounded-3xl bg-card border hairline sticker p-1.5"
      style={{ transform: "rotate(-0.6deg)" }}
    >
      <div className="rounded-2xl bg-paper/60 border hairline">
        <div className="flex items-center gap-2 px-4 py-3 border-b hairline">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-honey" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="ml-3 font-mono text-[11.5px] tracking-[0.16em] text-muted">
            ministry / ai · ship log
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] text-mint">
            <span className="relative inline-flex">
              <span className="absolute inset-0 rounded-full bg-mint pulse-ring" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            live
          </span>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-baseline justify-between mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              this cycle
            </span>
            <span className="font-mono text-[11px] text-ink/70">+3 shipped</span>
          </div>
          <ul className="space-y-3">
            {items.map((it) => (
              <li key={it.msg} className="flex items-start gap-3">
                <span
                  className={`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                    it.solo ? "bg-honey text-ink" : "bg-coral text-paper"
                  }`}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                    <path d="M1.5 4.5l1.5 1.5L6.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[12.5px] text-ink/90 truncate">
                    {it.msg}
                  </div>
                  <div className="font-mono text-[10.5px] text-muted mt-0.5">
                    {it.pair} · {it.age}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t hairline flex items-center justify-between text-[11.5px]">
            <span className="font-mono uppercase tracking-[0.18em] text-muted">
              paid against output
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              cycle on track
            </span>
          </div>
        </div>
      </div>

      <span className="absolute -top-3 -right-3 wobble">
        <span
          className="inline-block rounded-full bg-violet text-paper px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] sticker"
          style={{ transform: "rotate(6deg)" }}
        >
          your repo
        </span>
      </span>
    </div>
  );
}

function Blobs() {
  return (
    <>
      <div className="absolute -top-24 -right-16 h-[460px] w-[460px] rounded-full bg-honey/70 blur-3xl orb" />
      <div
        className="absolute top-32 -left-32 h-[360px] w-[360px] rounded-full bg-coral/40 blur-3xl orb"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-violet/25 blur-3xl orb"
        style={{ animationDelay: "-5s" }}
      />
    </>
  );
}
