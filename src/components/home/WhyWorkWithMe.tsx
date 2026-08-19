import React from 'react';
import { Lightbulb, Cpu, Target, CheckCircle2, MessageSquareText, ArrowRight } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface WhyWorkWithMeProps {
  onNavigate: (page: PageId) => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onNavigate }) => {
  const icons = [Lightbulb, Cpu, Target, CheckCircle2, MessageSquareText];

  return (
    <section className="py-16 lg:py-24 bg-[#EBE7DE] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
              Chapter VII // Working Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
              Why Collaborate With Sanjay Dharan?
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              Zero fluff, rigorous testing, and direct architectural accountability on every engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white border border-[#1C1C1C]/15 p-6 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]/10">
                    <div className="w-8 h-8 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#1C1C1C]/50">Principle 0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-serif italic font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-[#1C1C1C]/75 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1C1C1C]/10 flex items-center gap-1.5 text-[10px] text-[#B85D19] font-sans uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#B85D19]"></span>
                  Standard Operating Discipline
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Card */}
          <div className="bg-[#1C1C1C] text-[#F4F1EA] border border-[#1C1C1C] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
                Direct Inquiry
              </span>
              <h3 className="text-xl font-serif italic font-light text-[#F4F1EA]">
                Have an ambiguous operational dilemma?
              </h3>
              <p className="text-xs font-serif text-[#F4F1EA]/75 mt-2 leading-relaxed">
                Let's review your data landscape. I will outline whether an automated ETL pipeline, BI dashboard, or custom web tool makes sense.
              </p>
            </div>

            <button
              onClick={() => onNavigate('work-with-me')}
              className="mt-6 w-full py-3 bg-[#F4F1EA] hover:bg-white text-[#1C1C1C] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              Consultation Inquiry <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
