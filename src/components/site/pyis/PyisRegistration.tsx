"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "../Reveal";
import { ChevronDown } from "lucide-react";

const pricingCards = [
  {
    title: "Local / Filipino Delegate",
    price: "USD 100",
    features: [
      "Opening and plenary sessions",
      "Expert-led sessions",
      "Breakout sessions",
      "Workshops",
      "Innovation development activities",
      "Pitch Development Workshop",
      "Pitching Simulation",
      "Enactus National Competition Finals",
      "Closing and awarding ceremonies",
    ],
  },
  {
    title: "International Delegate",
    price: "USD 150",
    features: [
      "Opening and plenary sessions",
      "Expert-led sessions",
      "Breakout sessions",
      "Workshops",
      "Innovation development activities",
      "Pitch Development Workshop",
      "Pitching Simulation",
      "Enactus National Competition Finals",
      "Closing and awarding ceremonies",
      "International youth exchange activities",
    ],
  },
];

export function PyisRegistration() {
  const [showPackages, setShowPackages] = useState(false);

  return (
    <section id="register" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Registration
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Join the <span className="text-gradient">Summit</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pricingCards.map((card, i) => (
            <Reveal key={card.title} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 border-gradient"
              >
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <div className="text-4xl font-bold text-gradient mb-6">
                  {card.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gradient mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://tinyurl.com/pyis2026register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-brand animate-gradient text-white font-medium py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Register Now
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 glass rounded-2xl p-6">
            <p className="text-sm text-muted-foreground text-center mb-4">
              <span className="text-foreground font-medium">IMPORTANT:</span>{" "}
              Registration fees cover access to the Summit program only.
              Accommodation, transportation, meals, and other logistical
              requirements are not included and may be arranged separately.
            </p>
            <button
              onClick={() => setShowPackages(!showPackages)}
              className="flex items-center gap-2 mx-auto text-sm text-gradient hover:opacity-80 transition-opacity"
            >
              View Logistical Packages
              <motion.div
                animate={{ rotate: showPackages ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {showPackages && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>
                      Optional logistical packages may include accommodation,
                      transportation, airport transfers, and other support
                      services. Final details and rates will be communicated
                      separately.
                    </p>
                    <a
                      href="https://docs.google.com/document/d/1pX_Gcdk9xjH-BLaPI3mXPJhw7UYCEKa1Hi3uQHzrOmc/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gradient hover:opacity-80 transition-opacity mt-2 inline-block"
                    >
                      View Package Details →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
