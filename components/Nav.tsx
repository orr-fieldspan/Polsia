import Link from "next/link";

const links = [
  { href: "#engagement", label: "Engagement" },
  { href: "#approach", label: "Approach" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Mark />
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-tight">Fieldspan</span>
            <span className="text-[15px] font-light text-muted tracking-tight">Embedded</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-paper hover:bg-coral px-4 h-9 text-[13px] font-medium transition-colors"
        >
          Request a briefing
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="13" fill="#FFC857" />
      <circle cx="10" cy="14" r="5" fill="#FF6B4A" />
      <circle cx="17" cy="14" r="5" fill="#6E5BFF" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
