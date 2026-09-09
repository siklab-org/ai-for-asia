"use client";

import { Reveal } from "../Reveal";
import { aycaObjectives } from "@/data/ayca2026";

export function AycaAbout() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / About the Awards
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Already leading. Already creating{" "}
            <span className="text-gradient">change</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground">
                The Asian Youth Champion Awards 2026 is a special recognition
                program of the Philippine Youth Innovation Summit 2026 that
                honors exceptional young people aged 15 to 35 who have
                demonstrated meaningful leadership, innovation, service,
                entrepreneurship, advocacy, or community action.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground">
                Changemaking can take many forms. A young person may create an
                initiative within their school, organize and mobilize a
                community, establish a social enterprise, develop an innovative
                technology, advocate for a cause, mentor other young people,
                lead environmental action, or create opportunities for people
                who are often underserved or overlooked. Many of these
                initiatives may never receive national recognition — the
                Awards seek to provide a platform for these young people and
                their stories.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-muted-foreground">
                While the Summit develops young people who can create change,
                the Awards recognize young people who are already doing so. The
                inaugural recognition honors 35 outstanding young trailblazers
                whose stories can inspire other young people to take action.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="glass border-gradient rounded-2xl p-8">
              <p className="text-lg md:text-xl leading-relaxed">
                What connects these individuals is not necessarily the scale of
                their organization or the number of awards they have received,
                but
                their willingness to{" "}
                <span className="text-gradient font-semibold">
                  see a challenge, take initiative, create a response, and
                  inspire others to act
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aycaObjectives.map((o, i) => (
            <Reveal key={o.title} delay={0.2 + i * 0.05}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.07] transition-all duration-500">
                <div className="text-xs text-muted-foreground mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-bold mb-3">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
