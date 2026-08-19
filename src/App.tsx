/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'experience', 'projects', 'services', 'recommendations', 'work-with-me', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    navigateTo('work-with-me');
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1C1C1C] flex flex-col font-serif selection:bg-[#1C1C1C] selection:text-[#F4F1EA]">
      {/* Top Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={navigateTo}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceForInquiry}
            onSelectServiceForInquiry={handleSelectService}
          />
        )}

        {currentPage === 'recommendations' && (
          <RecommendationsPage onNavigate={navigateTo} />
        )}

        {currentPage === 'work-with-me' && (
          <WorkWithMePage initialService={selectedServiceForInquiry} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
