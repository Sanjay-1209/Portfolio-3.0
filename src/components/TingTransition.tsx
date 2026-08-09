"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/profile";

export default function TingTransition() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 sm:px-6 lg:px-10 py-24 sm:py-32 md:py-40">
      <motion.div
        initial={{ scale: 0, opacity: 0.4 }}
        whileInView={{ scale: 40, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs sm:text-sm tracking-[0.25em] text-ink/70 uppercase"
        >
          Plot twist
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-700 uppercase leading-[0.95] text-ink"
        >
          Okay. What&apos;s next?
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 font-display text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-700 uppercase leading-[0.9] text-ink"
        >
          Ting.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-8 max-w-xl text-base sm:text-lg font-500 text-ink/85"
        >
          My next journey continues at Ting.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-ink/70"
        >
          After working across analytics, automation, cloud systems, AI and
          software engineering, the next chapter brings those experiences
          into a more creative digital environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10"
        >
          <MagneticButton
            href={profile.tingUrl}
            external
            className="!bg-ink !text-yellow"
            data-cursor="open"
          >
            VISIT TING ↗
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
