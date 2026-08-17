"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisSchedule } from "@/data/pyis2026";
import { ChevronDown } from "lucide-react";

export function PyisProgram() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  return (
    <section id="program" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Program
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Two days of <span className="text-gradient">innovation</span>.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {pyisSchedule.map((day, dayIndex) => (
            <Reveal key={day.label} delay={0.2 + dayIndex * 0.1}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedDay(expandedDay === dayIndex ? null : dayIndex)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold">
                    {day.label}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedDay === dayIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedDay === dayIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-3">
                        {day.items.map((session) => {
                          const sessionKey = `${dayIndex}-${session.time}`;
                          const isExpanded =
                            expandedSession === sessionKey;

                          return (
                            <div
                              key={sessionKey}
                              className="border border-white/10 rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() =>
                                  setExpandedSession(
                                    isExpanded ? null : sessionKey
                                  )
                                }
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.03] transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <span className="text-xs text-muted-foreground font-mono w-24">
                                    {session.time}
                                  </span>
                                  <span className="text-sm md:text-base font-medium">
                                    {session.title}
                                  </span>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                </motion.div>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 pb-4 pt-0">
                                      <p className="text-sm text-muted-foreground pl-28">
                                        {session.description}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
