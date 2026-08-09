"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { whatIDo } from "@/data/profile";

export default function WhatIDo() {
  return (
    <section className="border-t border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="—" label="What I Do" />
        <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight">
          What I actually do.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-ink-near p-6 sm:p-8 transition-colors hover:bg-ink"
            >
              <span className="font-display text-xs text-muted">{item.number}</span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-700 uppercase group-hover:text-yellow transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
