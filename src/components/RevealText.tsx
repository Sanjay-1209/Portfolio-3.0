"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function RevealText({
  children,
  className = "",
  delay = 0,
  once = true,
}: Props) {
  return (
    <span className="mask-line">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once, amount: 0.4 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
