export function Sovereignty() {
  return (
    <section id="sovereignty" className="relative border-b hairline overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
            Sovereignty by architecture
          </div>
          <h2 className="font-serif text-[34px] lg:text-[48px] leading-[1.05] tracking-tightest gradient-text">
            Designed so the answer to <span className="italic accent-gradient">&ldquo;where is our data?&rdquo;</span> is always: here.
          </h2>
          <p className="mt-6 text-[15px] text-muted leading-relaxed">
            Fieldspan Embedded does not depend on a foreign-cloud API to function.
            It runs entirely on infrastructure you control, with weights you can
            inspect, in a network topology you can certify. Nothing about the
            deployment requires trust in us once it is installed.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border hairline bg-elevated/40 p-2">
            <div className="rounded-xl bg-ink/80 border hairline">
              <div className="flex items-center gap-2 px-4 py-3 border-b hairline">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="ml-3 font-mono text-[11.5px] text-muted">deployment.topology</span>
              </div>

              <div className="p-6 lg:p-8 font-mono text-[12.5px] leading-[1.9]">
                <Row label="environment" value="customer-controlled" />
                <Row label="network" value="air-gapped · sovereign cloud · on-prem" />
                <Row label="identity" value="customer IdP (OIDC / SAML)" />
                <Row label="models" value="open-weight, locally hosted" />
                <Row label="vector store" value="local; encryption at rest" />
                <Row label="logs · audit" value="written to customer SIEM" />
                <Row label="outbound calls" value={<span className="text-accent">none required</span>} />
                <Row label="vendor access" value={<span className="text-accent">none after install</span>} />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: "Hosting", v: "Your data center" },
              { k: "Updates", v: "Signed bundles, your approval" },
              { k: "Exit", v: "Take weights and code with you" },
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
