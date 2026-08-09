"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  className = "",
  duration = 800,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
