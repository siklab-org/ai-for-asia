"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisFaq } from "@/data/pyis2026";
import { Plus, Minus } from "lucide-react";

export function PyisFaq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / FAQ
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Frequently asked <span className="text-gradient">questions</span>.
          </h2>
        </Reveal>

        <div className="mt-16 glass rounded-2xl overflow-hidden">
          {pyisFaq.map((item, i) => (
            <Reveal key={item.question} delay={0.2 + i * 0.05}>
              <div
                className={`border-b border-white/10 last:border-b-0 ${
                  i === 0 ? "rounded-t-2xl" : ""
                } ${i === pyisFaq.length - 1 ? "rounded-b-2xl" : ""}`}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-sm md:text-base font-medium pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    {expandedIndex === i ? (
                      <Minus className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-sm text-muted-foreground pl-0 md:pl-10">
                          {item.answer}
                        </p>
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
