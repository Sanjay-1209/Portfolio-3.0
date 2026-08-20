import React, { useState } from 'react';
import {
  Sparkles, Send, CheckCircle2, MessageSquare, Phone, Mail,
  Download, FileText, Calculator, ShieldCheck, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SERVICES } from '../../data/portfolioData';
import { InquiryFormData } from '../../types';
import { InteractiveQuotationPreview } from '../home/InteractiveQuotationPreview';

interface WorkWithMePageProps {
  initialService?: string;
}

const SERVICE_OPTIONS = [...SERVICES.map((service) => service.title), 'Not Sure / Need Consultation'];

export const WorkWithMePage: React.FC<WorkWithMePageProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Technology / Software',
    serviceRequired: initialService || SERVICE_OPTIONS[0],
    timeline: 'Within 2–4 Weeks',
    currentProblem: '',
    expectedOutcome: '',
    preferredContactMethod: 'Email'
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'estimator'>('form');

  const servicesList = SERVICE_OPTIONS;


  const industriesList = [
    'Technology / Software',
    'E-commerce / Retail',
    'Electrical & Hardware Supplier',
    'Manufacturing & Industrial',
    'Healthcare & Wellness',
    'Financial & Auditing Services',
    'Construction & Real Estate',
    'Agency / Consulting',
    'Agriculture / Food',
    'Other / SME'
  ];

  const handleChange = (field: keyof InquiryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.currentProblem) {
      alert('Please fill in your Name, Email, and Current Problem details.');
      return;
    }

    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#1C1C1C', '#C7A600', '#FAFAF8', '#2D5A27']
      });
    } catch {
      // ignore
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`
Hi Sanjay,

I'm reaching out regarding a project requirement:

NAME: ${formData.name}
COMPANY: ${formData.company || 'N/A'}
EMAIL: ${formData.email}
PHONE: ${formData.phone || 'N/A'}
INDUSTRY: ${formData.industry}
SERVICE REQUIRED: ${formData.serviceRequired}
TIMELINE: ${formData.timeline}
PREFERRED CONTACT METHOD: ${formData.preferredContactMethod}

CURRENT BUSINESS PROBLEM:
${formData.currentProblem}

EXPECTED OUTCOME / DELIVERABLES:
${formData.expectedOutcome || 'To be discussed during consultation'}

Looking forward to connecting.
    `.trim());

    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(`
Hi Sanjay! I saw your portfolio and want to discuss a project:
*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Service Needed:* ${formData.serviceRequired}
*Problem:* ${formData.currentProblem}
*Expected Outcome:* ${formData.expectedOutcome || 'N/A'}
    `.trim());

    const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  const handleDownloadBrief = () => {
    const briefContent = `
SANJAY DHARAN — PROJECT INQUIRY BRIEF
==================================================
Date: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}
Client Name: ${formData.name}
Company: ${formData.company || 'Individual'}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Industry: ${formData.industry}
Service Requested: ${formData.serviceRequired}
Target Timeline: ${formData.timeline}
Preferred Contact: ${formData.preferredContactMethod}

CURRENT BUSINESS PROBLEM:
--------------------------------------------------
${formData.currentProblem}

EXPECTED OUTCOME:
--------------------------------------------------
${formData.expectedOutcome || 'Standard delivery framework'}

==================================================
Direct Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
    `.trim();

    const blob = new Blob([briefContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Project_Brief_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#FFF8DA] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Sparkles className="w-3 h-3 text-[#C7A600]" />
          Chapter V // Direct Engagement & Scoping
        </div>
        <h1 className="text-4xl sm:text-6xl font-sans tracking-tight text-[#1C1C1C] leading-[1.05]">
          Have an Operational Problem? Let’s Solve It.
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Whether you need to eliminate spreadsheet friction, deploy executive reporting dashboards, or engineer custom tools, describe your target outcome.
        </p>
      </div>

      {/* Tabs Switcher: Brief Form vs Interactive Cost Estimator */}
      <div className="flex items-center gap-2 border-b border-[#1C1C1C]/15 pb-3">
        <button
          onClick={() => setActiveTab('form')}
          className={`px-4 py-2 text-xs font-sans uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
            activeTab === 'form'
              ? 'bg-[#1C1C1C] text-[#FAFAF8] shadow-sm'
              : 'bg-white text-[#1C1C1C] hover:bg-[#FFF8DA] border border-[#1C1C1C]/15'
          }`}
        >
          <FileText className="w-4 h-4" />
          Submit Project Inquiry Dossier
        </button>

        <button
          onClick={() => setActiveTab('estimator')}
          className={`px-4 py-2 text-xs font-sans uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
            activeTab === 'estimator'
              ? 'bg-[#1C1C1C] text-[#FAFAF8] shadow-sm'
              : 'bg-white text-[#1C1C1C] hover:bg-[#FFF8DA] border border-[#1C1C1C]/15'
          }`}
        >
          <Calculator className="w-4 h-4" />
          Interactive Quote & Scope Estimator
        </button>
      </div>

      {/* Tab 1: Project Inquiry Form */}
      {activeTab === 'form' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-[#1C1C1C]/15 p-6 sm:p-10 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Your Full Name <span className="text-[#C7A600]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Ramesh Sundaram"
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="e.g. Sundaram Electricals / Enterprise"
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Email Address <span className="text-[#C7A600]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Industry */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Industry / Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    >
                      {industriesList.map((ind, i) => (
                        <option key={i} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Service Required <span className="text-[#C7A600]">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => handleChange('serviceRequired', e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    >
                      {servicesList.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Current Problem */}
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                    What is your current operational bottleneck? <span className="text-[#C7A600]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.currentProblem}
                    onChange={(e) => handleChange('currentProblem', e.target.value)}
                    placeholder="e.g. We spend 15 hours every week combining 6 branch Excel files, or we need an automated quotation system for 200 hardware items..."
                    className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                  />
                </div>

                {/* Expected Outcome */}
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                    Expected Outcome / Deliverable Target
                  </label>
                  <textarea
                    rows={2}
                    value={formData.expectedOutcome}
                    onChange={(e) => handleChange('expectedOutcome', e.target.value)}
                    placeholder="e.g. Automated daily email PDF reports before 8:00 AM, or an executive Tableau dashboard..."
                    className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    >
                      <option value="Urgent (Within 1-2 Weeks)">Urgent (Within 1-2 Weeks)</option>
                      <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                      <option value="1–2 Months">1–2 Months</option>
                      <option value="Exploratory / Flexible">Exploratory / Flexible</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.preferredContactMethod}
                      onChange={(e) => handleChange('preferredContactMethod', e.target.value as any)}
                      className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/20 px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone">Phone Call</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1C1C] hover:bg-[#333333] text-[#FAFAF8] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#FAFAF8]" />
                  Submit Project Brief & Generate Transmission
                </button>
              </form>
            ) : (
              /* Success / Action Hub State */
              <div className="text-center space-y-6 py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-sans text-[#1C1C1C]">Project Brief Formatted Successfully</h3>
                  <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/80 max-w-md mx-auto">
                    Thank you, <strong className="text-[#1C1C1C]">{formData.name}</strong>. Choose your preferred channel to transmit this brief to Sanjay:
                  </p>
                </div>

                {/* Transmission channels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-2">
                  <a
                    href={generateMailtoUrl()}
                    className="p-4 bg-[#1C1C1C] hover:bg-[#333333] text-[#FAFAF8] flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-[#FAFAF8]" />
                    Send via Email Draft
                  </a>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#2D5A27] hover:bg-[#23471e] text-[#FAFAF8] flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FAFAF8]" />
                    Send on WhatsApp
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleDownloadBrief}
                    className="px-5 py-2.5 bg-[#FAFAF8] hover:bg-[#FFF8DA] text-[#1C1C1C] text-xs font-sans font-semibold uppercase tracking-wider inline-flex items-center gap-2 border border-[#1C1C1C]/15"
                  >
                    <Download className="w-4 h-4 text-[#C7A600]" />
                    Download Project Brief (.txt)
                  </button>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C]/10">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-sans text-[#1C1C1C]/60 hover:text-[#1C1C1C] underline"
                  >
                    ← Edit or Submit Another Requirement
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Info & Trust Pillars (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#1C1C1C]/15 p-6 space-y-4 shadow-sm">
              <h3 className="font-sans font-bold text-lg text-[#1C1C1C] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C7A600]" />
                Direct Contact
              </h3>
              
              <ul className="space-y-3 text-xs font-sans text-[#1C1C1C]/80">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C7A600] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C7A600] shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#C7A600] shrink-0" />
                  <span>WhatsApp direct for urgent triage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#1C1C1C]/15 p-6 space-y-3 shadow-sm">
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C7A600]">
                Engagement Protocol
              </h4>
              <ul className="space-y-2 text-xs font-sans text-[#1C1C1C]/80">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Same-Day Review:</strong> Direct technical review within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Objective Assessment:</strong> Frank guidance if simpler options exist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Confidentiality:</strong> Proprietary data protected under strict confidentiality.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Quotation & Scope Estimator */}
      {activeTab === 'estimator' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <InteractiveQuotationPreview onNavigateToWorkWithMe={() => setActiveTab('form')} />
        </div>
      )}
    </div>
  );
};
