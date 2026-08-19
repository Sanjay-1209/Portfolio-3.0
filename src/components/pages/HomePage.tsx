import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { CompaniesStrip } from '../home/CompaniesStrip';
import { ExpertisePillars } from '../home/ExpertisePillars';
import { ProblemSolverCards } from '../home/ProblemSolverCards';
import { FeaturedServices } from '../home/FeaturedServices';
import { FeaturedProjects } from '../home/FeaturedProjects';
import { FeaturedTestimonials } from '../home/FeaturedTestimonials';
import { WhyWorkWithMe } from '../home/WhyWorkWithMe';
import { InteractiveQuotationPreview } from '../home/InteractiveQuotationPreview';
import { TechStackPreview } from '../home/TechStackPreview';
import { ConversionCTA } from '../home/ConversionCTA';
import { Project } from '../../types';
import { PageId } from '../layout/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onOpenCaseStudy: (project: Project) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenResume,
  onOpenCaseStudy,
  onSelectService
}) => {
  return (
    <div className="space-y-0">
      {/* 01 — Hero */}
      <HeroSection onNavigate={onNavigate} onOpenResume={onOpenResume} />

      {/* 02 — Experience / Companies preview */}
      <CompaniesStrip onNavigate={onNavigate} />

      {/* 03 — Core Expertise Matrix */}
      <ExpertisePillars onNavigate={onNavigate} />

      {/* 04 — How I Help Businesses (Problem Solver Cards) */}
      <ProblemSolverCards onNavigate={onNavigate} onSelectService={onSelectService} />

      {/* 05 — Featured Services */}
      <FeaturedServices onNavigate={onNavigate} onSelectService={onSelectService} />

      {/* 06 — Selected Case Studies */}
      <FeaturedProjects onNavigate={onNavigate} onOpenCaseStudy={onOpenCaseStudy} />

      {/* 07 — Live Interactive Quotation Tool Demonstration */}
      <section className="py-16 lg:py-20 bg-[#0A0C10] border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveQuotationPreview onNavigateToWorkWithMe={() => onNavigate('work-with-me')} />
        </div>
      </section>

      {/* 08 — Featured Recommendations (EY, Tacheon, Hyundai) */}
      <FeaturedTestimonials onNavigate={onNavigate} />

      {/* 09 — Why Work With Me (5 Pillars) */}
      <WhyWorkWithMe onNavigate={onNavigate} />

      {/* 10 — Technology Stack Matrix */}
      <TechStackPreview />

      {/* 11 — Work With Me Conversion Banner */}
      <ConversionCTA onNavigate={onNavigate} />
    </div>
  );
};
