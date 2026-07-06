export function CTA() {
  return (
    <section id="apply" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-brand animate-gradient" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
              Be part of<br />the next cohort.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              Applications open for fellows, partners, and speakers across ASEAN.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href="https://form.typeform.com/to/NOTrA2Qg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0060BA] font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
              >
                Apply now
              </a>
              <a
                href="#apply"
                className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Become a partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
