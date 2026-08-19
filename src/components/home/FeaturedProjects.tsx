import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { PageId } from '../layout/Navbar';

interface FeaturedProjectsProps {
  onNavigate: (page: PageId) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate, onOpenCaseStudy }) => {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-[#EBE7DE] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
              Chapter V // Case Studies & Production Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
              Featured Projects & Deployments
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              From enterprise vendor compliance and cloud data pipelines to live consumer agritech and healthcare portals.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center gap-1.5 transition-all self-start md:self-auto"
          >
            All Case Studies & Proof <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
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
                        Live Deployment
                      </span>
                    )}
                    <span className="text-[10px] text-[#1C1C1C]/60 font-mono">{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif italic font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-sans text-[#1C1C1C]/70 mt-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Impact highlights */}
                <div className="mt-4 p-3.5 bg-[#F4F1EA] border border-[#1C1C1C]/10 space-y-1.5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B85D19] block">
                    Verified Outcomes:
                  </span>
                  {project.impact.slice(0, 2).map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-serif text-[#1C1C1C]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-sans px-2 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] group-hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  Read Full Case Study
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans uppercase tracking-wider font-semibold px-3 py-1.5 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] flex items-center gap-1.5 transition-colors"
                  >
                    Visit Website <ExternalLink className="w-3 h-3 text-[#F4F1EA]" />
                  </a>
                ) : (
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/50">
                    {project.proofBadge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
