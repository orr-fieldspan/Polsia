export function Manifesto() {
  return (
    <section id="approach" className="relative border-b hairline overflow-hidden">
      <div className="absolute -bottom-24 -right-24 h-[360px] w-[360px] rounded-full bg-violet/15 blur-3xl orb" />
      <div className="absolute -top-20 left-1/3 h-[280px] w-[280px] rounded-full bg-honey/40 blur-3xl orb" style={{ animationDelay: "-4s" }} />

      <div className="relative mx-auto max-w-page px-6 lg:px-10 py-24 lg:py-28">
        <div className="text-[12px] uppercase tracking-[0.2em] text-muted mb-8">
          The thesis
        </div>

        <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[60px] leading-[1.05] tracking-tightest max-w-4xl">
          You can&rsquo;t buy a transformation. You have to{" "}
          <span className="italic violet-text">staff one.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-muted">
          The first wave of public-sector AI was procured through licenses and
          portals. Most of it never landed, because the hard part was never
          the model. The hard part is the work done inside the building, with
          the people who already run the workflow. That is the work we do.
        </p>
      </div>
    </section>
  );
}
