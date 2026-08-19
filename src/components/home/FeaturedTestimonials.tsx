import React from 'react';
import { ArrowRight, Quote, ExternalLink } from 'lucide-react';
import { RECOMMENDATIONS, PERSONAL_INFO } from '../../data/portfolioData';
import { CompanyLogo } from '../common/CompanyLogo';
import { AvatarImage } from '../common/AvatarImage';
import { PageId } from '../layout/Navbar';

interface FeaturedTestimonialsProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturedTestimonials: React.FC<FeaturedTestimonialsProps> = ({ onNavigate }) => {
  const curated = [
    RECOMMENDATIONS.find(r => r.id === 'kishor') || RECOMMENDATIONS[0],
    RECOMMENDATIONS.find(r => r.id === 'arthitha-ravindran') || RECOMMENDATIONS[2],
    RECOMMENDATIONS.find(r => r.id === 'vishnu-bhaskara') || RECOMMENDATIONS[3]
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F4F1EA] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
              Chapter VI // Letters of Endorsement
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
              Colleague & Lead Recommendations
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              Authentic endorsements from senior data leads and technical architects at EY, Tacheon, and Hyundai.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('recommendations')}
              className="text-xs font-sans uppercase tracking-wider font-bold text-[#F4F1EA] bg-[#1C1C1C] hover:bg-[#333333] px-4 py-2.5 flex items-center gap-1.5 transition-all shadow-sm"
            >
              All 5 Recommendations <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curated.map((rec) => (
            <div
              key={rec.id}
              className="bg-white border border-[#1C1C1C]/15 p-6 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Company logo top */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1C1C1C]/10 mb-4">
                  <CompanyLogo companyKey={rec.companyKey} size="sm" />
                  <span className="text-[10px] font-mono text-[#1C1C1C]/60">{rec.date}</span>
                </div>

                <Quote className="w-5 h-5 text-[#B85D19]/60 mb-2" />

                <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 italic leading-relaxed line-clamp-6">
                  "{rec.quote}"
                </p>

                <div className="mt-3 p-2.5 bg-[#F4F1EA] border border-[#1C1C1C]/10 text-xs font-serif italic text-[#B85D19] font-medium">
                  "{rec.highlightPhrase}"
                </div>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-[#1C1C1C]/10 flex items-center gap-3">
                <AvatarImage
                  src={rec.avatarUrl}
                  alt={rec.name}
                  name={rec.name}
                  size="md"
                  className="border-[#1C1C1C]/20"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-sans font-bold text-[#1C1C1C] truncate group-hover:text-[#B85D19] transition-colors">
                    {rec.name}
                  </h4>
                  <p className="text-[11px] font-sans text-[#1C1C1C]/70 truncate">{rec.role}</p>
                  <span className="text-[10px] font-sans text-[#1C1C1C]/50 block truncate">{rec.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External LinkedIn recommendation CTA */}
        <div className="mt-10 text-center">
          <a
            href={PERSONAL_INFO.linkedinRecommendationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline"
          >
            Verify endorsements directly on LinkedIn Profile <ExternalLink className="w-3.5 h-3.5 text-[#B85D19]" />
          </a>
        </div>
      </div>
    </section>
  );
};
