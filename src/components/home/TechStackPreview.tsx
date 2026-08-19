import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Code } from 'lucide-react';

export const TechStackPreview: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F1EA] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B85D19] font-sans block mb-1">
            Chapter VIII // Technical Index
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-[#1C1C1C]">
            Technical Stack & Ecosystem
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-2">
            Categorized capabilities backed by enterprise implementations and production deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1C1C1C]/15 p-5 hover:border-[#1C1C1C]/40 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#1C1C1C]/10">
                <Code className="w-4 h-4 text-[#1C1C1C]" />
                <h3 className="text-xs font-sans font-bold text-[#1C1C1C] uppercase tracking-wider">{cat.title}</h3>
              </div>
              
              <p className="text-xs font-serif text-[#1C1C1C]/70 mb-3 leading-relaxed">{cat.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-xs font-sans px-2.5 py-1 transition-colors ${
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
    </section>
  );
};
