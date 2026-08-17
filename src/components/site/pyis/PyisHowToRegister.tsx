"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisRegistrationSteps } from "@/data/pyis2026";

export function PyisHowToRegister() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / How to Register
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            How to <span className="text-gradient">register</span>.
          </h2>
        </Reveal>

        <div className="mt-16 glass rounded-2xl p-8">
          <div className="space-y-6">
            {pyisRegistrationSteps.map((step, i) => (
              <Reveal key={step.step} delay={0.2 + i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold shrink-0">
                    {step.step}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground pt-2">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-8">
              <a
                href="https://tinyurl.com/pyis2026register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-brand animate-gradient text-white font-medium py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Register Now
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
