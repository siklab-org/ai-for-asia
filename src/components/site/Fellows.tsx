import Image from "next/image";
import { Reveal } from "./Reveal";

export interface Fellow {
  img: string;
  name: string;
  quote: string;
  country: string;
  x: number;
  y: number;
}

export const fellows: Fellow[] = [
  { img: "/fellows/Carrisa Tehputri.jpeg", name: "Carrisa Tehputri", quote: "ASEAN must decide: act independently — or rise as one.", country: "Indonesia", x: 43, y: 67 },
  { img: "/fellows/Jupiter Cabig Jr.jpg", name: "Jupiter D. Cabig Jr.", quote: "Government can shape vibrant AI startup ecosystems.", country: "Philippines", x: 56, y: 36 },
  { img: "/fellows/Dylan Joseph Gonzales.jpg", name: "Dylan Joseph Gonzales", quote: "AI is multisectoral — and must be ethical for community.", country: "Philippines", x: 50, y: 40 },
  { img: "/fellows/41 Trang Nguyen.jpg", name: "Nguyen Thi Huyen Trang", quote: "Governance and workforce adaptation must move in parallel.", country: "Vietnam", x: 25, y: 24 },
  { img: "/fellows/Shine_Min_Kha_photo.jpg", name: "Shine Min Kha", quote: "Leadership is the key skill of the AI-driven era.", country: "Myanmar", x: 10, y: 14 },
  { img: "/fellows/Ahmad Habibulloh.jpg", name: "Ahmad Habibulloh", quote: "AI governance must serve communities across ASEAN.", country: "Taiwan", x: 12, y: 10 },
  { img: "/fellows/Hanazel Superal.png", name: "Hanazel Superal", quote: "Technology should bridge gaps, not widen them.", country: "Philippines", x: 60, y: 42 },
  { img: "/fellows/Lee Zhao Yi Charles.jpeg", name: "Lee Zhao Yi Charles", quote: "Building AI that reflects our shared humanity.", country: "Singapore", x: 24, y: 57 },
  { img: "/fellows/Rustam Shariq Mujtaba.jpg", name: "Rustam Shariq Mujtaba", quote: "Policy and innovation must evolve together.", country: "Singapore", x: 27, y: 60 },
  { img: "/fellows/Yu Wai Wai Khine.jpeg", name: "Yu Wai Wai Khine", quote: "Inclusive AI starts with diverse voices.", country: "Thailand", x: 15, y: 20 },
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
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "center 25%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <p className="text-lg leading-snug flex-1">&ldquo;{f.quote}&rdquo;</p>
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
