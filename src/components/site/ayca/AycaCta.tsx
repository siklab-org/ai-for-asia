"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import { aycaNominateChips, aycaNominationFormUrl } from "@/data/ayca2026";

export function AycaCta() {
  return (
    <section id="nominate" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-brand animate-gradient" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
                Nominations Open · September 7–20
              </p>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white leading-[1.0]">
                Who is the young person who inspired you to make a difference?
              </h2>
              <p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto">
                Some young people see a problem and walk past it. Others stop.
                They ask questions. They care. And then they act. They
                organize. They create. They innovate. They serve. They lead.
                And they inspire others to do the same.
              </p>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                They may be innovators, entrepreneurs, community leaders,
                educators, advocates, environmental champions, artists and
                creatives, youth diplomats, volunteers, changemakers — or
                simply young people who saw something that needed to change and
                decided to do something about it.
              </p>
              <p className="mt-6 text-white font-medium">
                We want to celebrate them. We want to hear their stories. You
                can nominate:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {aycaNominateChips.map((chip) => (
                  <span
                    key={chip}
                    className="border border-white/30 text-white text-xs uppercase tracking-[0.15em] rounded-full px-4 py-2"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-10 text-xl md:text-2xl font-bold text-white">
                Who is your Youth Trailblazer?
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a
                  href={aycaNominationFormUrl}
                  className="bg-white text-[#0060BA] font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                >
                  Nominate Now
                </a>
                <Link
                  href="/pyis2026"
                  className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  About PYIS 2026
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
