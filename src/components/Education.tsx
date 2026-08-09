"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="—" label="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-6 rounded-sm border border-ink-border bg-ink-near p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <p className="font-display text-xs tracking-[0.2em] text-yellow uppercase">
              {education.status}, {education.timeline}
            </p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-700 leading-tight text-balance">
              {education.degree}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted">
              {education.institution} — {education.university}
            </p>
            <p className="text-sm sm:text-base text-muted">{education.location}</p>
          </div>
          <div className="shrink-0 font-display text-5xl sm:text-6xl font-700 text-paper/15">
            AI/DS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
