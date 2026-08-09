import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import RevealText from "@/components/RevealText";
import Capabilities from "@/components/Capabilities";
import Education from "@/components/Education";
import { profile, disciplines, workPrinciples } from "@/data/profile";

export const metadata: Metadata = {
  title: "About | Sanjay Dharan",
  description:
    "Data Analytics, Software Engineering, Automation and AI — the disciplines and principles behind Sanjay Dharan's work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-border bg-ink px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 md:pt-[68px] pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1400px] pt-8 sm:pt-14">
          <SectionLabel number="01" label="About" />
          <h1 className="mt-4 font-display font-700 uppercase leading-[0.95] tracking-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-balance">
            <RevealText>I like problems</RevealText>
            <RevealText delay={0.1}>that don&apos;t arrive</RevealText>
            <RevealText delay={0.2} className="text-yellow">
              cleanly structured.
            </RevealText>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            I enjoy working where technology meets ambiguity — understanding
            the problem, finding the useful signal in the data and turning it
            into something people can actually use.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <SectionLabel number="—" label="Summary" />
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-700 uppercase leading-tight">
              The full picture.
            </h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-paper/85">
            {profile.summary}
          </p>
        </div>
      </section>

      <section className="border-b border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel number="—" label="Disciplines" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-700 uppercase leading-tight mb-8">
            What I work across.
          </h2>
          <div className="flex flex-wrap gap-3">
            {disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full border border-ink-border px-5 py-2.5 font-display text-sm font-500 text-paper/90"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel number="—" label="Capabilities" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-700 uppercase leading-tight">
            Five capabilities, one focus.
          </h2>
          <Capabilities />
        </div>
      </section>

      <section className="border-b border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel number="—" label="Principles" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-700 uppercase leading-tight mb-10">
            How I approach the work.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {workPrinciples.map((p) => (
              <div
                key={p.number}
                className="rounded-sm border border-ink-border bg-ink p-6 sm:p-8"
              >
                <span className="font-display text-xs text-yellow">
                  {p.number}
                </span>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-700 uppercase leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Education />
    </>
  );
}
