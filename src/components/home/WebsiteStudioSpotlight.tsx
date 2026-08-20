import React from 'react';
import { ArrowRight, Check, ExternalLink, Globe2, MonitorSmartphone, Search, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

export const WebsiteStudioSpotlight: React.FC<{ onNavigate: (page: PageId) => void; onSelectService: (id: string) => void }> = ({ onNavigate, onSelectService }) => {
  const webProjects = PROJECTS.filter((p) => ['flora-farming', 'uyirveda-healthcare'].includes(p.id));
  const capabilities = [
    [MonitorSmartphone, 'Mobile-first UI/UX', 'Compact, premium layouts that feel designed for every screen.'],
    [Search, 'SEO + AI discoverability', 'Semantic content, metadata, schema, crawlable summaries and clean information architecture.'],
    [Zap, 'Speed & conversion', 'Fast loading, clear CTAs and short inquiry paths built around business outcomes.'],
    [ShieldCheck, 'Production ready', 'Testing, deployment, responsive QA and practical maintainability after launch.']
  ] as const;

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#101010] text-white overflow-hidden relative border-y border-black">
      <div className="absolute inset-0 opacity-35 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 18% 18%, rgba(255,216,77,.28), transparent 28%), radial-gradient(circle at 82% 70%, rgba(255,216,77,.11), transparent 25%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-6 lg:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD84D]/35 bg-[#FFD84D]/10 px-3 py-1 text-[10px] uppercase tracking-[.18em] font-sans font-bold text-[#FFE78C]">
              <Globe2 className="w-3.5 h-3.5"/> Priority Service — Website Building
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] leading-[1.02] font-sans font-extrabold tracking-[-.045em] max-w-xl">
              I build websites that look premium, load fast and <span className="text-[#FFD84D]">actually help the business.</span>
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-[15px] leading-7 text-white/68 max-w-xl">
              From strategy and visual design to responsive React development, SEO foundations, lead capture, QA and deployment. One end-to-end workflow instead of handing your business between multiple vendors.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
              {['React / TypeScript builds', 'Mobile-first responsive design', 'SEO & structured data', 'WhatsApp / inquiry conversion flows', 'Performance optimization', 'Deployment & production QA'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-sans text-white/80"><span className="w-5 h-5 rounded-full bg-[#FFD84D]/15 flex items-center justify-center"><Check className="w-3 h-3 text-[#FFD84D]"/></span>{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <button onClick={() => { onSelectService('web-development'); onNavigate('services'); }} className="rounded-xl bg-[#FFD84D] hover:bg-[#FFE173] text-[#111] px-5 py-3 font-sans text-xs font-extrabold flex items-center gap-2 transition-colors">Build My Website <ArrowRight className="w-4 h-4"/></button>
              <button onClick={() => onNavigate('projects')} className="rounded-xl border border-white/18 bg-white/[.04] hover:bg-white/[.08] text-white px-5 py-3 font-sans text-xs font-bold transition-colors">View Website Case Studies</button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[22px] bg-[#1A1A1A] border border-white/10 p-2.5 sm:p-3 shadow-2xl">
              <div className="rounded-[16px] bg-[#F8F8F5] text-[#111] overflow-hidden border border-black/10">
                <div className="h-9 px-3 flex items-center gap-1.5 bg-[#EEEEEA] border-b border-black/10"><i className="w-2 h-2 rounded-full bg-black/20"/><i className="w-2 h-2 rounded-full bg-black/20"/><i className="w-2 h-2 rounded-full bg-black/20"/><span className="ml-2 font-mono text-[8px] text-black/45">sanjay.dev / production-build</span></div>
                <div className="grid grid-cols-2 min-h-[270px]">
                  <div className="p-4 sm:p-5 border-r border-black/10 bg-white">
                    <span className="inline-flex px-2 py-1 rounded-full bg-[#FFF3B4] text-[8px] uppercase tracking-widest font-sans font-extrabold">Digital build system</span>
                    <h3 className="font-sans font-extrabold tracking-[-.035em] text-xl sm:text-2xl mt-3 leading-tight">Strategy → Design → Code → Launch.</h3>
                    <div className="mt-4 space-y-2">
                      {[['01','Information architecture'],['02','Responsive UI system'],['03','Conversion + SEO'],['04','QA & deployment']].map(([n,t])=><div key={n} className="p-2.5 rounded-lg border border-black/8 bg-[#FAFAF8]"><span className="font-mono text-[8px] text-black/35">{n}</span><div className="font-sans text-[10px] sm:text-xs font-bold mt-0.5">{t}</div></div>)}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 bg-[#FFF9DF]">
                    <div className="rounded-xl bg-[#111] text-white p-3 h-full relative overflow-hidden">
                      <div className="absolute -right-10 -top-8 w-28 h-28 bg-[#FFD84D] rounded-full blur-3xl opacity-30"/>
                      <Sparkles className="w-5 h-5 text-[#FFD84D]"/>
                      <div className="font-sans text-[9px] uppercase tracking-[.16em] text-white/45 mt-6">Live proof</div>
                      <div className="mt-2 space-y-2">
                        {webProjects.map((p) => <a key={p.id} href={p.liveUrl} target="_blank" rel="noreferrer" className="block rounded-lg border border-white/10 bg-white/[.06] p-2.5 hover:border-[#FFD84D]/40 transition-colors"><div className="font-sans text-[10px] sm:text-xs font-bold flex items-center justify-between gap-1">{p.id === 'flora-farming' ? 'Flora Farming' : 'Uyirveda Health Care'}<ExternalLink className="w-3 h-3 text-[#FFD84D]"/></div><div className="font-sans text-[8px] sm:text-[9px] text-white/45 mt-1 line-clamp-2">{p.tagline}</div></a>)}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[88%] bg-[#FFD84D]"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-2.5">
              {capabilities.map(([Icon, title, desc]) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.035] p-3"><Icon className="w-4 h-4 text-[#FFD84D]"/><div className="font-sans text-[11px] font-bold mt-2">{title}</div><div className="font-sans text-[9px] leading-4 text-white/45 mt-1 hidden sm:block">{desc}</div></div>)}
            </div>
            <div className="mt-2.5 rounded-xl border border-dashed border-[#FFD84D]/25 bg-[#FFD84D]/[.05] px-3.5 py-2.5 flex items-center justify-between gap-3">
              <div><div className="font-sans text-[10px] font-extrabold uppercase tracking-[.12em] text-[#FFE78C]">More builds are cooking</div><div className="font-sans text-[9px] text-white/45 mt-0.5">New client websites and digital products can be added here as they launch.</div></div>
              <span className="shrink-0 w-2 h-2 rounded-full bg-[#FFD84D] animate-pulse" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
