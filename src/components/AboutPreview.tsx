"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/profile";

const highlights = [
  "complex data",
  "strategic decisions",
  "automated workflows",
  "AI-driven dashboards",
  "business outcomes",
];

function highlightSummary(text: string) {
  let result: (string | JSX.Element)[] = [text];
  highlights.forEach((h, idx) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const pieces = part.split(h);
      const joined: (string | JSX.Element)[] = [];
      pieces.forEach((p, i) => {
        joined.push(p);
        if (i < pieces.length - 1) {
          joined.push(
            <span key={`${h}-${idx}-${i}`} className="text-yellow font-600">
              {h}
            </span>
          );
        }
      });
      return joined;
    });
  });
  return result;
}

export default function AboutPreview() {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px] grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <SectionLabel number="—" label="About" />
          <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight text-balance">
            Data is only useful
            <br />
            <span className="text-yellow">when it changes something.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-paper/85">
            {highlightSummary(profile.summary)}
          </p>
          <div className="mt-8">
            <MagneticButton href="/about" variant="secondary" data-cursor="view">
              MORE ABOUT ME ↗
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
