import { Reveal } from "./Reveal";
import f1 from "@/assets/scraped/fellow1.png";
import f2 from "@/assets/scraped/fellow2.png";
import f3 from "@/assets/scraped/fellow3.png";
import f4 from "@/assets/scraped/fellow4.png";
import f5 from "@/assets/scraped/fellow5.png";

const fellows = [
  { img: f1, name: "Carrisa Tehputri", quote: "ASEAN must decide: act independently — or rise as one." },
  { img: f2, name: "Jupiter D. Cabig Jr.", quote: "Government can shape vibrant AI startup ecosystems." },
  { img: f3, name: "Dylan Joseph Gonzales", quote: "AI is multisectoral — and must be ethical for community." },
  { img: f4, name: "Nguyen Thi Huyen Trang", quote: "Governance and workforce adaptation must move in parallel." },
  { img: f5, name: "Shine Min Kha", quote: "Leadership is the key skill of the AI-driven era." },
];

export function Fellows() {
  return (
    <section id="fellows" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Outstanding Fellows · 2025</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Voices shaping <span className="text-gradient">tomorrow</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fellows.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 0.1}>
              <div className="group glass rounded-3xl p-6 h-full flex flex-col hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <p className="text-lg leading-snug flex-1">"{f.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">Fellow · 2025</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
