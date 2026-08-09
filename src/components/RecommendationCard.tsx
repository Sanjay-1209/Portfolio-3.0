"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import type { Recommendation } from "@/data/recommendations";

export default function RecommendationCard({
  rec,
  index,
}: {
  rec: Recommendation;
  index: number;
}) {
  const paragraphs = rec.text.split("\n\n");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25) }}
      className="rounded-sm border border-ink-border bg-ink-near p-6 sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:text-left">
          <Avatar
            src={rec.image}
            name={rec.name}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-ink-border"
          />
          <div>
            <p className="font-display text-base sm:text-lg font-700">{rec.name}</p>
            <p className="text-xs sm:text-sm text-muted max-w-[220px] leading-snug mt-0.5">
              {rec.role}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <span
            aria-hidden="true"
            className="font-quote text-6xl sm:text-7xl leading-none text-yellow/70 block -mb-4"
          >
            &ldquo;
          </span>
          <div className="text-sm sm:text-base leading-relaxed text-paper/90 flex flex-col gap-3">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {(rec.relationship || rec.date) && (
            <p className="mt-4 text-xs text-muted">
              {rec.relationship}
              {rec.relationship && rec.date && " · "}
              {rec.date}
            </p>
          )}

          {rec.linkedin && (
            <a
              href={rec.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-600 text-yellow hover:underline"
            >
              VIEW LINKEDIN ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
