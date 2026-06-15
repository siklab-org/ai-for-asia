import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ About</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Bridging the AI skills gap across <span className="text-gradient">Southeast Asia</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { k: "12", l: "Weeks" },
            { k: "11+1", l: "ASEAN Nations + South Korea" },
            { k: "120", l: "Fellows in Asia" },
          ].map((i, idx) => (
            <Reveal key={i.k} delay={0.1 * idx}>
              <div className="glass rounded-3xl p-8 hover:bg-white/[0.07] transition-all hover:-translate-y-1 duration-500">
                <div className="text-6xl font-bold text-gradient">{i.k}</div>
                <div className="mt-2 text-muted-foreground">{i.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Southeast Asia isn&apos;t waiting for AI to arrive — it&apos;s already here. AI
            for Asia trains the next wave of ASEAN leaders to shape how it&apos;s built,
            governed, and deployed across the region. Fellows learn from industry leaders,
            UN officials, and policy makers through live sessions, mentorship, and a
            capstone project they actually ship.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
