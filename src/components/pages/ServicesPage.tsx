import React, { useState } from 'react';
import {
  BarChart3, LayoutDashboard, Cpu, Network, Zap, Database,
  CheckCircle2, Workflow, FileSpreadsheet, Globe, Wrench, Compass,
  ArrowRight, Check, Sparkles, Building, ChevronDown, ChevronUp
} from 'lucide-react';
import { SERVICES, ENGAGEMENT_STEPS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';
import { Service } from '../../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  selectedServiceId?: string;
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId,
  onSelectServiceForInquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(selectedServiceId || null);

  const categories = ['All', 'Analytics', 'Engineering', 'Automation', 'Web & Tools'];

  const getIcon = (name: string) => {
    switch (name) {
      case 'BarChart3': return BarChart3;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Cpu': return Cpu;
      case 'Network': return Network;
      case 'Zap': return Zap;
      case 'Database': return Database;
      case 'CheckCircle2': return CheckCircle2;
      case 'Workflow': return Workflow;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Globe': return Globe;
      case 'Wrench': return Wrench;
      case 'Compass': return Compass;
      default: return Sparkles;
    }
  };

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const targetAudiences = [
    { title: 'Growing SMEs & Founders', desc: 'Transitioning from chaotic spreadsheets into organized databases & automated workflows.' },
    { title: 'E-commerce & D2C Brands', desc: 'Analyzing SKU profitability, repeat cohorts, customer lifetime value & marketing ROI.' },
    { title: 'B2B Suppliers & Distributors', desc: 'Electrical, hardware, manufacturing & construction companies needing instant quotation engines.' },
    { title: 'Healthcare & Clinics', desc: 'Patient journey portals, appointment inquiry systems, and treatment information architecture.' },
    { title: 'Sales & Field Teams', desc: 'Real-time pipeline visibility, automated lead routing, and daily performance dashboards.' },
    { title: 'Audit & Compliance Teams', desc: 'Automated invoice validation, anomaly detection algorithms, and reconciliation tools.' }
  ];

  const handleHireForService = (service: Service) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.title);
    }
    onNavigate('work-with-me');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Sparkles className="w-3 h-3 text-[#B85D19]" />
          Chapter III // Commercial Directory (12 Services)
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tight text-[#1C1C1C] leading-[1.05]">
          Targeted Commercial Capabilities
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Structured around an architectural paradigm: <strong className="text-[#1C1C1C]">Problem → Engineered Solution → Measurable Business Outcome</strong>.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#1C1C1C]/15">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1C]/60 mr-2">Domain:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? 'bg-[#1C1C1C] text-[#F4F1EA] font-bold shadow-sm'
                : 'bg-white text-[#1C1C1C] hover:bg-[#EBE7DE] border border-[#1C1C1C]/15'
            }`}
          >
            {cat} {cat === 'All' ? `(${SERVICES.length})` : ''}
          </button>
        ))}
      </div>

      {/* 12 Detailed Services Cards */}
      <div className="space-y-8">
        {filteredServices.map((service) => {
          const Icon = getIcon(service.iconName);
          const isExpanded = expandedServiceId === service.id;

          return (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`bg-white border p-6 sm:p-8 lg:p-10 transition-all shadow-sm ${
                isExpanded ? 'border-[#1C1C1C] ring-1 ring-[#1C1C1C]/20' : 'border-[#1C1C1C]/15 hover:border-[#1C1C1C]/40'
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1C1C1C]/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1C1C1C] px-2 py-0.5 bg-[#F4F1EA] border border-[#1C1C1C]/10">
                        Practice #{service.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#1C1C1C]/60 font-sans">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif italic font-bold text-[#1C1C1C] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/75 mt-1">
                      {service.shortTagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto">
                  <button
                    onClick={() => handleHireForService(service)}
                    className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    className="p-2 text-[#1C1C1C] hover:bg-[#EBE7DE] border border-[#1C1C1C]/20 bg-white"
                    title={isExpanded ? "Collapse details" : "Expand details"}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Problem vs Solution vs Outcome Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-[#EBE7DE] border border-[#1C1C1C]/10 space-y-1.5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 block">
                    1. The Friction Point
                  </span>
                  <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                <div className="p-4 bg-[#F4F1EA] border border-[#1C1C1C]/10 space-y-1.5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C] block">
                    2. Technical Architecture
                  </span>
                  <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed">
                    {service.solution}
                  </p>
                </div>

                <div className="p-4 bg-[#F4F1EA] border border-[#1C1C1C]/15 space-y-1.5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B85D19] block">
                    3. Commercial Outcome
                  </span>
                  <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/85 leading-relaxed">
                    {service.outcome}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 block">
                  Typical Deliverables Included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F4F1EA] border border-[#1C1C1C]/10 flex items-center gap-2 text-xs font-sans text-[#1C1C1C]">
                      <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Real-world Scenario & Industries */}
              {isExpanded && service.exampleScenario && (
                <div className="mt-6 pt-6 border-t border-[#1C1C1C]/10 space-y-4 animate-in fade-in duration-200">
                  <div className="p-5 bg-[#F4F1EA] border border-[#1C1C1C]/15 space-y-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B85D19] block">
                      Implementation Blueprint:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-[#1C1C1C]">
                      <div>
                        <strong className="block mb-1 text-[#1C1C1C] uppercase text-[10px] tracking-wider">Inputs:</strong>
                        <p className="text-[#1C1C1C]/70">{service.exampleScenario.inputs}</p>
                      </div>
                      <div>
                        <strong className="block mb-1 text-[#1C1C1C] uppercase text-[10px] tracking-wider">Transformation:</strong>
                        <p className="text-[#1C1C1C]/70">{service.exampleScenario.transformation}</p>
                      </div>
                      <div>
                        <strong className="block mb-1 text-emerald-800 uppercase text-[10px] tracking-wider">Resulting System:</strong>
                        <p className="text-[#1C1C1C]/85 font-medium">{service.exampleScenario.outputs}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60">Target Sectors:</span>
                    {service.targetIndustries.map((ind, i) => (
                      <span key={i} className="text-xs font-sans px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] border border-[#1C1C1C]/10">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* "Who Sanjay Can Help" Section */}
      <div className="pt-8 border-t border-[#1C1C1C]/15 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
            Sector Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
            Who Benefits Most From This Practice?
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1.5">
            Designed for teams that value automation, dependable data pipelines, and clear executive interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((aud, idx) => (
            <div key={idx} className="p-5 bg-white border border-[#1C1C1C]/15 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#1C1C1C]" />
                <h3 className="font-serif italic font-bold text-base text-[#1C1C1C]">{aud.title}</h3>
              </div>
              <p className="text-xs font-sans text-[#1C1C1C]/75 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Step Engagement Process */}
      <div className="pt-8 border-t border-[#1C1C1C]/15 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
            Engagement Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
            How We Execute Engagements
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1.5">
            A structured 6-phase lifecycle from initial audit to production launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_STEPS.map((step) => (
            <div key={step.step} className="p-6 bg-white border border-[#1C1C1C]/15 shadow-sm space-y-2 relative">
              <div className="text-xs font-serif italic font-bold text-[#B85D19]">
                PHASE 0{step.step}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1C1C]">{step.title}</h3>
              <p className="text-xs font-sans text-[#1C1C1C]/75 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion Banner */}
      <div className="p-8 bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] text-center space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F4F1EA]">
          Ready to Automate or Build Your Data Infrastructure?
        </h3>
        <p className="text-xs sm:text-sm font-serif text-[#F4F1EA]/80 max-w-xl mx-auto">
          Outline your operational bottleneck. I will deliver a clear technical blueprint, architecture diagram, and timeline.
        </p>
        <button
          onClick={() => onNavigate('work-with-me')}
          className="px-6 py-3 bg-[#F4F1EA] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          Start Project Consultation
        </button>
      </div>
    </div>
  );
};
