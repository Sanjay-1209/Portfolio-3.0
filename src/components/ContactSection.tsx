"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="06" label="Contact" />

        <h2 className="mt-4 font-display font-700 uppercase leading-[0.95] tracking-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
          <RevealText>Got data?</RevealText>
          <RevealText delay={0.1}>A problem?</RevealText>
          <RevealText delay={0.2} className="text-yellow">
            An idea?
          </RevealText>
        </h2>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 font-display text-2xl sm:text-3xl font-700 text-paper/70"
        >
          Give me a Ting.
        </motion.h3>

        <p className="mt-6 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
          I&apos;m always interested in conversations around data, AI,
          automation, software systems and meaningful digital products.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
          <ContactAction
            href={`mailto:${profile.email}`}
            label="Email Me"
            value={profile.email}
          />
          <ContactAction
            href={profile.phoneHref}
            label="Call"
            value={profile.phone}
          />
          <ContactAction
            href={profile.linkedinPrimary}
            label="LinkedIn"
            value="/in/sanjay-dharan"
            external
          />
        </div>
      </div>
    </section>
  );
}

function ContactAction({
  href,
  label,
  value,
  external,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      data-cursor="open"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col justify-between rounded-sm border border-ink-border p-6 transition-colors hover:border-yellow hover:bg-ink-near sm:p-8"
    >
      <span className="font-display text-xs uppercase tracking-widest text-muted">
        {label} ↗
      </span>
      <span className="mt-6 font-display text-lg sm:text-xl font-600 group-hover:text-yellow transition-colors break-words">
        {value}
      </span>
    </a>
  );
}
