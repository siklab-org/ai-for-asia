import Image from "next/image";
import { Reveal } from "./Reveal";

const items = [
  { img: "/scraped/future1.png", title: "Expand", desc: "Across all 10 ASEAN nations." },
  { img: "/scraped/future2.png", title: "Deepen", desc: "Industry & academic partnerships." },
  { img: "/scraped/future3.png", title: "Sustain", desc: "Year-round alumni innovation." },
];

export function Future() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ 2026 Onwards</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            What&apos;s <span className="text-gradient">next</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs text-muted-foreground">0{i + 1}</div>
                  <h3 className="mt-2 text-3xl font-bold">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
