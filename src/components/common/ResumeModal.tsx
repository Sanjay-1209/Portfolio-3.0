import React, { useState } from 'react';
import { X, Printer, Check, Copy, ExternalLink, Briefcase, GraduationCap, Award, Code, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `
SANJAY DHARAN — OFFICIAL DOSSIER & RESUME
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summaryBio}

EXPERIENCE
${EXPERIENCES.map(e => `
• ${e.role} — ${e.company} (${e.duration})
  ${e.responsibilities.map(r => `  - ${r}`).join('\n')}
`).join('\n')}

EDUCATION
${EDUCATION.map(ed => `• ${ed.degree} — ${ed.institution}, ${ed.university} (${ed.duration})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#F4F1EA] border border-[#1C1C1C]/30 shadow-2xl overflow-hidden my-8 text-[#1C1C1C] flex flex-col max-h-[90vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1C1C]/15 bg-[#EBE7DE]">
          <div className="flex items-center gap-3">
            <h3 className="font-serif italic font-bold text-lg text-[#1C1C1C]">Sanjay Dharan — Official Dossier & Resume</h3>
            <span className="text-[10px] font-sans uppercase tracking-widest px-2 py-0.5 bg-white text-[#1C1C1C] border border-[#1C1C1C]/10 font-bold">Verified</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 text-xs font-sans uppercase tracking-wider font-semibold bg-white hover:bg-[#F4F1EA] text-[#1C1C1C] border border-[#1C1C1C]/20 flex items-center gap-1.5 transition-colors"
              title="Copy text version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-sans uppercase tracking-wider font-bold bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#1C1C1C]/70 hover:text-[#1C1C1C] hover:bg-[#1C1C1C]/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Resume View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Header section */}
          <div className="border-b border-[#1C1C1C]/15 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">{PERSONAL_INFO.name}</h1>
                <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#B85D19] mt-1">
                  Data Analyst | Data Engineer | Automation Specialist | Web Developer
                </p>
                <p className="text-xs font-sans text-[#1C1C1C]/70 mt-1">
                  {PERSONAL_INFO.location} • {PERSONAL_INFO.phone} • {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-sans">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-white hover:bg-[#EBE7DE] text-[#1C1C1C] flex items-center gap-1.5 transition-colors border border-[#1C1C1C]/20"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#B85D19]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white border border-[#1C1C1C]/10 text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed shadow-sm">
              <strong className="text-[#1C1C1C] font-sans uppercase text-[10px] tracking-wider block mb-1">Executive Summary:</strong> {PERSONAL_INFO.summaryBio}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#1C1C1C]/15 pb-2">
              <Briefcase className="w-4 h-4 text-[#B85D19]" />
              <h2 className="text-xl font-serif italic font-bold text-[#1C1C1C]">Professional Experience</h2>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-[#1C1C1C]/20 group hover:border-[#1C1C1C] transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#1C1C1C]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-serif italic font-bold text-lg text-[#1C1C1C]">{exp.role}</h3>
                    <span className="text-xs font-sans font-semibold text-[#1C1C1C] bg-white px-2 py-0.5 border border-[#1C1C1C]/10 w-fit">{exp.duration}</span>
                  </div>

                  <div className="text-xs font-sans font-bold text-[#1C1C1C]/80 mt-0.5">
                    {exp.company} <span className="text-[#1C1C1C]/50 font-normal">• {exp.location}</span>
                  </div>

                  <p className="text-xs font-serif text-[#1C1C1C]/70 italic mt-1.5">{exp.context}</p>

                  <ul className="mt-3 space-y-1.5 text-xs font-sans text-[#1C1C1C]/85">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#B85D19] font-bold mt-0.5">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact pills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.verifiedImpact.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-sans px-2.5 py-1 bg-white border border-[#1C1C1C]/15 text-[#1C1C1C]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        <strong>{item.metric}:</strong> {item.description}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-sans px-2 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1C1C1C]/15 pb-2">
                <GraduationCap className="w-4 h-4 text-[#B85D19]" />
                <h2 className="text-xl font-serif italic font-bold text-[#1C1C1C]">Education</h2>
              </div>

              {EDUCATION.map((edu, index) => (
                <div key={index} className="p-4 bg-white border border-[#1C1C1C]/15 shadow-sm">
                  <h3 className="font-serif font-bold text-sm text-[#1C1C1C]">{edu.degree}</h3>
                  <p className="text-xs font-sans text-[#B85D19] font-medium mt-0.5">{edu.institution}</p>
                  <p className="text-xs font-sans text-[#1C1C1C]/60">{edu.university} • {edu.duration}</p>

                  <div className="mt-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1C1C1C]/70">Coursework:</span>
                    <ul className="mt-1 space-y-1 text-xs font-sans text-[#1C1C1C]/75">
                      {edu.coursework.slice(0, 4).map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#B85D19]">•</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1C1C1C]/15 pb-2">
                <Award className="w-4 h-4 text-[#B85D19]" />
                <h2 className="text-xl font-serif italic font-bold text-[#1C1C1C]">Certifications</h2>
              </div>

              <div className="space-y-2.5">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="p-3 bg-white border border-[#1C1C1C]/15 flex items-center justify-between shadow-sm">
                    <div>
                      <h4 className="text-xs font-sans font-bold text-[#1C1C1C]">{cert.title}</h4>
                      <span className="text-[11px] font-sans text-[#1C1C1C]/60">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">Verified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Organized */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1C1C1C]/15 pb-2">
              <Code className="w-4 h-4 text-[#B85D19]" />
              <h2 className="text-xl font-serif italic font-bold text-[#1C1C1C]">Technical Competencies</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3.5 bg-white border border-[#1C1C1C]/15 shadow-sm">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-sans px-2 py-0.5 ${
                          s.highlight
                            ? 'bg-[#1C1C1C] text-[#F4F1EA] font-semibold'
                            : 'bg-[#F4F1EA] text-[#1C1C1C] border border-[#1C1C1C]/10'
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-[#1C1C1C]/15 bg-[#EBE7DE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-serif text-[#1C1C1C]/80">
            For direct inquiries: <strong className="text-[#1C1C1C]">{PERSONAL_INFO.email}</strong>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20from%20Portfolio%20Dossier`}
              className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] transition-colors shadow-sm"
            >
              Contact Sanjay Dharan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
