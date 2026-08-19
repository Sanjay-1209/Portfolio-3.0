import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, ArrowUpRight, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { PERSONAL_INFO, VERIFIED_METRICS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#1C1C1C]/15 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cover Story Top Issue Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1C1C1C]/15 text-[10px] uppercase tracking-[0.25em] font-sans text-[#1C1C1C]/60">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#1C1C1C]">Issue 2026</span>
            <span>//</span>
            <span>Technical Advisory & Engineering</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span className="text-[#1C1C1C] font-semibold">Available for Client Engagements</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block">
                Sanjay Dharan — Dossier & Practice
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light italic font-serif leading-[0.96] tracking-tight text-[#1C1C1C]">
                Transforming Ambiguous Data Into Commercial Clarity.
              </h1>
            </div>

            {/* Sub-headline / Essay excerpt */}
            <p className="text-base sm:text-lg text-[#1C1C1C]/80 font-serif leading-relaxed max-w-2xl">
              Specializing in Data Analytics, BigQuery & Cloud Engineering, and Custom Automation Systems. Turning messy corporate spreadsheets into <strong className="text-[#1C1C1C] font-semibold italic">executive dashboards</strong>, <strong className="text-[#1C1C1C] font-semibold italic">automated ETL pipelines</strong>, and dependable software utilities.
            </p>

            {/* Action Buttons in Editorial Styling */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('work-with-me')}
                className="px-6 py-3.5 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] text-xs uppercase tracking-[0.18em] font-sans font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#F4F1EA]" />
                Work With Me
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3.5 bg-white hover:bg-[#EBE7DE] text-[#1C1C1C] text-xs uppercase tracking-[0.15em] font-sans font-semibold border border-[#1C1C1C]/25 flex items-center gap-2 transition-all"
              >
                All 12 Services
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="px-4 py-3.5 text-[#1C1C1C] hover:bg-[#1C1C1C]/5 text-xs uppercase tracking-[0.15em] font-sans font-semibold transition-colors"
              >
                Case Studies
              </button>

              <button
                onClick={onOpenResume}
                className="px-3.5 py-3.5 text-[#1C1C1C]/70 hover:text-[#1C1C1C] text-xs uppercase tracking-[0.15em] font-sans font-semibold flex items-center gap-1.5 transition-colors border border-transparent hover:border-[#1C1C1C]/20"
                title="Download verified resume"
              >
                <FileText className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Quick credentials banner */}
            <div className="pt-4 border-t border-[#1C1C1C]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-[#1C1C1C]/70">
              <span className="flex items-center gap-1.5 text-[#1C1C1C]">
                <CheckCircle2 className="w-4 h-4 text-[#B85D19]" />
                <strong>2+ Years</strong> Enterprise Production
              </span>
              <span className="flex items-center gap-1.5 text-[#1C1C1C]">
                <ShieldCheck className="w-4 h-4 text-[#1C1C1C]" />
                Proven at <strong>EY, Tacheon & Hyundai</strong>
              </span>
              <span className="flex items-center gap-1.5 text-[#1C1C1C]">
                <Database className="w-4 h-4 text-[#8C7E6A]" />
                <strong>Python • SQL • Tableau • Power BI</strong>
              </span>
            </div>
          </div>

          {/* Right Hero Column: 5 Cols — Editorial Plate / Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="bg-white border border-[#1C1C1C]/20 p-4 shadow-sm">
                
                {/* Image Container with Paper Border */}
                <div className="relative aspect-[4/5] bg-[#EBE7DE] border border-[#1C1C1C]/15 overflow-hidden flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={PERSONAL_INFO.heroImage}
                      alt="Sanjay Dharan — Data Analyst & Automation Specialist"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#EBE7DE] text-center">
                      <div className="w-20 h-20 bg-[#1C1C1C] text-[#F4F1EA] font-serif text-2xl flex items-center justify-center mb-3">
                        SD
                      </div>
                      <h3 className="font-serif italic text-xl text-[#1C1C1C]">Sanjay Dharan</h3>
                      <p className="text-[11px] uppercase tracking-widest text-[#B85D19] mt-1 font-sans">Data & Automation Specialist</p>
                    </div>
                  )}

                  {/* Caption on image bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1C1C1C]/90 backdrop-blur-sm p-3 text-[#F4F1EA] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-sans font-bold tracking-wide">Sanjay Dharan</div>
                      <div className="text-[10px] text-[#F4F1EA]/70 font-mono">B.Tech Artificial Intelligence & Data Science</div>
                    </div>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-[#F4F1EA] text-[#1C1C1C] hover:bg-white transition-colors"
                      title="View LinkedIn Profile"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Editorial Monograph stats */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left pt-2 border-t border-[#1C1C1C]/10">
                  <div className="p-2 bg-[#F4F1EA] border border-[#1C1C1C]/10">
                    <div className="text-lg font-serif italic font-bold text-[#1C1C1C]">15% Lift</div>
                    <div className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60 leading-tight">Pipeline Velocity at EY</div>
                  </div>
                  <div className="p-2 bg-[#F4F1EA] border border-[#1C1C1C]/10">
                    <div className="text-lg font-serif italic font-bold text-[#1C1C1C]">50% Cut</div>
                    <div className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60 leading-tight">Audit Cycles at Hyundai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Impact Metrics Banner */}
        <div className="mt-14 pt-8 border-t border-[#1C1C1C]/15">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#1C1C1C]"></span>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1C1C1C]/70 font-sans">
              Verified Production Metrics & Numerical Outcomes
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VERIFIED_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/40 transition-colors group"
              >
                <div className="text-xl sm:text-2xl font-serif italic font-bold text-[#1C1C1C]">
                  {metric.value}
                </div>
                <div className="text-xs font-sans font-bold text-[#1C1C1C] mt-1 leading-tight">
                  {metric.label}
                </div>
                <div className="text-[10px] text-[#1C1C1C]/60 font-sans uppercase tracking-wider mt-1">
                  {metric.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
