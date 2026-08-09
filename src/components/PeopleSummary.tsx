"use client";

import { motion } from "framer-motion";
import { peopleSummaryWords } from "@/data/profile";

export default function PeopleSummary() {
  return (
    <section className="border-t border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-700 uppercase tracking-tight mb-8">
          What people keep saying.
        </h2>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-4">
          {peopleSummaryWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-700 text-paper/80 hover:text-yellow transition-colors"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <p className="mt-8 text-sm sm:text-base text-muted">
          Different teams. Different problems. A consistent way of working.
        </p>
      </div>
    </section>
  );
}
