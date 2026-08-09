"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<"default" | "view" | "open">("default");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);

    function move(e: PointerEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      setVariant((el?.dataset.cursor as "view" | "open") || "default");
    }
    function leave() {
      setVisible(false);
    }
    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <div
        className="cursor-dot flex items-center justify-center rounded-full bg-yellow text-ink font-display font-600 transition-all duration-200 ease-out"
        style={{
          width: variant === "default" ? 10 : 56,
          height: variant === "default" ? 10 : 56,
          fontSize: 10,
        }}
      >
        {variant === "view" && "VIEW"}
        {variant === "open" && "OPEN ↗"}
      </div>
    </div>
  );
}
