import Image from "next/image";
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
            <Image
              src="/scraped/partners.png"
              alt="Partners"
              width={672}
              height={200}
              className="max-w-2xl w-full opacity-90 hover:opacity-100 transition-opacity"
              style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1)" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}