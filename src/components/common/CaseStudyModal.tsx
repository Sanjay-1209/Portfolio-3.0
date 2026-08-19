import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#F4F1EA] border border-[#1C1C1C]/30 shadow-2xl overflow-hidden my-8 text-[#1C1C1C] flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1C1C]/15 bg-[#EBE7DE]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 bg-white text-[#1C1C1C] border border-[#1C1C1C]/10">
              {project.category}
            </span>
            <span className="text-xs text-[#1C1C1C]/60 font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#1C1C1C]/70 hover:text-[#1C1C1C] hover:bg-[#1C1C1C]/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">{project.title}</h2>
            <p className="text-sm font-serif text-[#1C1C1C]/80 mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#1C1C1C]/15 shadow-sm">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 block mb-1">
                The Operational Problem
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 bg-white border border-[#1C1C1C]/15 shadow-sm">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B85D19] block mb-1">
                The Engineering Architecture
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Detailed Approach */}
          <div>
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#1C1C1C] flex items-center gap-2 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#B85D19]" />
              Engineering Approach & Execution Phases
            </h3>
            <div className="space-y-2.5">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-[#1C1C1C]/10">
                  <div className="w-5 h-5 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center font-sans font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-sans text-[#1C1C1C]/80 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Outcomes & Impact */}
          <div className="p-4 bg-white border border-[#1C1C1C]/15 shadow-sm">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#B85D19] flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Business Impact & Outcomes
            </h3>
            <ul className="space-y-2">
              {project.impact.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-serif text-[#1C1C1C]/85">
                  <span className="text-[#B85D19] font-bold">✓</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/60 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Technologies & Tooling
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="text-xs font-sans px-2.5 py-1 bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-[#1C1C1C]/15 bg-[#EBE7DE] flex flex-wrap items-center justify-between gap-3">
          <div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] flex items-center gap-2 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Platform
              </a>
            ) : (
              <span className="text-xs font-serif italic text-[#1C1C1C]/60">
                {project.proofBadge || 'Enterprise Portfolio Case Study'}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wider bg-white hover:bg-[#F4F1EA] text-[#1C1C1C] border border-[#1C1C1C]/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
