import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';
import { EXPERIENCES } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface CompaniesStripProps {
  onNavigate: (page: PageId) => void;
}

export const CompaniesStrip: React.FC<CompaniesStripProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 bg-[#FFF8DA] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C7A600] font-sans block mb-1">
              Chapter I // Verified Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans tracking-tight text-[#1C1C1C]">
              Enterprise & Growth Engineering Experience
            </h2>
          </div>

          <button
            onClick={() => onNavigate('experience')}
            className="text-xs font-sans uppercase tracking-[0.15em] font-semibold text-[#1C1C1C] hover:underline flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            Chronological Experience <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onNavigate('experience')}
              className="p-6 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/50 transition-all cursor-pointer group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]/10">
                  <CompanyLogo companyKey={exp.companyLogoKey} size="sm" />
                  <span className="text-[10px] font-mono text-[#1C1C1C]/60 bg-[#FAFAF8] px-2 py-0.5 border border-[#1C1C1C]/10">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-[#1C1C1C] group-hover:text-[#C7A600] transition-colors leading-snug">
                  {exp.role}
                </h3>
                <p className="text-xs font-sans text-[#1C1C1C]/70 mt-2 line-clamp-2 leading-relaxed">
                  {exp.context}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1C1C1C]/10 flex items-center justify-between text-xs font-sans">
                <span className="text-[#1C1C1C] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A600]" />
                  {exp.verifiedImpact[0]?.metric}
                </span>
                <span className="text-[#1C1C1C]/60 group-hover:text-[#1C1C1C] transition-colors flex items-center gap-0.5 text-[11px] uppercase tracking-wider font-semibold">
                  Dossier <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
