import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { CompaniesStrip } from '../home/CompaniesStrip';
import { WebsiteStudioSpotlight } from '../home/WebsiteStudioSpotlight';
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

      {/* 03 — Priority Website Building Studio */}
      <WebsiteStudioSpotlight onNavigate={onNavigate} onSelectService={onSelectService} />

      {/* 04 — Core Expertise Matrix */}
      <ExpertisePillars onNavigate={onNavigate} />

      {/* 05 — How I Help Businesses (Problem Solver Cards) */}
      <ProblemSolverCards onNavigate={onNavigate} onSelectService={onSelectService} />

      {/* 06 — Featured Services */}
      <FeaturedServices onNavigate={onNavigate} onSelectService={onSelectService} />

      {/* 07 — Selected Case Studies */}
      <FeaturedProjects onNavigate={onNavigate} onOpenCaseStudy={onOpenCaseStudy} />

      {/* 08 — Live Interactive Quotation Tool Demonstration */}
      <section className="py-12 lg:py-16 bg-[#0A0C10] border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveQuotationPreview onNavigateToWorkWithMe={() => onNavigate('work-with-me')} />
        </div>
      </section>

      {/* 09 — Featured Recommendations (EY, Tacheon, Hyundai) */}
      <FeaturedTestimonials onNavigate={onNavigate} />

      {/* 10 — Why Work With Me (5 Pillars) */}
      <WhyWorkWithMe onNavigate={onNavigate} />

      {/* 11 — Technology Stack Matrix */}
      <TechStackPreview />

      {/* 12 — Work With Me Conversion Banner */}
      <ConversionCTA onNavigate={onNavigate} />
    </div>
  );
};
