"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroDataScene from "./HeroDataScene";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink pt-14 sm:pt-16 md:pt-[68px]">
      <HeroDataScene />
      <div className="hero-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-56px)] max-w-[1400px] flex-col justify-center gap-8 px-4 sm:px-6 lg:px-10 py-10 md:grid md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xs sm:text-sm tracking-[0.25em] text-yellow uppercase mb-4 sm:mb-6"
          >
            {profile.name} — Chennai / India
          </motion.p>

          <h1 className="font-display font-700 uppercase leading-[0.92] tracking-tight text-[15vw] xs:text-[13vw] sm:text-[9vw] md:text-[clamp(3.4rem,7vw,7.2rem)]">
            <RevealText delay={0.15}>I turn</RevealText>
            <RevealText delay={0.28}>complex data</RevealText>
            <RevealText delay={0.41} className="text-yellow">
              into decisions.
            </RevealText>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl font-500 text-paper/90 max-w-xl"
          >
            And repetitive work into automated systems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-muted"
          >
            Associate Software Engineer & Data Analyst working across
            analytics, automation, AI and software systems — turning raw
            information into measurable business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/work" data-cursor="view">
              VIEW MY WORK
            </MagneticButton>
            <MagneticButton
              href={profile.linkedinPrimary}
              external
              variant="secondary"
              data-cursor="open"
            >
              LINKEDIN ↗
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 sm:mt-10 font-display text-xs tracking-[0.2em] text-muted"
          >
            {profile.status}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-ink-border">
            <Image
              src={profile.heroImage}
              alt="Portrait of Sanjay Dharan"
              fill
              priority
              sizes="(max-width: 768px) 280px, 420px"
              className="object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <div className="absolute -bottom-px -right-px h-16 w-16 sm:h-20 sm:w-20 bg-yellow" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden sm:block rounded-sm bg-yellow px-4 py-2 font-display text-xs font-700 text-ink">
            DATA × AI × SOFTWARE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
