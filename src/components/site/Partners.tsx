import { Reveal } from "./Reveal";

export function Partners() {
  return (
    <section className="relative py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Partners</span>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-8 bg-white/[0.35] backdrop-blur-md rounded-xl px-8 py-5 border border-white/20 shadow-sm">
              {/*
              <img
                src="/partners/deped.svg"
                alt="Department of Education (DepEd)"
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/partners/adb.svg"
                alt="Asian Development Bank"
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              */}
              <img
                src="/partners/nyc-white.png"
                alt="National Youth Council Singapore"
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
