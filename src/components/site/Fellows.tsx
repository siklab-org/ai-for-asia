import Image from "next/image";
import { Reveal } from "./Reveal";

const fellows = [
  { img: "/fellows/Carrisa Tehputri.jpeg", name: "Carrisa Tehputri", quote: "ASEAN must decide: act independently — or rise as one." },
  { img: "/fellows/Jupiter Cabig Jr.jpg", name: "Jupiter D. Cabig Jr.", quote: "Government can shape vibrant AI startup ecosystems." },
  { img: "/fellows/Dylan Joseph Gonzales.jpg", name: "Dylan Joseph Gonzales", quote: "AI is multisectoral — and must be ethical for community." },
  { img: "/fellows/41 Trang Nguyen.jpg", name: "Nguyen Thi Huyen Trang", quote: "Governance and workforce adaptation must move in parallel." },
  { img: "/fellows/Shine_Min_Kha_photo.jpg", name: "Shine Min Kha", quote: "Leadership is the key skill of the AI-driven era." },
  { img: "/fellows/Ahmad Habibulloh.jpg", name: "Ahmad Habibulloh", quote: "AI governance must serve communities across ASEAN." },
  { img: "/fellows/Hanazel Superal.png", name: "Hanazel Superal", quote: "Technology should bridge gaps, not widen them." },
  { img: "/fellows/Lee Zhao Yi Charles.jpeg", name: "Lee Zhao Yi Charles", quote: "Building AI that reflects our shared humanity." },
  { img: "/fellows/Rustam Shariq Mujtaba.jpg", name: "Rustam Shariq Mujtaba", quote: "Policy and innovation must evolve together." },
  { img: "/fellows/Yu Wai Wai Khine.jpeg", name: "Yu Wai Wai Khine", quote: "Inclusive AI starts with diverse voices." },
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
                    style={f.name === "Carrisa Tehputri" || f.name === "Hanazel Superal" ? { objectPosition: "center 30%" } : undefined}
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
