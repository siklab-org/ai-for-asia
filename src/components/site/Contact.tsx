import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
          / Contact
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Get in <span className="text-gradient">touch</span>.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:hello@aiforasean.org"
            className="group flex items-center justify-between gap-4 glass rounded-3xl p-6 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-brand animate-gradient grid place-items-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Email us
                </div>
                <div className="mt-0.5 text-md md:text-lg font-semibold">
                  leadasia@siklab.org.ph
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61580536983970"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 glass rounded-3xl p-6 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-brand animate-gradient grid place-items-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Facebook
                </div>
                <div className="mt-0.5 text-lg md:text-xl font-semibold">
                  @aiforasia
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/ai-for-asia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 glass rounded-3xl p-6 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-brand animate-gradient grid place-items-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  LinkedIn
                </div>
                <div className="mt-0.5 text-lg md:text-xl font-semibold">
                  @aiforasia
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
