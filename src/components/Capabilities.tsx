"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/profile";

export default function Capabilities() {
  return (
    <div className="mt-14 divide-y divide-ink-border border-t border-b border-ink-border">
      {capabilities.map((c, i) => (
        <motion.div
          key={c.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group grid gap-2 py-6 sm:grid-cols-[80px_1fr_2fr] sm:items-center sm:gap-6 sm:py-8"
        >
          <span className="font-display text-sm text-muted">{c.number}</span>
          <h3 className="font-display text-xl sm:text-2xl font-700 uppercase group-hover:text-yellow transition-colors">
            {c.title}
          </h3>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            {c.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
