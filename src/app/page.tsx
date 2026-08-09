import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import YellowTicker from "@/components/YellowTicker";
import AboutPreview from "@/components/AboutPreview";
import WhatIDo from "@/components/WhatIDo";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectStory from "@/components/ProjectStory";
import SkillsMatrix from "@/components/SkillsMatrix";
import Education from "@/components/Education";
import RecommendationSection from "@/components/RecommendationSection";
import PeopleSummary from "@/components/PeopleSummary";
import TingTransition from "@/components/TingTransition";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <YellowTicker />
      <AboutPreview />
      <WhatIDo />
      <ExperienceTimeline />
      <ProjectStory />
      <SkillsMatrix />
      <Education />
      <RecommendationSection preview />
      <PeopleSummary />
      <TingTransition />
      <ContactSection />
    </>
  );
}
