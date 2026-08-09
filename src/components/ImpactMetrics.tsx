"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import SectionLabel from "./SectionLabel";
import { impactMetrics } from "@/data/profile";

export default function ImpactMetrics() {
  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="—" label="Impact" />
        <h2 className="mt-4 font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-700 uppercase leading-[0.95] tracking-tight">
          Impact
          <br />
          <span className="text-yellow">you can measure.</span>
        </h2>

        {/* Mobile: compact grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:hidden">
          {impactMetrics.slice(0, 4).map((m, i) => (
            <MetricCard key={i} metric={m} compact />
          ))}
          <div className="col-span-2">
            <MetricCard metric={impactMetrics[4]} compact />
          </div>
        </div>

        {/* Desktop / tablet: horizontal editorial sequence */}
        <div className="mt-14 hidden sm:flex flex-col divide-y divide-ink-border border-t border-b border-ink-border">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-6 py-6 md:py-8 transition-colors hover:bg-ink-near px-2"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-display text-3xl md:text-5xl lg:text-6xl font-700 text-paper/30 group-hover:text-yellow transition-colors w-16 md:w-24">
                  0{i + 1}
                </span>
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  className="font-display text-5xl md:text-7xl lg:text-[88px] font-700 tabular-nums group-hover:text-yellow transition-colors"
                />
              </div>
              <div className="text-right max-w-[220px] md:max-w-xs">
                <p className="font-display text-sm md:text-base font-600">{m.label}</p>
                <p className="text-xs md:text-sm text-muted mt-1">{m.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  metric,
  compact,
}: {
  metric: (typeof impactMetrics)[number];
  compact?: boolean;
}) {
  return (
    <div className="rounded-sm border border-ink-border bg-ink-near p-4">
      <AnimatedCounter
        value={metric.value}
        suffix={metric.suffix}
        className={`font-display font-700 text-yellow ${
          compact ? "text-4xl xs:text-5xl" : "text-6xl"
        }`}
      />
      <p className="mt-2 font-display text-xs font-600 leading-snug">
        {metric.label}
      </p>
      <p className="text-[11px] text-muted mt-1">{metric.context}</p>
    </div>
  );
}
