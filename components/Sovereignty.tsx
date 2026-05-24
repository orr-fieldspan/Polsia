export function Sovereignty() {
  return (
    <section id="sovereignty" className="relative border-b hairline overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
            How the engagement protects sovereignty
          </div>
          <h2 className="font-serif text-[34px] lg:text-[48px] leading-[1.05] tracking-tightest gradient-text">
            We work inside your perimeter. Everything we build stays <span className="italic accent-gradient">with you.</span>
          </h2>
          <p className="mt-6 text-[15px] text-muted leading-relaxed">
            The Fieldspan team operates from inside the customer&rsquo;s
            environment, on customer-issued hardware, under customer security
            policy. Nothing the team builds depends on a Fieldspan-hosted
            service to function. At hand-off, the customer holds the source,
            the weights, the runbooks, and the operating practice. The
            engagement can end without the capability ending.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border hairline bg-elevated/40 p-2">
            <div className="rounded-xl bg-ink/80 border hairline">
              <div className="flex items-center gap-2 px-4 py-3 border-b hairline">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="ml-3 font-mono text-[11.5px] text-muted">engagement.terms</span>
              </div>

              <div className="p-6 lg:p-8 font-mono text-[12.5px] leading-[1.9]">
                <Row label="team location" value="on-site, inside customer offices" />
                <Row label="devices" value="customer-issued, on customer network" />
                <Row label="identity" value="customer IdP (OIDC / SAML)" />
                <Row label="models" value="open-weight, hosted by customer" />
                <Row label="source code" value={<span className="text-accent">written into customer repo</span>} />
                <Row label="model weights" value={<span className="text-accent">remain with customer</span>} />
                <Row label="data egress" value={<span className="text-accent">none</span>} />
                <Row label="post hand-off" value={<span className="text-accent">no Fieldspan access required</span>} />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: "IP", v: "Customer owns everything built" },
              { k: "Hand-off", v: "Code, weights, runbooks transferred" },
              { k: "Exit", v: "Engagement ends, capability remains" },
            ].map((b) => (
              <div key={b.k} className="rounded-xl border hairline bg-white/[0.02] p-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-1.5">
                  {b.k}
                </div>
                <div className="text-[13.5px] text-white/90">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-white/5 last:border-0 py-1">
      <span className="text-muted w-40 shrink-0">{label}</span>
      <span className="text-white/90">{value}</span>
    </div>
  );
}
