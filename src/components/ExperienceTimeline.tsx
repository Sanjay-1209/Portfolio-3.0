"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { experiences } from "@/data/experience";

export default function ExperienceTimeline({ full = false }: { full?: boolean }) {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="03" label="Experience" />
        <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight">
          Different industries.
          <br />
          <span className="text-yellow">Same question.</span>
        </h2>
        <p className="mt-4 font-quote italic text-xl sm:text-2xl text-paper/80">
          &ldquo;How can this work better?&rdquo;
        </p>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
          My experience spans automotive audit, consulting, business-growth
          analytics, cloud data systems, workflow automation and AI-powered
          software.
        </p>

        <div className="mt-14 flex flex-col gap-10 sm:gap-14">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="grid gap-6 border-t border-ink-border pt-8 sm:grid-cols-[180px_1fr] sm:gap-10"
            >
              <div>
                <p className="font-display text-2xl sm:text-3xl font-700 text-yellow">
                  {exp.yearLabel}
                </p>
                <p className="mt-1 text-xs text-muted">{exp.location}</p>
                <p className="mt-3 text-xs italic text-muted">{exp.vibe}</p>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-700">
                  {exp.company}
                </h3>
                <p className="mt-1 font-display text-sm sm:text-base text-paper/80">
                  {exp.role} · {exp.timeline}
                </p>

                <div className="mt-6 flex flex-col gap-5">
                  {exp.sections.map((sec) => (
                    <div key={sec.title}>
                      <p className="font-display text-xs sm:text-sm font-600 uppercase tracking-wide text-yellow">
                        {sec.title}
                      </p>
                      {sec.body.map((b, bi) => (
                        <p
                          key={bi}
                          className="mt-1.5 text-sm sm:text-base text-paper/85 leading-relaxed"
                        >
                          {b}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="shrink-0 rounded-full border border-ink-border px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!full && (
          <p className="mt-12 font-display text-xs tracking-[0.2em] text-muted uppercase">
            Learning by shipping.
          </p>
        )}
      </div>
    </section>
  );
}
