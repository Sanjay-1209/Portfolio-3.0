import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EBE7DE] border-t border-[#1C1C1C]/20 text-[#1C1C1C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-[#1C1C1C]/20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#1C1C1C]/60 block mb-1">
              Vol. 2026 // Technical Portfolio & Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight font-light text-[#1C1C1C]">
              Sanjay Dharan
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#1C1C1C]/60 block">
              Based in Chennai, India
            </span>
            <span className="text-xs font-sans font-medium text-[#1C1C1C]">
              Open for Global Engagements & Roles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-12 border-b border-[#1C1C1C]/15">
          {/* Col 1 & 2: Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#1C1C1C] flex items-center justify-center font-bold text-[#F4F1EA] font-serif text-xs">
                SD
              </div>
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#1C1C1C]">
                Data Analyst & Automation Specialist
              </span>
            </div>

            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/75 max-w-md leading-relaxed">
              Transforming complex corporate telemetry, fragmented spreadsheets, and repetitive operational bottlenecks into hardened analytics, automated pipelines, and measurable outcomes.
            </p>

            <div className="pt-2 text-xs font-sans text-[#1C1C1C]/70 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#1C1C1C]" />
              <span>Chennai, Tamil Nadu, India • Remote Worldwide</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#1C1C1C]">Sections</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => handleNav('home')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Cover & Highlights</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Dossier & Philosophy</button>
              </li>
              <li>
                <button onClick={() => handleNav('experience')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Track Record (EY, Tacheon, Hyundai)</button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Case Studies & Deployments</button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Commercial Services (12)</button>
              </li>
              <li>
                <button onClick={() => handleNav('recommendations')} className="hover:underline text-[#1C1C1C]/80 hover:text-[#1C1C1C]">Client Recommendations</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#1C1C1C]">Core Capabilities</h4>
            <ul className="space-y-2 text-xs font-sans text-[#1C1C1C]/75">
              <li>Executive Dashboards (Power BI / Tableau)</li>
              <li>Data Prep Automation (Python / SQL)</li>
              <li>ETL & BigQuery Cost Optimization</li>
              <li>B2B Quotation Engines</li>
              <li>Production Web Platforms</li>
              <li>Audit Anomaly Detection</li>
            </ul>
          </div>

          {/* Col 5: Connect & Convert */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#1C1C1C]">Direct Channels</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-[#1C1C1C]/85 hover:text-[#1C1C1C] hover:underline truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#1C1C1C] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-[#1C1C1C]/85 hover:text-[#1C1C1C] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1C1C1C] shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1C1C1C]/85 hover:text-[#1C1C1C] hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('work-with-me')}
                  className="w-full py-2 px-3 text-[11px] uppercase tracking-[0.15em] font-bold bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Work With Me
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1C1C1C]/60">
          <div>
            &copy; {currentYear} Sanjay Dharan. All rights reserved. Designed in the Editorial Aesthetic.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenResume} className="hover:text-[#1C1C1C] hover:underline flex items-center gap-1">
              <FileText className="w-3 h-3 text-[#1C1C1C]" />
              Official Resume
            </button>
            <span>•</span>
            <button onClick={() => handleNav('work-with-me')} className="hover:text-[#1C1C1C] hover:underline">
              Project Consultation
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-[#1C1C1C] hover:underline">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
