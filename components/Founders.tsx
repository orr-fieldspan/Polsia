const founders = [
  {
    name: "Alon Barel",
    role: "Co-founder & CEO",
    bio: "Built and ran the global installer network at SolarEdge — coordinating partners and operations across dozens of countries through every stage of the company's growth. Spent a decade learning, at scale, what it takes to make a complex operational system actually work outside a slide.",
    pedigree: "Ex-SolarEdge · global operations",
    linkedin: "https://www.linkedin.com/in/alonbarel",
    initials: "AB",
  },
  {
    name: "Orr Barkat",
    role: "Co-founder & CTO",
    bio: "Built growth and user-acquisition infrastructure at Google, where the systems shipped had to be correct at planetary scale and accountable to internal audit. Brings the discipline of large-scale infrastructure engineering to applied AI inside institutions that cannot tolerate vague answers.",
    pedigree: "Ex-Google · applied AI & growth infra",
    linkedin: "https://www.linkedin.com/in/orr-barkat-0a7928a2",
    initials: "OB",
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative border-b hairline overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl orb"
        style={{ background: "rgba(110,123,255,0.18)" }}
      />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
              Who is behind it
            </div>
            <h2 className="font-serif text-[34px] lg:text-[48px] leading-[1.05] tracking-tightest gradient-text">
              Operators who have run systems that <span className="italic accent-gradient">had to work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] text-muted leading-relaxed">
            Fieldspan is founder-led. Every engagement is scoped, signed, and
            delivered by the people on this page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
          {founders.map((f) => (
            <article key={f.name} className="bg-ink p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-5 mb-7">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
                  <div className="relative h-14 w-14 rounded-full border hairline bg-elevated flex items-center justify-center font-serif text-[18px] text-white/90">
                    {f.initials}
                  </div>
                </div>
                <div>
                  <div className="font-serif text-[22px] leading-tight tracking-tight">
                    {f.name}
                  </div>
                  <div className="text-[12.5px] uppercase tracking-[0.18em] text-muted mt-1">
                    {f.role}
                  </div>
                </div>
              </div>

              <p className="text-[14.5px] text-white/80 leading-relaxed mb-7 flex-1">
                {f.bio}
              </p>

              <div className="flex items-center justify-between pt-5 border-t hairline">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-accent/80">
                  {f.pedigree}
                </span>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] text-muted hover:text-accent transition-colors"
                >
                  LinkedIn
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9l6-6M4.5 3H9v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-[14px] text-muted leading-relaxed">
          The founding team operates from Tel Aviv. Briefings with public-sector
          counterparts are conducted in English or Hebrew, in person or over a
          secure channel of the customer&rsquo;s choosing.
        </p>
      </div>
    </section>
  );
}
