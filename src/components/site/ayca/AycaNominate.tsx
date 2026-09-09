"use client";

import { Reveal } from "../Reveal";
import { aycaNominationTypes, aycaNominationPrinciple } from "@/data/ayca2026";

export function AycaNominate() {
  return (
    <section id="who-may-nominate" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Nominations
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Anyone can nominate a{" "}
            <span className="text-gradient">Trailblazer</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            The program adopts an open nomination system to ensure that
            deserving young people can be recognized regardless of whether they
            have institutional support.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aycaNominationTypes.map((type, i) => (
            <Reveal key={type.title} delay={0.2 + i * 0.05}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.07] transition-all duration-500">
                <h3 className="font-bold mb-3">{type.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.45}>
            <div className="relative rounded-2xl p-8 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-brand animate-gradient" />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <p className="relative text-white font-medium leading-relaxed">
                {aycaNominationPrinciple}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
