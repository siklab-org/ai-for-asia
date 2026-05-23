import Image from "next/image";
import { Reveal } from "./Reveal";

const areas = [
  { img: "/scraped/area1.png", title: "AI Literacy", desc: "Foundations of artificial intelligence." },
  { img: "/scraped/area2.png", title: "Policy & Ethics", desc: "Governance for the AI era." },
  { img: "/scraped/area3.png", title: "Entrepreneurship", desc: "Building AI-native ventures." },
  { img: "/scraped/area4.png", title: "Workforce", desc: "Future-ready skills." },
  { img: "/scraped/area5.png", title: "Innovation", desc: "Real-world capstone projects." },
  { img: "/scraped/area6.png", title: "Community", desc: "Cross-border ASEAN networks." },
];

export function Program() {
  return (
    <section id="program" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Program</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.05]">
                Six areas of <span className="text-gradient">work</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="group relative aspect-square rounded-3xl overflow-hidden glass hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-muted-foreground mb-1">0{i + 1}</div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
