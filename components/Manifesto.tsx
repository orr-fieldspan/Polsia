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
            The first generation of public-sector AI was procured. The next
            generation will be{" "}
          </span>
          <span className="accent-gradient italic font-light">embedded.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-5xl">
          <p className="text-[16px] lg:text-[17px] leading-[1.7] text-white/85">
            Most ministries today consume AI the way they consume electricity:
            from a vendor, over a wire, on a meter, with terms of service they
            did not write. That works for a search box. It does not work for a
            treasury, a tax authority, or a regulator that must answer to its
            citizens for every decision a system makes on their behalf.
          </p>
          <p className="text-[16px] lg:text-[17px] leading-[1.7] text-muted">
            Fieldspan Embedded inverts the relationship. The model runs in your
            data center. The agents act under your policy. The audit log belongs
            to you. The capability does not disappear when a vendor changes its
            pricing, its country of incorporation, or its mind. Sovereignty is
            not a feature we add — it is the architecture.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              t: "Procured AI",
              s: "API key. Vendor cloud. Terms of service. Data leaves the building. Capability is rented.",
              tone: "muted",
            },
            {
              t: "Embedded AI",
              s: "Deployed inside your perimeter. Weights you can inspect. Policy you author. Capability is owned.",
              tone: "accent",
            },
            {
              t: "What changes for the CIO",
              s: "You stop buying outputs and start governing a system. The procurement question becomes an operating question.",
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
