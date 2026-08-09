import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TingTransition from "@/components/TingTransition";

export const metadata: Metadata = {
  title: "Experience | Sanjay Dharan",
  description:
    "Hyundai Motor India, Tacheon Business Growth Consulting, Ernst & Young GDS — Sanjay Dharan's professional journey across audit, analytics and engineering.",
};

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-14 sm:pt-16 md:pt-[68px]" />
      <ExperienceTimeline full />
      <TingTransition />
    </>
  );
}
