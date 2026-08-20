import React from 'react';
import { Sparkles, ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface ConversionCTAProps {
  onNavigate: (page: PageId) => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#FFF8DA] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] text-[#FAFAF8] border border-[#1C1C1C] p-8 sm:p-12 lg:p-16 shadow-lg text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAFAF8]/10 text-[#FAFAF8] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#FAFAF8]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A600]" />
              Initiate Commercial Engagement
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-light text-[#FAFAF8] tracking-tight leading-tight">
              Have an Operational Problem? <br />
              Let’s Solve It Together.
            </h2>

            <p className="text-sm sm:text-base font-serif text-[#FAFAF8]/80 max-w-xl mx-auto leading-relaxed">
              Whether you need to eliminate manual spreadsheet wrangling, deploy an executive BI dashboard, optimize cloud queries, or launch a custom web platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('work-with-me')}
                className="px-8 py-3.5 bg-[#FAFAF8] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-[0.18em] flex items-center gap-2 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Work With Me / Request a Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Consulting%20Inquiry`}
                className="px-6 py-3.5 bg-transparent hover:bg-[#FAFAF8]/10 text-[#FAFAF8] font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-[#FAFAF8]/30 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-transparent hover:bg-[#FAFAF8]/10 text-[#FAFAF8]/80 hover:text-[#FAFAF8] font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-[#FAFAF8]/30 flex items-center gap-1.5 transition-all"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#FAFAF8]/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-sans text-[#FAFAF8]/60">
              <span>Direct: <strong className="text-[#FAFAF8]">{PERSONAL_INFO.phone}</strong></span>
              <span>•</span>
              <span>Email: <strong className="text-[#FAFAF8]">{PERSONAL_INFO.email}</strong></span>
              <span>•</span>
              <span>Location: <strong className="text-[#FAFAF8]">Chennai, India / Remote Worldwide</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
