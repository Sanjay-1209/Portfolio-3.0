import React from 'react';
import { Briefcase, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { EXPERIENCES, VERIFIED_METRICS } from '../../data/portfolioData';
import { CompanyLogo } from '../common/CompanyLogo';
import { PageId } from '../layout/Navbar';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#FFF8DA] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Briefcase className="w-3 h-3 text-[#C7A600]" />
          Chapter I // Chronological Track Record
        </div>
        <h1 className="text-4xl sm:text-6xl font-sans tracking-tight text-[#1C1C1C] leading-[1.05]">
          Verified Enterprise Experience & Track Record
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Production roles across EY, Tacheon, and Hyundai where data modeling, cloud engineering, and workflow automation directly solved core bottlenecks.
        </p>
      </div>

      {/* Verified Metrics Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {VERIFIED_METRICS.map((metric, idx) => (
          <div key={idx} className="p-4 bg-white border border-[#1C1C1C]/15 shadow-sm">
            <div className="text-xl sm:text-2xl font-sans font-bold text-[#1C1C1C]">{metric.value}</div>
            <div className="text-xs font-sans font-bold text-[#1C1C1C] mt-1 leading-tight">{metric.label}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-sans uppercase tracking-wider mt-1">{metric.company}</div>
          </div>
        ))}
      </div>

      {/* Chronological Timeline Cards */}
      <div className="space-y-10">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-white border border-[#1C1C1C]/15 p-6 sm:p-6 lg:p-10 shadow-sm space-y-6 relative overflow-hidden group"
          >
            {/* Top Bar: Company Logo, Role, Duration */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1C1C1C]/15">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <CompanyLogo companyKey={exp.companyLogoKey} size="md" />
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60 bg-[#FAFAF8] px-2.5 py-1 border border-[#1C1C1C]/10">
                    {exp.location}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#1C1C1C] tracking-tight pt-2 group-hover:text-[#C7A600] transition-colors">
                  {exp.role}
                </h2>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAF8] text-[#1C1C1C] text-xs font-sans font-semibold border border-[#1C1C1C]/15">
                  <Calendar className="w-3.5 h-3.5 text-[#C7A600]" />
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* Context Summary */}
            <div className="p-4 bg-[#FAFAF8] border border-[#1C1C1C]/10 text-xs sm:text-sm font-serif text-[#1C1C1C]/85 italic">
              <strong>Role Objective:</strong> {exp.context}
            </div>

            {/* Verified Achievements & Numerical Impacts */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C7A600] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Numerical Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.verifiedImpact.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#1C1C1C]/15 space-y-1 shadow-sm">
                    <span className="text-xs font-sans font-bold text-[#1C1C1C] block uppercase tracking-wide">
                      ✓ {item.metric}
                    </span>
                    <p className="text-xs font-serif text-[#1C1C1C]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#1C1C1C]">
                Key Responsibilities & Deliverables
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="p-3.5 bg-[#FAFAF8] border border-[#1C1C1C]/10 flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#1C1C1C]/85 leading-relaxed">
                    <span className="text-[#C7A600] font-bold mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-[#1C1C1C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60 block mb-2">Technologies & Tooling:</span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-sans px-2.5 py-1 bg-[#FFF8DA] text-[#1C1C1C] border border-[#1C1C1C]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('projects')}
                className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A600]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 bg-[#1C1C1C] text-[#FAFAF8] border border-[#1C1C1C] text-center space-y-4 shadow-sm">
        <h3 className="text-2xl font-sans text-[#FAFAF8]">Looking for Sanjay's Full Employment Dossier?</h3>
        <p className="text-xs sm:text-sm font-serif text-[#FAFAF8]/80 max-w-xl mx-auto">
          Download the verified official resume or explore colleague recommendations to see direct feedback from leads and technical architects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenResume}
            className="px-5 py-2.5 bg-[#FAFAF8] text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
          >
            Download / View Resume
          </button>
          <button
            onClick={() => onNavigate('recommendations')}
            className="px-5 py-2.5 bg-transparent text-[#FAFAF8] font-sans font-semibold text-xs uppercase tracking-wider border border-white/20 hover:bg-white/10 transition-all"
          >
            View Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};
