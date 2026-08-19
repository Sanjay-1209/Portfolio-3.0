import React from 'react';
import { Sparkles, ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface ConversionCTAProps {
  onNavigate: (page: PageId) => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#EBE7DE] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] p-8 sm:p-12 lg:p-16 shadow-lg text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F1EA]/10 text-[#F4F1EA] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#F4F1EA]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#B85D19]" />
              Initiate Commercial Engagement
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-light text-[#F4F1EA] tracking-tight leading-tight">
              Have an Operational Problem? <br />
              Let’s Solve It Together.
            </h2>

            <p className="text-sm sm:text-base font-serif text-[#F4F1EA]/80 max-w-xl mx-auto leading-relaxed">
              Whether you need to eliminate manual spreadsheet wrangling, deploy an executive BI dashboard, optimize cloud queries, or launch a custom web platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('work-with-me')}
                className="px-8 py-3.5 bg-[#F4F1EA] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-[0.18em] flex items-center gap-2 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Work With Me / Request a Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Consulting%20Inquiry`}
                className="px-6 py-3.5 bg-transparent hover:bg-[#F4F1EA]/10 text-[#F4F1EA] font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-[#F4F1EA]/30 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-transparent hover:bg-[#F4F1EA]/10 text-[#F4F1EA]/80 hover:text-[#F4F1EA] font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-[#F4F1EA]/30 flex items-center gap-1.5 transition-all"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#F4F1EA]/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-sans text-[#F4F1EA]/60">
              <span>Direct: <strong className="text-[#F4F1EA]">{PERSONAL_INFO.phone}</strong></span>
              <span>•</span>
              <span>Email: <strong className="text-[#F4F1EA]">{PERSONAL_INFO.email}</strong></span>
              <span>•</span>
              <span>Location: <strong className="text-[#F4F1EA]">Chennai, India / Remote Worldwide</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
