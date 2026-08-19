import React, { useState } from 'react';
import { Layers, ExternalLink, CheckCircle2, Filter, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { PageId } from '../layout/Navbar';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Analytics & BI',
    'Data Engineering & Pipelines',
    'Web & Digital Solutions',
    'Automation & Tools'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Layers className="w-3 h-3 text-[#B85D19]" />
          Chapter II // Applied Implementations
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tight text-[#1C1C1C] leading-[1.05]">
          Case Studies, Automated Systems & Live Platforms
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Comprehensive project breakdowns detailing initial operational friction, technical architecture, verified commercial metrics, and live deployments.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#1C1C1C]/15">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1C]/60 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-[#B85D19]" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#1C1C1C] text-[#F4F1EA] font-bold shadow-sm'
                : 'bg-white text-[#1C1C1C] hover:bg-[#EBE7DE] border border-[#1C1C1C]/15'
            }`}
          >
            {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-[#1C1C1C]/15 p-6 sm:p-8 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#1C1C1C]/10">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#F4F1EA] text-[#1C1C1C] border border-[#1C1C1C]/10">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <span className="text-[10px] font-sans uppercase tracking-wider font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Live URL
                    </span>
                  )}
                  <span className="text-[10px] text-[#1C1C1C]/60 font-mono">{project.year}</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif italic font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors leading-snug">
                {project.title}
              </h2>
              
              <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/80 mt-2 leading-relaxed">
                {project.tagline}
              </p>

              {/* Problem vs Solution preview */}
              <div className="grid grid-cols-1 gap-3 mt-4 text-xs">
                <div className="p-3 bg-[#EBE7DE] border border-[#1C1C1C]/10">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 block mb-1">
                    Problem Encountered
                  </span>
                  <p className="text-xs font-serif text-[#1C1C1C]/85 line-clamp-2 leading-relaxed">{project.problem}</p>
                </div>

                <div className="p-3 bg-[#F4F1EA] border border-[#1C1C1C]/10">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B85D19] block mb-1">
                    Architectural Solution & Execution
                  </span>
                  <p className="text-xs font-serif text-[#1C1C1C]/85 line-clamp-2 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Impact summary */}
              <div className="mt-4 p-3.5 bg-[#F4F1EA] border border-[#1C1C1C]/10 space-y-1.5">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C] block">
                  Verified Outcomes:
                </span>
                {project.impact.map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-serif text-[#1C1C1C]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-sans px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="mt-6 pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenCaseStudy(project)}
                className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] group-hover:underline flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                Read Case Study
              </button>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans uppercase tracking-wider font-bold px-3.5 py-1.5 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  Visit Platform <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/50">
                  {project.proofBadge || 'Enterprise System'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] text-center space-y-4 shadow-sm">
        <h3 className="text-2xl font-serif italic text-[#F4F1EA]">Need a Similar Engineered Solution?</h3>
        <p className="text-xs sm:text-sm font-serif text-[#F4F1EA]/80 max-w-xl mx-auto">
          Whether you need an automated quotation engine, statistical models on customer cohorts, or a full-stack platform.
        </p>
        <button
          onClick={() => onNavigate('work-with-me')}
          className="px-6 py-3 bg-[#F4F1EA] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          Request a Custom Consultation / Quote
        </button>
      </div>
    </div>
  );
};
