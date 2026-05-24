export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[360px] w-[760px] rounded-full bg-honey/40 blur-3xl orb" />
      <div className="absolute bottom-0 -left-24 h-[280px] w-[280px] rounded-full bg-coral/25 blur-3xl orb" style={{ animationDelay: "-3s" }} />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 pt-24 lg:pt-28 pb-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-5">
            Start the conversation
          </div>
          <h2 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-tightest">
            Bring a senior team inside.{" "}
            <span className="italic coral-text">Keep what they build.</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:orr@fieldspan.ai?subject=Fieldspan%20Embedded%20%E2%80%94%20briefing%20request"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-[14.5px] font-medium hover:bg-coral transition-colors"
            >
              orr@fieldspan.ai
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#engagement"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-6 h-12 text-[14.5px] font-medium hover:bg-honey/40 transition-colors"
            >
              How we engage
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <div className="text-[14px] font-semibold tracking-tight">
                Fieldspan <span className="text-muted font-light">Embedded</span>
              </div>
              <div className="text-[12px] text-muted">embedded.fieldspan.ai</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] text-muted">
            <a href="#engagement" className="hover:text-ink">Engagement</a>
            <a href="#approach" className="hover:text-ink">Approach</a>
            <a href="#founders" className="hover:text-ink">Founders</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a href="mailto:orr@fieldspan.ai" className="hover:text-ink">Contact</a>
          </div>

          <div className="text-[12px] text-muted">
            © {new Date().getFullYear()} Fieldspan
          </div>
        </div>
      </div>
    </footer>
  );
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="13" fill="#FFC857" />
      <circle cx="10" cy="14" r="5" fill="#FF6B4A" />
      <circle cx="17" cy="14" r="5" fill="#6E5BFF" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
