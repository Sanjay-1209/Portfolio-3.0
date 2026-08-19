import React from 'react';
import { Sparkles, GraduationCap, Award, Compass, Brain, FileText } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  const principles = [
    {
      number: '01',
      title: 'Understand Before Automating',
      description: 'Automating a broken or misunderstood manual workflow produces bad outcomes faster. I first map the underlying business logic, edge cases, and human hand-offs before architecting scripts.'
    },
    {
      number: '02',
      title: 'Data Requires Commercial Context',
      description: 'Charts and tables are meaningless without commercial stakes. A 5% drop in velocity matters only when tied to specific revenue leakages, customer cohorts, and actionable fixes.'
    },
    {
      number: '03',
      title: 'Build for People & Maintainability',
      description: 'The best data pipeline or internal tool is one that non-technical team members can understand, operate, and trust daily without calling engineering for every small tweak.'
    },
    {
      number: '04',
      title: 'Continuous Technical Evolution',
      description: 'From Python and modern cloud warehouses (Snowflake, BigQuery) to full-stack web applications, I master the exact tools that solve real-world operational problems.'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Sparkles className="w-3 h-3 text-[#B85D19]" />
          Dossier & Technical Philosophy
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tight text-[#1C1C1C] leading-[1.05]">
          Bridging Commercial Questions, Data Architecture, and Automated Reality.
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          I am a data analyst, data engineer, and automation specialist based in Chennai, India. My practice focuses on turning fragmented corporate operations into reliable dashboards, automated data pipelines, and scalable digital utilities.
        </p>
      </div>

      {/* Deep Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 7 Cols */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-[#1C1C1C]/15 p-6 sm:p-8 space-y-4 text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed shadow-sm">
            <h2 className="text-2xl font-serif italic font-bold text-[#1C1C1C] pb-3 border-b border-[#1C1C1C]/10 flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#B85D19]" />
              The Professional Journey
            </h2>
            <p>
              Holding a <strong>B.Tech in Artificial Intelligence & Data Science</strong> from Anna University, my technical foundation combines applied mathematics, statistical modeling, database engineering, and modern web application development.
            </p>
            <p>
              Throughout my work at <strong>Ernst & Young GDS</strong>, <strong>Tacheon Business Growth Consulting</strong>, and <strong>Hyundai Motor India Ltd.</strong>, I discovered that the biggest pain point in most organizations is not a lack of data—it is fragmented spreadsheets, repetitive manual preparation, and reporting that fails to drive decisions.
            </p>
            <p>
              At EY, I translated commercial requirements into enterprise Tableau and Python analytics that contributed to a verified <strong>15% improvement in pipeline velocity</strong>. At Tacheon, customer behavioral models boosted conversion rates by <strong>20%</strong> while BigQuery SQL optimization reduced cloud query costs by <strong>30%</strong>. At Hyundai, my automated analytics pipelines cut manual data preparation by <strong>40%</strong> and slashed operational audit review cycles by <strong>50%</strong>.
            </p>
            <p>
              Beyond enterprise analytics, I build end-to-end production web platforms (such as <em>Flora Farming</em> and <em>Uyirveda Health Care</em>), custom quotation automation tools for B2B suppliers, and interactive internal utilities.
            </p>
          </div>

          {/* Core Principles */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#B85D19] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Four Core Working Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#1C1C1C]/15 space-y-2 shadow-sm">
                  <span className="text-xs font-serif italic font-bold text-[#B85D19]">{p.number}</span>
                  <h4 className="text-sm font-serif font-bold text-[#1C1C1C]">{p.title}</h4>
                  <p className="text-xs font-sans text-[#1C1C1C]/70 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 5 Cols - Education & Certifications */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Block */}
          <div className="bg-white border border-[#1C1C1C]/15 p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1C1C1C]/10">
              <GraduationCap className="w-5 h-5 text-[#1C1C1C]" />
              <h3 className="font-serif italic font-bold text-lg text-[#1C1C1C]">Formal Education</h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-2 font-sans">
                <h4 className="font-bold text-sm text-[#1C1C1C]">{edu.degree}</h4>
                <p className="text-xs text-[#B85D19] font-medium">{edu.institution}</p>
                <p className="text-xs text-[#1C1C1C]/60">{edu.university} • {edu.duration}</p>
                
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-wider block mb-1">Key Curriculum:</span>
                  <ul className="space-y-1 text-xs text-[#1C1C1C]/75">
                    {edu.coursework.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5">
                        <span className="text-[#B85D19]">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Certifications */}
          <div className="bg-white border border-[#1C1C1C]/15 p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1C1C1C]/10">
              <Award className="w-5 h-5 text-[#1C1C1C]" />
              <h3 className="font-serif italic font-bold text-lg text-[#1C1C1C]">Verified Certifications</h3>
            </div>

            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3 bg-[#F4F1EA] border border-[#1C1C1C]/10 flex items-center justify-between font-sans">
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1C1C]">{cert.title}</h4>
                    <span className="text-[11px] text-[#1C1C1C]/60">{cert.issuer}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA Card */}
          <div className="p-6 bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] space-y-4 shadow-sm">
            <h4 className="text-lg font-serif italic text-[#F4F1EA]">Need Sanjay's verified dossier?</h4>
            <p className="text-xs font-serif text-[#F4F1EA]/75 leading-relaxed">
              You can view the complete verified resume or connect directly to discuss upcoming projects.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 text-xs font-sans font-bold uppercase tracking-wider bg-[#F4F1EA] text-[#1C1C1C] hover:bg-white transition-colors flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                View Resume
              </button>
              <button
                onClick={() => onNavigate('work-with-me')}
                className="px-3.5 py-2 text-xs font-sans font-bold uppercase tracking-wider text-[#F4F1EA] bg-transparent hover:bg-white/10 border border-white/20 transition-colors"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
