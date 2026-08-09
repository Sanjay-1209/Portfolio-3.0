"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/about", label: "About", n: "01" },
  { href: "/experience", label: "Experience", n: "02" },
  { href: "/work", label: "Work", n: "03" },
  { href: "/recommendations", label: "Words", n: "04" },
  { href: "/contact", label: "Contact", n: "05" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[90] h-14 sm:h-16 md:h-[68px] border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="font-display text-lg sm:text-xl font-700 tracking-tight"
          >
            SD<span className="text-yellow">.</span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 font-display text-sm font-500 tracking-wide"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-yellow ${
                  pathname === link.href ? "text-yellow" : "text-paper"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full bg-yellow px-5 py-2.5 font-display text-sm font-600 text-ink transition-transform hover:scale-[1.02]"
            >
              LET&apos;S TALK ↗
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex flex-col justify-between bg-yellow px-6 pt-24 pb-10 text-ink md:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-display text-4xl xs:text-5xl font-700 tracking-tight"
                  >
                    <span className="text-base font-500 opacity-60">
                      {link.n}
                    </span>
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-2 font-display text-sm font-600">
              <a
                href={profile.linkedinPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-ink/20 py-2"
              >
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`} className="border-b border-ink/20 py-2">
                Email ↗
              </a>
              <span className="py-2 opacity-70">Chennai, India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
