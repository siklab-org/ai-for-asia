"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";

const audiences = [
  {
    title: "For Students & Youth",
    description:
      "Gain practical exposure to innovation, AI, entrepreneurship, sustainable development, and international cooperation while building your network with young people from the Philippines and beyond.",
  },
  {
    title: "For International Delegates",
    description:
      "Experience the Philippine youth innovation ecosystem, connect with Filipino youth leaders, and develop relationships with ASEAN and other international peers.",
  },
  {
    title: "For Educators",
    description:
      "Expose your students to experts, innovation ecosystems, entrepreneurship, international exchange, and real-world examples of social impact.",
  },
  {
    title: "For Organizations",
    description:
      "Connect with a diverse community of young innovators and potential future leaders while contributing expertise, mentorship, resources, and opportunities.",
  },
];

export function PyisWhyParticipate() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Why Participate
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Why <span className="text-gradient">participate</span>?
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
              >
                <h3 className="text-lg font-bold mb-3">{audience.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
