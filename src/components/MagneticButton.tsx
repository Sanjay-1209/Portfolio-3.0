"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  "data-cursor"?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:px-7 sm:py-3.5 font-display text-sm sm:text-base font-600 transition-transform duration-300 ease-expressive will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-yellow text-ink hover:scale-[1.02]"
      : "border border-ink-border text-paper hover:border-yellow hover:text-yellow";

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className={`${base} ${styles} ${className}`}
      {...props}
      {...rest}
    >
      {children}
    </Link>
  );
}
