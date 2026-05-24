const founders = [
  {
    name: "Alon Barel",
    role: "Co-founder & CEO",
    bio: "Built and ran the global installer network at SolarEdge across dozens of countries — a decade of making complex operational systems actually work outside the slide.",
    pedigree: "Ex-SolarEdge",
    aside: "Volunteers with the עיר-מדינה (Ir-Medina) civic initiative.",
    linkedin: "https://www.linkedin.com/in/alonbarel",
    photo: "/founders/alon.png",
    tone: "bg-coral/20",
    ring: "ring-coral/40",
  },
  {
    name: "Orr Barkat",
    role: "Co-founder & CTO",
    bio: "Spent 12 months on AI transformation at Google. The last 6 months advising on AI transformation externally.",
    pedigree: "Ex-Google · AI transformation",
    aside: null,
    linkedin: "https://www.linkedin.com/in/orr-barkat-0a7928a2",
    photo: "/founders/orr.png",
    tone: "bg-violet/20",
    ring: "ring-violet/40",
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-3">
              Who is on the ground
            </div>
            <h2 className="font-serif text-[32px] lg:text-[42px] leading-[1.05] tracking-tightest max-w-xl">
              Founder-led. Every engagement.
            </h2>
          </div>
          <p className="max-w-xs text-[14px] text-muted leading-relaxed">
            The people you meet in the briefing are the people on the ground in
            the engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {founders.map((f) => (
            <article
              key={f.name}
              className={`rounded-3xl ${f.tone} border hairline p-7 lg:p-8 sticker flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.photo}
                  alt={`Portrait of ${f.name}`}
                  width={56}
                  height={56}
                  className={`h-14 w-14 rounded-full object-cover bg-card ring-2 ${f.ring}`}
                />
                <div>
                  <div className="font-serif text-[22px] leading-tight tracking-tight">
                    {f.name}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-muted mt-1">
                    {f.role}
                  </div>
                </div>
              </div>

              <p className="text-[14.5px] text-ink/80 leading-relaxed">{f.bio}</p>

              {f.aside && (
                <p className="mt-4 text-[13px] text-ink/70 leading-relaxed">
                  <span className="font-medium">Also:</span> {f.aside}
                </p>
              )}

              <div className="mt-6 pt-5 border-t hairline flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {f.pedigree}
                </span>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] text-muted hover:text-coral transition-colors"
                >
                  LinkedIn
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M3 9l6-6M4.5 3H9v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
