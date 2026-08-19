import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export type PageId = 'home' | 'about' | 'experience' | 'projects' | 'services' | 'recommendations' | 'work-with-me' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'work-with-me', label: 'Work With Me' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#1C1C1C]/15 py-3.5 shadow-sm'
          : 'bg-[#F4F1EA]/85 backdrop-blur-sm border-b border-[#1C1C1C]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#1C1C1C] flex items-center justify-center font-bold text-[#F4F1EA] font-serif text-sm tracking-tighter shadow-sm transition-transform group-hover:scale-105">
            SD
          </div>
          <div>
            <div className="font-bold text-sm tracking-[0.15em] text-[#1C1C1C] uppercase font-sans flex items-center gap-1.5">
              <span>Sanjay Dharan</span>
            </div>
            <p className="text-[10px] text-[#1C1C1C]/60 font-mono uppercase tracking-[0.2em] -mt-0.5">
              Data & Automation // Folio
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[11px] uppercase tracking-[0.2em] font-sans transition-all duration-150 relative py-1 ${
                  isActive
                    ? 'text-[#1C1C1C] font-bold border-b-2 border-[#1C1C1C]'
                    : 'text-[#1C1C1C]/70 hover:text-[#1C1C1C] font-medium'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] font-sans font-semibold text-[#1C1C1C] hover:bg-[#1C1C1C]/10 border border-[#1C1C1C]/30 flex items-center gap-1.5 transition-all"
            title="View & Download Verified Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#1C1C1C]" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => handleNavClick('work-with-me')}
            className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] font-sans font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              currentPage === 'work-with-me'
                ? 'bg-[#B85D19] text-white border border-[#B85D19]'
                : 'bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] border border-[#1C1C1C]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4F1EA]" />
            <span>Work With Me</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('work-with-me')}
            className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-[#1C1C1C] text-[#F4F1EA] flex items-center gap-1"
          >
            <span>Hire</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1C1C1C] border border-[#1C1C1C]/20 bg-[#EBE7DE]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EBE7DE] border-b border-[#1C1C1C]/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2.5 text-[11px] uppercase tracking-widest font-sans text-left transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1C1C1C] text-[#F4F1EA] font-bold'
                      : 'bg-[#F4F1EA] text-[#1C1C1C] hover:bg-white border border-[#1C1C1C]/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#F4F1EA]"></div>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1C1C1C]/15 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#1C1C1C] bg-[#F4F1EA] border border-[#1C1C1C]/20 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#1C1C1C]" />
              View Resume
            </button>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#1C1C1C] bg-[#F4F1EA] border border-[#1C1C1C]/20 flex items-center justify-center gap-1.5"
            >
              LinkedIn
              <ArrowUpRight className="w-3 h-3 text-[#1C1C1C]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
