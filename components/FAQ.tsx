const faqs = [
  {
    q: "Who is Fieldspan Embedded for?",
    a: "CIOs and chief economists at ministries, treasuries, regulators, and central-government coordination offices — institutions that have hard data-residency obligations and a workload that is currently bottlenecked on senior analyst time.",
  },
  {
    q: "How is this different from buying a license to a frontier model?",
    a: "A model license gives you a capability through a vendor's API. Fieldspan Embedded gives you the operating system that turns a model — including open-weight models you already host — into staffed workflows with named owners, audit trails, and SLAs. The model is interchangeable; the system around it is the product.",
  },
  {
    q: "Where does the data live?",
    a: "Wherever you say. The reference deployment is on-premises in the customer's data center; alternative deployments run in a sovereign cloud or in an air-gapped enclave. No component of the platform requires an outbound connection to a Fieldspan-controlled service to operate.",
  },
  {
    q: "What does a first engagement look like?",
    a: "A four-week scoping engagement to pick one workflow, one owner, and a measured baseline. A twelve-week pilot to deploy the platform inside the perimeter and put the first agent into production against that baseline. A decision point at the end of the pilot — by then the platform has either paid for itself in cycle time or it has not.",
  },
  {
    q: "How is it priced?",
    a: "An annual platform fee, scoped to the number of workflows in production and the size of the deployment. No per-token billing, no per-seat seat-by-seat creep, no surprises from a foreign-currency invoice in the middle of a fiscal year.",
  },
  {
    q: "What happens if Fieldspan disappears?",
    a: "The deployment continues to function. Source code for the deployed components is held in escrow, the model weights are already on your hardware, and the integrations are documented to a standard that an in-house team can maintain. Sovereignty includes sovereignty from us.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative border-b hairline">
      <div className="mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-[12.5px] uppercase tracking-[0.22em] text-muted mb-4">
            Questions a CIO asks first
          </div>
          <h2 className="font-serif text-[34px] lg:text-[44px] leading-[1.05] tracking-tightest gradient-text">
            The short version, on the record.
          </h2>
          <p className="mt-6 text-[15px] text-muted leading-relaxed">
            If your question is not here, ask it in the briefing. Direct answers
            in writing, before anyone signs anything.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-[19px] lg:text-[21px] leading-snug tracking-tight text-white/95 group-hover:text-white">
                  {f.q}
                </h3>
                <span className="chev mt-2 inline-flex h-7 w-7 items-center justify-center rounded-full border hairline text-muted group-hover:text-accent group-hover:border-accent/50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
