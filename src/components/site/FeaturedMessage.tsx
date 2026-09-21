"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

/* ─── Data ─────────────────────────────────────────────── */

const featured = {
  img: "/new-speakers/Anselmo.png",
  name: "Anselmo S. H. Lee",
  role: "Ambassador for Human Rights, Peace and Democracy, RoK Government",
  logo: "/speaker-logos/southkorea.webp",
  logoLabel: "Government of the Republic of Korea",
  session: "Session 7 · AI for Sustainable Development",
  program: "AI for Asia Fellowship 2026",
  date: "September 5, 2026",
  bio: "Appointed in May 2026 as South Korea's first Human Rights Ambassador, with decades of leadership across civil society in the region — former President of Pax Romana, Executive Director of Forum-Asia and the Korea Human Rights Foundation, co-founder of the Asia Development Alliance and Asia Democracy Network.",
};

const completion = [
  "Does it protect and promote human rights?",
  "Does it reduce inequality rather than deepen it?",
  "Does it respect the ecological limits of our planet?",
  "Can the most affected people participate meaningfully in shaping it?",
];

const applications = [
  "Climate modeling",
  "Smart agriculture",
  "Disaster preparedness",
  "Renewable energy",
  "Biodiversity monitoring",
  "Public health",
  "Education",
  "Circular economy",
];

const risks = [
  "Deepen the digital divide",
  "Reproduce discrimination",
  "Energy, water & resource costs",
  "Surveillance & manipulation",
];

const principles = [
  {
    title: "AI must be human-rights-based.",
    body: "Human beings must never be reduced to data points, consumers, or objects of automated decisions. Human dignity, equality, privacy, freedom, participation, and accountability must be built into the entire AI life cycle. This approach goes beyond “do no harm” — it uses AI actively to advance the rights of people who have historically been excluded.",
  },
  {
    title: "AI must be inclusive.",
    body: "Its benefits must not be reserved for the technologically advanced, wealthy, or privileged. Rural populations, Indigenous peoples, persons with disabilities, women and girls, migrants, and people in poverty must be decision-makers and co-creators, not just beneficiaries. Whose knowledge is in the data? Whose language can the system understand? Who can challenge an automated decision? If communities remain invisible to AI, they may become invisible in public policy.",
  },
  {
    title: "AI must be environmentally sustainable and publicly accountable.",
    body: "It would be contradictory to use AI to address the climate crisis while ignoring its own footprint — energy, water, e-waste, mineral extraction. Responsibility must not disappear behind the complexity of an algorithm. Those affected by AI decisions deserve understandable information, meaningful human review, and effective remedies.",
  },
];

/* ─── Chapters ─────────────────────────────────────────── */

function PactCallout() {
  return (
    <div className="border-gradient rounded-2xl p-6">
      <p className="text-white font-semibold">
        Pact for the Future · UN Summit of the Future, 2024
      </p>
      <ul className="mt-3 space-y-2 text-sm text-white/75 leading-relaxed">
        <li>
          <span className="text-gradient font-semibold">Global Digital Compact</span> —
          digital transformation must be inclusive and human-centered.
        </li>
        <li>
          <span className="text-gradient font-semibold">Declaration on Future Generations</span> —
          responsibilities owed to those not yet here.
        </li>
        <li>
          <span className="text-gradient font-semibold">The digital & intergenerational agendas are inseparable.</span>
        </li>
      </ul>
    </div>
  );
}

function Chapter({ children }: { children: ReactNode }) {
  return <div className="space-y-5 leading-relaxed">{children}</div>;
}

function Pills({ items, tone = "white" }: { items: string[]; tone?: "white" | "red" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
          className={
            tone === "red"
              ? "rounded-full border border-white/10 bg-rose-500/[0.06] px-3.5 py-1.5 text-xs text-white/70"
              : "rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70"
          }
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

const chapters = [
  { no: "01", label: "Theme", title: "The Theme" },
  { no: "02", label: "Role", title: "Your Role" },
  { no: "03", label: "Principles", title: "Three Principles" },
  { no: "04", label: "ASEAN", title: "Korea × ASEAN" },
  { no: "05", label: "Checklist", title: "Checklist & Farewell" },
];

/* ─── Section ──────────────────────────────────────────── */

export function FeaturedMessage() {
  const [active, setActive] = useState(0);
  const current = chapters[active];

  return (
    <section id="featured-message" className="relative py-32 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* Decorative glow */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-gradient-brand blur-3xl opacity-10 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gradient-brand blur-3xl opacity-5 rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          {/* Header */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Featured Message · {featured.session}
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
              A message of{" "}
              <span className="text-gradient">support</span>, from
              Seoul.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl">
              {featured.program} · {featured.date}
            </p>
          </div>
          </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-14 items-start">
          {/* ── Portrait + facts ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] group">
              <Image
                src={featured.img}
                alt={featured.name}
                fill
                sizes="380px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/30 backdrop-blur-md">
                <div className="text-lg font-bold leading-tight text-white">
                  {featured.name}
                </div>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  {featured.role}
                </p>
                <div className="mt-4 flex w-full items-center justify-center bg-white/[0.35] backdrop-blur-md rounded-lg px-3 py-2.5 border border-white/20">
                  <div className="relative h-8 w-[110px]">
                    <Image
                      src={featured.logo}
                      alt={featured.logoLabel}
                      fill
                      sizes="110px"
                      className="object-contain drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                About the Ambassador
              </span>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {featured.bio}
              </p>
            </div>
          </motion.div>

          {/* ── The letter reader ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 noise overflow-hidden"
          >
            {/* Big quote mark */}
            <div className="absolute -top-8 -left-2 text-[160px] md:text-[200px] leading-none font-serif text-gradient opacity-20 select-none pointer-events-none animate-float">
              “
            </div>

            <div className="relative">
              {/* Card header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div className="text-sm font-semibold text-white">
                  {featured.session}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {featured.program} · {featured.date}
                </div>
              </div>

              {/* Chapter tabs */}
              <div
                role="tablist"
                aria-label="Letter chapters"
                className="mt-6 flex flex-wrap gap-2"
              >
                {chapters.map((c, i) => (
                  <button
                    key={c.no}
                    role="tab"
                    aria-selected={active === i}
                    aria-controls={`chapter-panel-${c.no}`}
                    onClick={() => setActive(i)}
                    className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                      active === i ? "text-white" : "text-muted-foreground hover:text-white/80"
                    }`}
                  >
                    {active === i && (
                      <motion.span
                        layoutId="chapter-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full border border-white/15 bg-white/10"
                      />
                    )}
                    <span className="relative z-10">
                      {c.no} · {c.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[3px] flex-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-brand rounded-full"
                    animate={{ width: `${((active + 1) / chapters.length) * 100}%` }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  />
                </div>
                <span className="text-xs tabular-nums text-muted-foreground">
                  Chapter {current.no} / {chapters.length}
                </span>
              </div>

              {/* Chapter content */}
              <div className="mt-8 min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.no}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    role="tabpanel"
                    id={`chapter-panel-${current.no}`}
                    aria-label={current.title}
                  >
                    {/* Chapter heading */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="font-serif text-5xl leading-none text-gradient">
                        {current.no}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          Chapter
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    {/* ── Chapter 01 · The Theme ── */}
                    {active === 0 && (
                      <Chapter>
                        <p className="font-serif text-2xl md:text-3xl italic leading-snug text-white/95">
                          Dear fellows from ASEAN and the Republic of Korea,
                        </p>
<p className="text-sm text-white/75 leading-relaxed">
  To Michelle Kim-Rissi, Shellan Sailing, our partners at Siklab Pilipinas and
  the National Youth Council Singapore — and to all distinguished guests,
  colleagues and friends,
</p>
                        <p className="text-white/85">Warm greetings from Seoul.</p>
                        <p className="text-white/80">
                          It is a great pleasure to join you for Session 7 of the AI for Asia
                          Fellowship 2026, with 120 young leaders from across the region. Today
                          we ask not only what AI <em className="text-white">can</em> do, but
                          what it <em className="text-white">should</em> do — whom it should
                          serve, and what values and rules should guide it.
                        </p>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 italic">
                          “How we develop and govern AI today will shape the rights,
                          opportunities, security, and environment of generations yet to come.”
                        </p>
                        <PactCallout />
                      </Chapter>
                    )}

                    {/* ── Chapter 02 · Your Role ── */}
                    {active === 1 && (
                      <Chapter>
                        <p className="text-white/80">
                          Young people carry a special{" "}
                          <span className="text-gradient font-semibold">dual role</span>: to
                          participate fully as rights-holders and decision-makers today, and to
                          advocate for future generations who are not yet here and have no voice
                          in our institutions. Youth participation isn&apos;t merely a seat at the
                          table — it brings the future itself to the table.
                        </p>

                        <div>
                          <p className="text-white font-semibold">Already, AI is contributing to</p>
                          <div className="mt-3">
                            <Pills items={applications} />
                          </div>
                        </div>

                        <div>
                          <p className="text-white font-semibold">
                            Yet technology is never automatically just. AI can also...
                          </p>
                          <div className="mt-3">
                            <Pills items={risks} tone="red" />
                          </div>
                        </div>

                        <p className="text-white/80">
                          We must therefore treat AI not only as a technological or economic
                          issue, but as a matter of human rights, democracy, peace, sustainable
                          development, and global governance.
                        </p>
                      </Chapter>
                    )}

                    {/* ── Chapter 03 · Three Principles ── */}
                    {active === 2 && (
                      <div className="space-y-4">
                        <p className="text-white/80">
                          Let me suggest three principles for your reflection and action.
                        </p>
                        {principles.map((p, i) => (
                          <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
                          >
                            <div className="flex items-start gap-4">
                              <span className="text-gradient font-serif text-3xl leading-none pt-0.5">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <p className="text-white font-semibold">{p.title}</p>
                                <p className="mt-2 text-white/75 leading-relaxed">{p.body}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* ── Chapter 04 · Korea × ASEAN ── */}
                    {active === 3 && (
                      <Chapter>
                        <p className="text-white/80">
                          Korea–ASEAN cooperation is especially important. Our region&apos;s
                          extraordinary diversity — of languages, cultures, political systems, and
                          climate exposure — is not an obstacle. It is a powerful source of{" "}
                          <span className="text-gradient font-semibold">collective intelligence</span>.
                        </p>
                        <div className="border-gradient rounded-2xl p-6">
                          <p className="text-white font-semibold">
                            ASEAN–ROK Comprehensive Strategic Partnership · 2026–2030
                          </p>
                          <div className="mt-3">
                            <Pills
                              items={[
                                "Digital transformation",
                                "AI & startup competition",
                                "Smart agriculture",
                                "Renewable energy",
                                "Youth exchanges",
                                "Capacity-building for rural communities",
                              ]}
                            />
                          </div>
                        </div>
                        <p className="text-white/80">
                          The next step is ensuring young people are{" "}
                          <span className="text-gradient font-semibold">partners</span> in design,
                          implementation, monitoring, and evaluation — moving beyond one-way
                          technology transfer toward mutual learning and co-creation.
                        </p>
                        <p className="text-white/80">
                          Aligned with the Pact for the Future, this is the spirit of{" "}
                          <span className="text-gradient font-semibold">SDG 17</span>: partnership
                          is not one goal among many — it is how all the other goals become
                          possible.
                        </p>
                      </Chapter>
                    )}

                    {/* ── Chapter 05 · Checklist & Farewell ── */}
                    {active === 4 && (
                      <Chapter>
                        <p className="text-white/80">
                          During today&apos;s workshop, examine every proposed AI solution through
                          four simple questions:
                        </p>
                        <div className="space-y-3">
                          {completion.map((q, i) => (
                            <motion.div
                              key={q}
                              initial={{ opacity: 0, x: 16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.06 * i, duration: 0.35, ease: "easeOut" }}
                              className="flex items-start gap-4 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 hover:border-white/20 transition-colors"
                            >
                              <span className="text-gradient font-bold text-sm leading-6">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <p className="text-white/85 text-sm leading-6">{q}</p>
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-white font-semibold">
                          If the answer to any of these questions is no, the solution is not yet
                          complete.
                        </p>
                        <p className="text-white/80">
                          Let us not simply allow AI to determine our future — let us work together
                          to determine the future of AI. May you become not only successful AI
                          innovators, but responsible global and planetary citizens.
                        </p>
                        <p className="text-white/80">
                          Congratulations once again. I wish you a productive, inspiring, and
                          transformative session. Thank you very much.
                        </p>

                        {/* Signature */}
                        <div className="flex flex-wrap items-end justify-between gap-6 pt-6">
                          <div>
                            <div className="font-serif text-3xl text-gradient italic">
                              Anselmo S. H. Lee
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              {featured.role}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {featured.session} · {featured.program}
                            </p>
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                              {featured.logoLabel}
                            </span>
                            <div className="inline-flex items-center bg-white/[0.35] backdrop-blur-md rounded-lg px-3 py-2.5 border border-white/20">
                              <div className="relative h-9 w-[130px]">
                                <Image
                                  src={featured.logo}
                                  alt={featured.logoLabel}
                                  fill
                                  sizes="130px"
                                  className="object-contain drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Chapter>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}