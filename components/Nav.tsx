import Link from "next/link";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#approach", label: "Approach" },
  { href: "#sovereignty", label: "Sovereignty" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-ink/70 border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo />
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-medium tracking-tight">Fieldspan</span>
            <span className="text-[15px] font-light text-muted tracking-tight">Embedded</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-muted hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border hairline bg-white/[0.03] hover:bg-white/[0.08] px-4 h-9 text-[13px] font-medium transition-colors"
        >
          Request a briefing
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="28" y2="28">
          <stop offset="0%" stopColor="#5AE6FF" />
          <stop offset="100%" stopColor="#6E7BFF" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="26" height="26" rx="7" stroke="url(#lg)" strokeWidth="1.2" />
      <path
        d="M8 19.5V8.5h11M8 14h8"
        stroke="url(#lg)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="20" cy="19" r="2.2" fill="url(#lg)" />
    </svg>
  );
}
