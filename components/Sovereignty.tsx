const terms: { label: string; value: React.ReactNode }[] = [
  { label: "Where we work", value: "Inside your offices, on your network" },
  { label: "Devices", value: "Customer-issued, on customer policy" },
  { label: "Source code", value: <span className="text-coral">written into your repo</span> },
  { label: "Model weights", value: <span className="text-coral">stay with you</span> },
  { label: "Data egress", value: <span className="text-coral">none</span> },
  { label: "After hand-off", value: <span className="text-coral">no Fieldspan access required</span> },
];

export function Sovereignty() {
  return (
    <section id="sovereignty" className="relative border-b hairline overflow-hidden">
      <div className="absolute -top-16 -left-16 h-[300px] w-[300px] rounded-full bg-mint/30 blur-3xl orb" />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-3">
            Sovereignty by engagement
          </div>
          <h2 className="font-serif text-[32px] lg:text-[42px] leading-[1.05] tracking-tightest">
            We work inside your perimeter. Everything we build <span className="italic coral-text">stays with you.</span>
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card border hairline p-6 lg:p-8 sticker">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-honey" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              <span className="ml-3 font-mono text-[11px] tracking-[0.18em] text-muted">
                engagement.terms
              </span>
            </div>
            <dl className="divide-y divide-ink/[0.08]">
              {terms.map((t) => (
                <div key={t.label} className="flex items-baseline gap-4 py-2.5 font-mono text-[12.5px]">
                  <dt className="text-muted w-44 shrink-0">{t.label}</dt>
                  <dd className="text-ink/90">{t.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
