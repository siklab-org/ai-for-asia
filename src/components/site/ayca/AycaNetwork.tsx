"use client";

import { Reveal } from "../Reveal";
import { aycaNetworkOpportunities } from "@/data/ayca2026";

export function AycaNetwork() {
  return (
    <section id="network" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Beyond the Ceremony
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            The Youth Trailblazers{" "}
            <span className="text-gradient">Network</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Recognition is not meant to end with the ceremony. The 35 honorees
            may become the inaugural members of a continuing Youth Trailblazers
            Network, with opportunities to:
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            {aycaNetworkOpportunities.map((item) => (
              <span
                key={item}
                className="glass rounded-full px-5 py-2.5 text-sm text-foreground/90"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            Over time, this can develop into a growing community of young
            leaders and changemakers across the Philippines and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
