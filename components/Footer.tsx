export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-accent/15 blur-3xl orb" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 pt-28 lg:pt-36 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-6">
            Start the conversation
          </div>
          <h2 className="font-serif text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.02] tracking-tightest gradient-text">
            Bring the capability inside.
            <br />
            <span className="accent-gradient italic font-light">Keep the sovereignty.</span>
          </h2>
          <p className="mt-8 text-[16px] text-muted max-w-2xl mx-auto leading-relaxed">
            Briefings are scheduled directly with the founding team. Written
            responses to security and procurement questionnaires within five
            business days.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:orr@fieldspan.ai?subject=Fieldspan%20Embedded%20%E2%80%94%20briefing%20request"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 h-12 text-[14.5px] font-medium hover:bg-accent transition-colors"
            >
              orr@fieldspan.ai
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 h-12 text-[14.5px] font-medium text-white/90 hover:bg-white/[0.04] transition-colors"
            >
              Re-read the platform
            </a>
          </div>
        </div>

        <div className="mt-28 pt-10 border-t hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <div className="text-[14px] font-medium tracking-tight">
                Fieldspan <span className="text-muted font-light">Embedded</span>
              </div>
              <div className="text-[12px] text-muted">
                embedded.fieldspan.ai
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-muted">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#approach" className="hover:text-white">Approach</a>
            <a href="#sovereignty" className="hover:text-white">Sovereignty</a>
            <a href="#founders" className="hover:text-white">Founders</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="mailto:orr@fieldspan.ai" className="hover:text-white">Contact</a>
          </div>

          <div className="text-[12px] text-muted">
            © {new Date().getFullYear()} Fieldspan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fl" x1="0" y1="0" x2="28" y2="28">
          <stop offset="0%" stopColor="#5AE6FF" />
          <stop offset="100%" stopColor="#6E7BFF" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="26" height="26" rx="7" stroke="url(#fl)" strokeWidth="1.2" />
      <path d="M8 19.5V8.5h11M8 14h8" stroke="url(#fl)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="19" r="2.2" fill="url(#fl)" />
    </svg>
  );
}
