"use client";

import { useState } from "react";

type Props = {
  src: string;
  name: string;
  className?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Avatar({ src, name, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-ink-dark border border-ink-border text-yellow font-display font-700 ${className}`}
        role="img"
        aria-label={name}
      >
        <span className="text-2xl sm:text-3xl">{getInitials(name)}</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
