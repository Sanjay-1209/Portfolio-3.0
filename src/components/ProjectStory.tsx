"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { projects } from "@/data/projects";

const statusStyles: Record<string, string> = {
  Live: "bg-yellow text-ink",
  "Internal Tool": "border border-ink-border text-paper",
  Project: "border border-ink-border text-paper",
};

export default function ProjectStory() {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="04" label="Selected Work" />
        <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight text-balance">
          Not just projects.
          <br />
          <span className="text-yellow">Problems I solved.</span>
        </h2>
        <p className="mt-2 font-display text-xs tracking-[0.15em] text-muted uppercase">
          Built because manual work gets boring.
        </p>

        <div className="mt-14 flex flex-col gap-14 sm:gap-20">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="border-t border-ink-border pt-10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-display text-sm text-muted">
                  {project.number}
                </span>
                <span
                  className={`rounded-full px-3 py-1 font-display text-[11px] font-600 uppercase tracking-wide ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status}
                </span>
                {project.conceptual && (
                  <span className="rounded-full border border-ink-border px-3 py-1 font-display text-[11px] uppercase tracking-wide text-muted">
                    Conceptual Visualization
                  </span>
                )}
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-700 leading-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.organization}</p>

                  <div className="mt-6 flex flex-col gap-4 text-sm sm:text-base">
                    <div>
                      <p className="font-display text-xs font-600 uppercase tracking-wide text-yellow">
                        The Problem
                      </p>
                      <p className="mt-1 text-paper/85 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-xs font-600 uppercase tracking-wide text-yellow">
                        What I Built
                      </p>
                      <p className="mt-1 text-paper/85 leading-relaxed">
                        {project.whatIBuilt}
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-xs font-600 uppercase tracking-wide text-yellow">
                        How
                      </p>
                      <p className="mt-1 text-paper/85 leading-relaxed">{project.how}</p>
                    </div>
                    {project.impact && (
                      <div>
                        <p className="font-display text-xs font-600 uppercase tracking-wide text-yellow">
                          Impact
                        </p>
                        <p className="mt-1 text-paper/85 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="open"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 font-display text-sm font-600 text-ink hover:scale-[1.02] transition-transform"
                    >
                      VIEW LIVE ↗
                    </a>
                  )}
                </div>

                <ProjectVisual project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-ink-border bg-ink-near p-6 sm:p-8">
      <div className="absolute inset-0 opacity-40">
        <svg viewBox="0 0 400 300" className="h-full w-full">
          <defs>
            <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A2A2A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill={`url(#grid-${project.id})`} />
        </svg>
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <span className="font-display text-xs uppercase tracking-widest text-muted">
          {project.number} · {project.name.split(" ").slice(0, 2).join(" ")}
        </span>
        <div className="flex items-end gap-2">
          {project.technologies.slice(0, 4).map((t, i) => (
            <div
              key={t}
              className="rounded-sm bg-yellow/90"
              style={{
                width: `${18 + (i % 3) * 8}%`,
                height: `${30 + ((i * 17) % 60)}px`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
