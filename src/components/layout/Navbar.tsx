import React, { useEffect, useState } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export type PageId = 'home' | 'about' | 'experience' | 'projects' | 'services' | 'recommendations' | 'work-with-me' | 'contact';
interface NavbarProps { currentPage: PageId; onNavigate: (page: PageId) => void; onOpenResume: () => void; }

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn=()=>setScrolled(window.scrollY>16); window.addEventListener('scroll',fn); return()=>window.removeEventListener('scroll',fn); },[]);
  const navLinks: { id: PageId; label: string }[] = [
    { id:'home',label:'Home'},{id:'about',label:'About'},{id:'experience',label:'Experience'},{id:'projects',label:'Work'},{id:'services',label:'Services'},{id:'recommendations',label:'Reviews'},{id:'contact',label:'Contact'}
  ];
  const go=(id:PageId)=>{onNavigate(id);setMobileMenuOpen(false)};

  return <header className={`fixed top-0 inset-x-0 z-40 border-b transition-all ${scrolled?'bg-[#FAFAF8]/95 backdrop-blur-xl border-black/10 shadow-sm':'bg-[#FAFAF8]/88 backdrop-blur-lg border-black/[.06]'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
      <button onClick={()=>go('home')} className="flex items-center gap-2.5 shrink-0 text-left">
        <span className="w-9 h-9 rounded-xl bg-[#111] text-[#FFD84D] flex items-center justify-center font-sans font-extrabold text-sm shadow-sm">SD</span>
        <span><span className="block font-sans font-extrabold text-[13px] tracking-[-.02em] text-[#111]">Sanjay Dharan</span><span className="block font-sans text-[9px] uppercase tracking-[.12em] text-black/42 mt-0.5">Web • Data • Automation</span></span>
      </button>
      <nav className="hidden xl:flex items-center gap-1 rounded-full border border-black/8 bg-white p-1">
        {navLinks.map(link=><button key={link.id} onClick={()=>go(link.id)} className={`rounded-full px-3.5 py-2 text-[10px] uppercase tracking-[.1em] font-sans font-bold transition-colors ${currentPage===link.id?'bg-[#111] text-white':'text-black/55 hover:bg-[#FFF8DA] hover:text-black'}`}>{link.label}</button>)}
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={onOpenResume} className="hidden md:flex px-3 py-2 text-[10px] uppercase tracking-[.1em] font-sans font-bold text-black/60 hover:text-black items-center gap-1.5"><FileText className="w-3.5 h-3.5"/>Resume</button>
        <button onClick={()=>go('work-with-me')} className="hidden sm:flex rounded-xl bg-[#FFD84D] hover:bg-[#FFE16E] px-3.5 py-2.5 text-[10px] uppercase tracking-[.08em] font-sans font-extrabold text-[#111] items-center gap-1.5"><Sparkles className="w-3.5 h-3.5"/>Work With Me</button>
        <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden w-10 h-10 rounded-xl border border-black/10 bg-white flex items-center justify-center" aria-label="Toggle navigation menu">{mobileMenuOpen?<X className="w-5 h-5"/>:<Menu className="w-5 h-5"/>}</button>
      </div>
    </div>
    {mobileMenuOpen && <div className="xl:hidden border-t border-black/8 bg-[#FAFAF8] px-4 sm:px-6 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">{navLinks.map(link=><button key={link.id} onClick={()=>go(link.id)} className={`rounded-xl px-3 py-2.5 text-left text-[10px] uppercase tracking-[.08em] font-sans font-bold ${currentPage===link.id?'bg-[#111] text-white':'bg-white border border-black/8 text-black/65'}`}>{link.label}</button>)}</div>
      <div className="max-w-7xl mx-auto mt-2 flex gap-2 sm:hidden"><button onClick={onOpenResume} className="flex-1 rounded-xl border border-black/10 bg-white py-2.5 text-[10px] font-sans font-bold flex items-center justify-center gap-1.5"><FileText className="w-3.5 h-3.5"/>Resume</button><button onClick={()=>go('work-with-me')} className="flex-1 rounded-xl bg-[#FFD84D] py-2.5 text-[10px] font-sans font-extrabold flex items-center justify-center gap-1.5">Hire Me<ArrowUpRight className="w-3.5 h-3.5"/></button></div>
      <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="sr-only">Sanjay Dharan LinkedIn</a>
    </div>}
  </header>;
};
