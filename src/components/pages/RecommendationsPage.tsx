import React from 'react';
import { Quote, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { RECOMMENDATIONS, PERSONAL_INFO } from '../../data/portfolioData';
import { CompanyLogo } from '../common/CompanyLogo';
import { AvatarImage } from '../common/AvatarImage';
import { PageId } from '../layout/Navbar';

interface RecommendationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  // Group strictly by company in exact order: 1. EY, 2. Tacheon, 3. Hyundai
  const eyRecommendations = RECOMMENDATIONS.filter(r => r.companyKey === 'ey');
  const tacheonRecommendations = RECOMMENDATIONS.filter(r => r.companyKey === 'tacheon');
  const hyundaiRecommendations = RECOMMENDATIONS.filter(r => r.companyKey === 'hyundai');

  const groups = [
    {
      companyName: 'Ernst & Young GDS',
      companyKey: 'ey',
      subtitle: 'Endorsements from Senior Technical Architect & Integration Leads',
      recommendations: eyRecommendations
    },
    {
      companyName: 'Tacheon Business Growth Consulting',
      companyKey: 'tacheon',
      subtitle: 'Endorsement from Growth Practice Leadership & Collaborators',
      recommendations: tacheonRecommendations
    },
    {
      companyName: 'Hyundai Motor India Ltd.',
      companyKey: 'hyundai',
      subtitle: 'Endorsements from Operational Audit & Supply Chain Team Leads',
      recommendations: hyundaiRecommendations
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <ShieldCheck className="w-3 h-3 text-[#B85D19]" />
          Chapter IV // Letters of Endorsement
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tight text-[#1C1C1C] leading-[1.05]">
          Leadership Endorsements & Recommendations
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Verifiable testimonials and professional recommendations from managers, technology architects, and cross-functional team leads at Ernst & Young, Tacheon, and Hyundai.
        </p>
      </div>

      {/* External LinkedIn Verification Banner */}
      <div className="p-5 bg-white border border-[#1C1C1C]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center font-bold text-xs">
            in
          </div>
          <div>
            <h3 className="text-sm font-sans font-bold text-[#1C1C1C]">All Testimonials Are Publicly Verifiable on LinkedIn</h3>
            <p className="text-xs font-serif text-[#1C1C1C]/70">View genuine recommendation dates and complete lead profiles.</p>
          </div>
        </div>

        <a
          href={PERSONAL_INFO.linkedinRecommendationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 shadow-sm"
        >
          <span>Open LinkedIn Endorsements</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grouped Blocks: Strictly 1. EY -> 2. Tacheon -> 3. Hyundai */}
      <div className="space-y-16">
        {groups.map((group, gIdx) => (
          <div key={group.companyKey} className="space-y-6">
            {/* Company Group Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1C1C1C]/15">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1C1C1C] bg-[#EBE7DE] px-2.5 py-1 border border-[#1C1C1C]/10">
                  Dossier 0{gIdx + 1}
                </span>
                <CompanyLogo companyKey={group.companyKey} size="md" />
              </div>
              <p className="text-xs font-serif text-[#1C1C1C]/70">
                {group.subtitle}
              </p>
            </div>

            {/* Recommendation Cards */}
            <div className={`grid grid-cols-1 ${group.recommendations.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl'} gap-6`}>
              {group.recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-white border border-[#1C1C1C]/15 p-6 sm:p-8 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#1C1C1C]/60 pb-3 border-b border-[#1C1C1C]/10">
                      <span className="text-[#1C1C1C] font-sans font-semibold flex items-center gap-1 text-[11px] uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Verified Endorsement
                      </span>
                      <span className="font-mono text-[10px]">{rec.date}</span>
                    </div>

                    <Quote className="w-6 h-6 text-[#B85D19]/60" />

                    <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 italic leading-relaxed">
                      "{rec.quote}"
                    </p>

                    {/* Highlight Box */}
                    <div className="p-3 bg-[#F4F1EA] border border-[#1C1C1C]/10 text-xs font-serif italic text-[#B85D19] font-medium">
                      "{rec.highlightPhrase}"
                    </div>
                  </div>

                  {/* Author Profile */}
                  <div className="mt-6 pt-5 border-t border-[#1C1C1C]/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <AvatarImage
                        src={rec.avatarUrl}
                        alt={rec.name}
                        name={rec.name}
                        size="md"
                        className="border-[#1C1C1C]/20"
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-sans font-bold text-[#1C1C1C] truncate group-hover:text-[#B85D19] transition-colors">
                          {rec.name}
                        </h4>
                        <p className="text-xs font-sans text-[#1C1C1C]/70 truncate">{rec.role}</p>
                        <span className="text-[10px] font-sans text-[#1C1C1C]/50 block truncate">{rec.relationship}</span>
                      </div>
                    </div>

                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F4F1EA] hover:bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/15 transition-colors shrink-0"
                      title={`View ${rec.name}'s LinkedIn profile`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Section */}
      <div className="p-8 bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] text-center space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F4F1EA]">
          Ready to Work With a Proven Data & Automation Partner?
        </h3>
        <p className="text-xs sm:text-sm font-serif text-[#F4F1EA]/80 max-w-xl mx-auto">
          Let's discuss your project requirement, pipeline objectives, or dashboard needs.
        </p>
        <button
          onClick={() => onNavigate('work-with-me')}
          className="px-6 py-3 bg-[#F4F1EA] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          Work With Me
        </button>
      </div>
    </div>
  );
};
