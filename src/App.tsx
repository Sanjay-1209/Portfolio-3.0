/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar, PageId } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { RecommendationsPage } from './components/pages/RecommendationsPage';
import { WorkWithMePage } from './components/pages/WorkWithMePage';
import { ContactPage } from './components/pages/ContactPage';
import { ResumeModal } from './components/common/ResumeModal';
import { CaseStudyModal } from './components/common/CaseStudyModal';
import { PortfolioAssistant } from './components/assistant/PortfolioAssistant';
import { Project } from './types';

const validPages: PageId[] = ['home', 'about', 'experience', 'projects', 'services', 'recommendations', 'work-with-me', 'contact'];
const pageMeta: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Sanjay Dharan — Website Developer, Data Analyst & Automation Specialist',
    description: 'Sanjay Dharan builds premium responsive websites, data dashboards, automation systems and scalable data solutions for businesses, startups and teams.'
  },
  about: {
    title: 'About Sanjay Dharan — Data, Automation & Website Solutions',
    description: 'About Sanjay Dharan, a Chennai-based data, automation and web solutions professional with enterprise experience across EY, Tacheon and Hyundai.'
  },
  experience: {
    title: 'Experience — Sanjay Dharan | EY, Tacheon & Hyundai',
    description: 'Enterprise data analytics, engineering and automation experience with verified production outcomes across EY GDS, Tacheon and Hyundai.'
  },
  projects: {
    title: 'Projects & Case Studies — Sanjay Dharan',
    description: 'Explore live websites, analytics projects, dashboards, automation tools and production case studies by Sanjay Dharan.'
  },
  services: {
    title: 'Services — Website Development, Analytics, BI & Automation',
    description: 'End-to-end website development, SEO-ready responsive builds, data analytics, dashboards, automation, ETL, database and internal business tools.'
  },
  recommendations: {
    title: 'Professional Recommendations — Sanjay Dharan',
    description: 'Professional recommendations and references from colleagues across EY, Tacheon and Hyundai.'
  },
  'work-with-me': {
    title: 'Work With Sanjay — Website, Data & Automation Projects',
    description: 'Start a website development, analytics, dashboard, automation or custom business solution project with Sanjay Dharan.'
  },
  contact: {
    title: 'Contact Sanjay Dharan — Chennai / Remote',
    description: 'Contact Sanjay Dharan for responsive website development, data analytics, business intelligence, automation, consulting and full-time opportunities.'
  }
};

const pageFromLocation = (): PageId => {
  const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const legacyHash = window.location.hash.replace('#', '');
  if (cleanPath && validPages.includes(cleanPath as PageId)) return cleanPath as PageId;
  if (legacyHash && validPages.includes(legacyHash as PageId)) return legacyHash as PageId;
  return 'home';
};

const setMeta = (page: PageId) => {
  const meta = pageMeta[page];
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute('content', meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  const pageUrl = `https://sanjay-dharan.netlify.app${page === 'home' ? '/' : `/${page}`}`;
  canonical?.setAttribute('href', pageUrl);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => pageFromLocation());
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [inquiryService, setInquiryService] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => setCurrentPage(pageFromLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    setMeta(currentPage);
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    navigateTo('work-with-me');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] flex flex-col font-sans selection:bg-[#FFD84D] selection:text-[#111111]">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} />

      <main className="flex-1" id="main-content">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} onOpenCaseStudy={setSelectedCaseStudy} onSelectService={setSelectedServiceId} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} />}
        {currentPage === 'experience' && <ExperiencePage onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={navigateTo} onOpenCaseStudy={setSelectedCaseStudy} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} selectedServiceId={selectedServiceId} onSelectServiceForInquiry={handleServiceInquiry} />}
        {currentPage === 'recommendations' && <RecommendationsPage onNavigate={navigateTo} />}
        {currentPage === 'work-with-me' && <WorkWithMePage initialService={inquiryService} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} />}
      </main>

      <Footer onNavigate={navigateTo} onOpenResume={() => setResumeModalOpen(true)} />
      <PortfolioAssistant onNavigate={navigateTo} />
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
      <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} onSelectService={setSelectedServiceId} />
    </div>
  );
}
