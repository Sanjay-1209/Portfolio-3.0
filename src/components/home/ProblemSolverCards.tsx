import React from 'react';
import { TrendingUp, Clock, Layers, FileText, Globe, LayoutDashboard, ArrowRight, Sparkles } from 'lucide-react';
import { PROBLEM_SOLVER_CARDS } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface ProblemSolverCardsProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ProblemSolverCards: React.FC<ProblemSolverCardsProps> = ({ onNavigate, onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return TrendingUp;
      case 'Clock': return Clock;
      case 'Layers': return Layers;
      case 'FileText': return FileText;
      case 'Globe': return Globe;
      case 'LayoutDashboard': return LayoutDashboard;
      default: return Sparkles;
    }
  };

  const handleClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
  };

  return (
    <section className="py-12 lg:py-16 bg-[#FFF8DA] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C7A600] font-sans block mb-1">
              Chapter III // Applied Problem Solving
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans tracking-tight text-[#1C1C1C]">
              How I Address Your Operational Bottlenecks
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              Match recurring workflow friction with structured data engineering and automated platforms.
            </p>
          </div>

          <button
            onClick={() => onNavigate('work-with-me')}
            className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-[#FAFAF8] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all self-start md:self-auto shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Discuss Your Requirement
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SOLVER_CARDS.map((card, idx) => {
            const Icon = getIcon(card.icon);
            return (
              <div
                key={idx}
                className="bg-white border border-[#1C1C1C]/15 p-6 hover:border-[#1C1C1C]/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]/10">
                    <div className="w-8 h-8 bg-[#1C1C1C] text-[#FAFAF8] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#1C1C1C]/50">Case #{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-sans font-bold text-[#1C1C1C] group-hover:text-[#C7A600] transition-colors leading-snug">
                    {card.question}
                  </h3>

                  <div className="mt-3 p-3.5 bg-[#FAFAF8] border border-[#1C1C1C]/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C7A600] block mb-1">
                      Engineered Solution:
                    </span>
                    <p className="text-xs font-serif text-[#1C1C1C]/85 leading-relaxed">
                      {card.answer}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1C1C1C]/10 flex items-center justify-between">
                  <button
                    onClick={() => handleClick(card.targetServiceId)}
                    className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>{card.actionLabel}</span>
                    <ArrowRight className="w-3 h-3 text-[#C7A600]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
