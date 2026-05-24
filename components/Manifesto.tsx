export function Manifesto() {
  return (
    <section id="approach" className="relative border-b hairline overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl orb" />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-28 lg:py-40">
        <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-10">
          The thesis
        </div>

        <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[68px] leading-[1.05] tracking-tightest max-w-5xl">
          <span className="gradient-text">
            You cannot buy a transformation. You have to{" "}
          </span>
          <span className="accent-gradient italic font-light">staff one.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-5xl">
          <p className="text-[16px] lg:text-[17px] leading-[1.7] text-white/85">
            The first wave of public-sector AI was procured. Ministries signed
            license agreements with vendors and waited for capability to arrive
            through an API. Most of it did not arrive — because the hard part
            was never the model. The hard part was deciding which workflow to
            change, who owns the new one, how it interacts with the regulation
            that governs it, and how to keep the institution running while the
            change is made.
          </p>
          <p className="text-[16px] lg:text-[17px] leading-[1.7] text-muted">
            That work is done by people, inside the building, alongside the
            people who already do the work. Fieldspan Embedded sends those
            people. We are not a vendor calling from outside the perimeter.
            We are a small team that sits at a desk in your ministry until the
            capability is built, transferred, and running — and then we go
            home.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              t: "Buying a product",
              s: "A license, a portal, a vendor relationship. The capability lives at the vendor; you rent access. Change ends when the contract ends.",
              tone: "muted",
            },
            {
              t: "Embedding a team",
              s: "Senior people on the ground. The capability is built inside the institution and stays there. Change persists because your people now own it.",
              tone: "accent",
            },
            {
              t: "What changes for the CIO",
              s: "You stop managing a vendor and start staffing a project. The relationship is a contract for outcomes, not a subscription for software.",
              tone: "muted",
            },
          ].map((c) => (
            <div
              key={c.t}
              className={`rounded-xl border p-6 ${
                c.tone === "accent"
                  ? "border-accent/40 bg-accent/[0.04]"
                  : "hairline bg-white/[0.02]"
              }`}
            >
              <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-3">
                {c.t}
              </div>
              <p className="text-[14px] text-white/80 leading-relaxed">{c.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
