import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, ArrowUpRight, CheckCircle2, ShieldCheck, Database, Globe2, Code2 } from 'lucide-react';
import { PERSONAL_INFO, VERIFIED_METRICS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface HeroSectionProps { onNavigate: (page: PageId) => void; onOpenResume: () => void; }

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 lg:pt-30 lg:pb-14 border-b border-black/10 bg-[#FAFAF8] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 78% 12%, rgba(255,216,77,.22), transparent 26%), linear-gradient(rgba(17,17,17,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,.025) 1px, transparent 1px)', backgroundSize: 'auto, 34px 34px, 34px 34px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-black/10 font-sans">
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[.18em] text-black/50">
            <span className="font-extrabold text-black">Sanjay Dharan</span><span>•</span><span>Chennai / Remote</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[.16em] font-bold"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>Available for projects</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1A8] border border-[#E2C84A]/40 px-3 py-1.5 text-[10px] font-sans font-extrabold uppercase tracking-[.16em] text-[#4E4300]">
              <Globe2 className="w-3.5 h-3.5"/> Website Development • Data • Automation
            </div>
            <h1 className="mt-4 text-[39px] leading-[.98] sm:text-5xl lg:text-[62px] font-sans font-extrabold tracking-[-.055em] text-[#111] max-w-3xl">
              I build professional websites and business systems that <span className="relative inline-block">work.<span className="absolute left-0 right-0 bottom-0 h-2.5 bg-[#FFD84D] -z-10 rotate-[-1deg]"/></span>
            </h1>
            <p className="mt-4 text-sm sm:text-[16px] leading-7 text-black/65 font-sans max-w-2xl">
              End-to-end responsive websites, data analytics, dashboards, data engineering and automation—built around real business outcomes, clean UX and production-ready execution.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button onClick={() => onNavigate('work-with-me')} className="rounded-xl px-5 py-3 bg-[#111] hover:bg-[#282828] text-white text-xs font-sans font-extrabold flex items-center gap-2 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"><Sparkles className="w-4 h-4 text-[#FFD84D]"/>Start a Project<ArrowRight className="w-4 h-4"/></button>
              <button onClick={() => onNavigate('services')} className="rounded-xl px-5 py-3 bg-[#FFD84D] hover:bg-[#FFE171] text-[#111] text-xs font-sans font-extrabold flex items-center gap-2 transition-colors"><Globe2 className="w-4 h-4"/>Website & Services</button>
              <button onClick={() => onNavigate('projects')} className="rounded-xl px-4 py-3 bg-white border border-black/12 hover:border-black/30 text-[#111] text-xs font-sans font-bold transition-colors">View Work</button>
              <button onClick={onOpenResume} className="rounded-xl px-3.5 py-3 text-black/60 hover:text-black text-xs font-sans font-bold flex items-center gap-1.5"><FileText className="w-4 h-4"/>Resume</button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="rounded-xl border border-black/8 bg-white px-3 py-2.5 flex items-center gap-2"><Code2 className="w-4 h-4 text-[#B99A00]"/><span className="font-sans text-[11px] font-bold">Live production websites</span></div>
              <div className="rounded-xl border border-black/8 bg-white px-3 py-2.5 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#B99A00]"/><span className="font-sans text-[11px] font-bold">EY • Tacheon • Hyundai</span></div>
              <div className="rounded-xl border border-black/8 bg-white px-3 py-2.5 flex items-center gap-2"><Database className="w-4 h-4 text-[#B99A00]"/><span className="font-sans text-[11px] font-bold">Python • SQL • BI • React</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute -inset-3 bg-[#FFD84D]/30 rounded-[28px] rotate-2"/>
              <div className="relative rounded-[24px] bg-[#111] p-2.5 shadow-2xl">
                <div className="rounded-[18px] overflow-hidden bg-white">
                  <div className="relative aspect-[5/4] bg-[#EEE] overflow-hidden">
                    {!imgError ? <img src={PERSONAL_INFO.heroImage} alt="Sanjay Dharan — Website, Data & Automation Specialist" referrerPolicy="no-referrer" fetchPriority="high" decoding="async" className="w-full h-full object-cover object-top" onError={() => setImgError(true)} /> : <div className="h-full flex items-center justify-center bg-[#FFF8DA]"><span className="w-20 h-20 rounded-2xl bg-[#111] text-[#FFD84D] flex items-center justify-center font-sans font-extrabold text-2xl">SD</span></div>}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent pt-12 p-3.5 text-white">
                      <div className="flex items-end justify-between gap-3"><div><div className="font-sans font-extrabold text-base">Sanjay Dharan</div><div className="font-sans text-[10px] text-white/65 mt-0.5">Web • Data • Automation • Digital Solutions</div></div><a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FFD84D] text-[#111] flex items-center justify-center"><ArrowUpRight className="w-4 h-4"/></a></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-black/10">
                    <div className="bg-white p-3"><div className="font-sans text-lg font-extrabold">2+</div><div className="font-sans text-[9px] uppercase tracking-wider text-black/45">Years production exp.</div></div>
                    <div className="bg-[#FFF8DA] p-3"><div className="font-sans text-lg font-extrabold">2 Live</div><div className="font-sans text-[9px] uppercase tracking-wider text-black/45">Website case studies</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 border-t border-black/10">
          <div className="flex items-center gap-2 mb-3"><CheckCircle2 className="w-3.5 h-3.5 text-[#B99A00]"/><h2 className="text-[9px] sm:text-[10px] font-sans font-extrabold uppercase tracking-[.18em] text-black/50">Verified production outcomes</h2></div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            {VERIFIED_METRICS.map((metric) => <div key={metric.label} className="rounded-xl p-2.5 sm:p-3 bg-white border border-black/8 hover:border-[#D4B200]/50 transition-colors"><div className="text-lg sm:text-xl font-sans font-extrabold text-[#111]">{metric.value}</div><div className="text-[9px] sm:text-[10px] font-sans font-bold text-black/65 mt-0.5 leading-tight">{metric.label}</div><div className="text-[8px] text-black/35 font-sans uppercase tracking-wider mt-1 hidden sm:block">{metric.company}</div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
};
