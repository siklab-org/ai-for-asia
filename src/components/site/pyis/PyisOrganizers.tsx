"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import Image from "next/image";

export function PyisOrganizers() {
  return (
    <section id="organizers" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Organizers
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Who is <span className="text-gradient">behind</span> the Summit?
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <Image
                src="/speaker-logos/siklab.png"
                alt="Siklab Pilipinas"
                width={120}
                height={40}
                className="h-10 w-auto opacity-80 brightness-0 invert mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Siklab Pilipinas</h3>
              <p className="text-muted-foreground">
                Siklab Pilipinas is a youth development and innovation
                organization working to equip young people with the knowledge,
                skills, networks, and opportunities to become innovators,
                entrepreneurs, leaders, and changemakers.
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <Image
                src="/speaker-logos/enactus-logo.webp"
                alt="Enactus Philippines"
                width={80}
                height={45}
                className="h-10 w-auto opacity-80 brightness-0 invert mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Enactus Philippines</h3>
              <p className="text-muted-foreground">
                Enactus Philippines is part of the global Enactus network,
                empowering university students to use entrepreneurial action to
                improve communities and create sustainable social impact.
              </p>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              A Summit Connected to a National Innovation Platform
            </h3>
            <p className="text-muted-foreground">
              On Day 2, Summit participants will be invited to observe the
              Enactus Philippines National Competition Finals, where university
              teams will present their social innovation projects before a panel
              of judges and distinguished guests. Participants will see how
              concepts such as Problem Identification → Innovation →
              Entrepreneurship → Sustainability → Impact can be translated into
              actual projects and presented on a national stage.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
