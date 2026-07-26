import Image from "next/image";

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
                href="/%5BAI%20for%20Asia%202026%5D%20Program%20Briefer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0060BA] font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
              >
                See More
              </a>
              <a
                href="#apply"
                className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Become a partner
              </a>
            </div>

            {/* Trust bar — Built by Siklab */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium mb-6">
                Built by Siklab, trusted by partners
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <Image
                  src="/speaker-logos/siklab.png"
                  alt="Siklab Pilipinas"
                  width={100}
                  height={34}
                  className="h-9 w-auto opacity-80 brightness-0 invert"
                />
                <span className="hidden sm:block w-px h-8 bg-white/20" />
                <Image
                  src="/partners/un-logo.png"
                  alt="United Nations"
                  width={80}
                  height={40}
                  className="h-10 w-auto opacity-80"
                />
                <Image
                  src="/partners/eu-logo.png"
                  alt="European Union"
                  width={100}
                  height={40}
                  className="h-9 w-auto opacity-80"
                />
                <Image
                  src="/speaker-logos/asean.png"
                  alt="ASEAN"
                  width={100}
                  height={40}
                  className="h-8 w-auto opacity-80"
                />
                <Image
                  src="/speaker-logos/adb.png"
                  alt="Asian Development Bank"
                  width={100}
                  height={34}
                  className="h-9 w-auto opacity-80"
                />
                <Image
                  src="/speaker-logos/enactus-logo.webp"
                  alt="Enactus"
                  width={100}
                  height={40}
                  className="h-9 w-auto opacity-80"
                />
                <Image
                  src="/partners/nyc-white.png"
                  alt="National Youth Council Singapore"
                  width={100}
                  height={40}
                  className="h-14 w-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
