import React from 'react';
import { ArrowRight, BarChart3, LayoutDashboard, Cpu, Network, Globe } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface FeaturedServicesProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onNavigate, onSelectService }) => {
  const web = SERVICES.find((service) => service.id === 'web-development');
  const featured = [web, ...SERVICES.filter((service) => ['data-analytics-bi', 'dashboard-development', 'business-process-automation'].includes(service.id))].filter(Boolean) as typeof SERVICES;

  const getIcon = (name: string) => {
    switch (name) {
      case 'BarChart3': return BarChart3;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Cpu': return Cpu;
      case 'Network': return Network;
      case 'Globe': return Globe;
      default: return BarChart3;
    }
  };

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
  };

  return (
    <section className="py-12 lg:py-16 bg-[#FAFAF8] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C7A600] font-sans block mb-1">
              Chapter IV // Commercial Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans tracking-tight text-[#1C1C1C]">
              Featured Client Services
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              Engineered around a clear commercial structure: <strong className="text-[#1C1C1C]">Problem → Architectural Solution → Measurable Outcome</strong>.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-sans uppercase tracking-wider font-bold text-[#FAFAF8] bg-[#1C1C1C] hover:bg-[#333333] px-4 py-2.5 flex items-center gap-1.5 transition-all shadow-sm self-start md:self-auto"
          >
            All 12 Services <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white border border-[#1C1C1C]/15 p-6 sm:p-6 hover:border-[#1C1C1C]/50 transition-all cursor-pointer group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#1C1C1C] text-[#FAFAF8] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1C1C1C]/70 bg-[#FAFAF8] px-2 py-0.5 border border-[#1C1C1C]/10">
                        Practice #{service.number}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-sans text-[#1C1C1C]/60">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-[#1C1C1C] group-hover:text-[#C7A600] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-[#1C1C1C]/70 mt-1.5 leading-relaxed">
                    {service.shortTagline}
                  </p>

                  {/* Problem vs Outcome summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                    <div className="p-3 bg-[#FFF8DA] border border-[#1C1C1C]/10">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 block mb-1">
                        The Friction
                      </span>
                      <p className="text-xs font-serif text-[#1C1C1C]/85 line-clamp-3 leading-relaxed">{service.problem}</p>
                    </div>

                    <div className="p-3 bg-[#FAFAF8] border border-[#1C1C1C]/10">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C7A600] block mb-1">
                        The Commercial Outcome
                      </span>
                      <p className="text-xs font-serif text-[#1C1C1C]/85 line-clamp-3 leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between">
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60">
                    {service.deliverables.length} Deliverables Included
                  </div>
                  <span className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] group-hover:underline flex items-center gap-1">
                    Deliverables & Blueprint <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
