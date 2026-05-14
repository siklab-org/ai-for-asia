import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Contact</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Get in <span className="text-gradient">touch</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="mailto:hello@aiforasean.org"
            className="group mt-12 flex items-center justify-between gap-6 glass rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand animate-gradient grid place-items-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email us</div>
                <div className="mt-1 text-2xl md:text-3xl font-semibold">
                  hello@aiforasean.org
                </div>
              </div>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
