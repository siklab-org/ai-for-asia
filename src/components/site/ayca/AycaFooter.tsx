"use client";

import { Reveal } from "../Reveal";

export function AycaFooter() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">
                Asian Youth Champion Awards 2026
              </h3>
              <p className="text-sm text-muted-foreground">
                A special recognition program of the Philippine Youth
                Innovation Summit 2026
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-muted-foreground">
              See · Act · Create · Impact · Inspire
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
