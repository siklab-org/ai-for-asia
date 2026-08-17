"use client";

import { Reveal } from "../Reveal";

export function PyisFooter() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">
                Philippine Youth Innovation Summit 2026
              </h3>
              <p className="text-sm text-muted-foreground">
                October 9–10, 2026 · De La Salle University Manila
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                Organized by
              </p>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <span className="text-sm font-medium">Siklab Pilipinas</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-sm font-medium">
                  Enactus Philippines
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-muted-foreground">
              Artificial Intelligence · International Cooperation · Sustainable
              Development
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
