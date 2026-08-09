"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillCategories } from "@/data/skills";

export default function SkillsMatrix() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;

  return (
    <section className="border-t border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="—" label="Skills" />
        <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight">
          The complete toolbox.
        </h2>
        <p className="mt-2 font-display text-xs sm:text-sm tracking-[0.15em] text-muted uppercase">
          The toolbox — minus the buzzwords.
        </p>

        {/* Desktop: interactive matrix */}
        <div className="mt-12 hidden md:grid md:grid-cols-[280px_1fr] md:gap-10">
          <div className="flex flex-col gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`group flex items-center justify-between rounded-sm border px-5 py-4 text-left transition-colors ${
                  active === cat.id
                    ? "border-yellow bg-yellow text-ink"
                    : "border-ink-border text-paper hover:border-yellow/60"
                }`}
              >
                <span className="font-display text-sm font-600 uppercase tracking-wide">
                  {cat.label}
                </span>
                <span
                  className={`font-display text-xs ${
                    active === cat.id ? "text-ink/60" : "text-muted"
                  }`}
                >
                  {cat.short}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-sm border border-ink-border bg-ink p-8 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl font-700 mb-6">
                  {activeCategory.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {activeCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink-border px-4 py-2 font-display text-sm text-paper/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="mt-10 flex flex-col gap-3 md:hidden">
          {skillCategories.map((cat) => (
            <Accordion key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({
  category,
}: {
  category: (typeof skillCategories)[number];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-sm border border-ink-border bg-ink overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
      >
        <span className="font-display text-sm font-600 uppercase">
          {category.label}
        </span>
        <span className="font-display text-lg text-yellow">
          {open ? "–" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 px-4 pb-4">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink-border px-3 py-1.5 text-xs text-paper/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
