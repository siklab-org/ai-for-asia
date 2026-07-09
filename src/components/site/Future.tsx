import Image from "next/image";

const items = [
  { img: "/icons/Expand.svg", title: "Expand", desc: "Reaching all 11 ASEAN nations, ensuring no country is left out of Asia's AI moment." },
  { img: "/icons/Deepen.svg", title: "Deepen", desc: "Forging partnerships with industry and academia to turn ideas into real impact." },
  { img: "/icons/Sustain.svg", title: "Sustain", desc: "Keeping the network alive and building, long after the fellowship ends." },
];

export function Future() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ 2026 Onwards</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
          What&apos;s <span className="text-gradient">next</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          The 2025 cohort was just the beginning. Here&apos;s where AI for Asia goes from here.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <Image
                  src={it.img}
                  alt={it.title}
                  width={280}
                  height={280}
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs text-muted-foreground">0{i + 1} ·</div>
                <h3 className="mt-2 text-3xl font-bold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
