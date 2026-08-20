import React from 'react';
import { BarChart3, Database, LayoutDashboard, Globe, ArrowRight, Check } from 'lucide-react';
import { PageId } from '../layout/Navbar';

interface ExpertisePillarsProps {
  onNavigate: (page: PageId) => void;
}

export const ExpertisePillars: React.FC<ExpertisePillarsProps> = ({ onNavigate }) => {
  const pillars = [
    {
      num: '01',
      id: 'analytics',
      title: 'Data Analytics & Insights',
      icon: BarChart3,
      tagline: 'Statistical modeling, cohort analysis, and actionable business insights.',
      bullets: [
        'Customer journey drop-off modeling (15% velocity lift at EY)',
        'Marketing ROI & behavioral segmentation (20% conversion boost)',
        'Statistical outlier & anomaly detection (30% false-positive drop)',
        'Regression, trend detection, and hypothesis validation'
      ],
      tech: 'Python, Pandas, SciPy, SQL, Statsmodels'
    },
    {
      num: '02',
      id: 'engineering',
      title: 'Data Engineering & Pipelines',
      icon: Database,
      tagline: 'Automated data preparation, scheduled ETL pipelines, and cloud optimization.',
      bullets: [
        'Automated file ingestion & multi-source wrangling (40% effort reduction)',
        'Google BigQuery schema & query optimization (30% cloud cost reduction)',
        'AWS Lambda, S3 serverless pipelines, and Snowflake data modeling',
        'Data quality enforcement, schema validation, and cleansing rules'
      ],
      tech: 'BigQuery, Snowflake, AWS, Python, SQL'
    },
    {
      num: '03',
      id: 'bi',
      title: 'Business Intelligence & Dashboards',
      icon: LayoutDashboard,
      tagline: 'One single executive view instead of juggling dozens of manual spreadsheets.',
      bullets: [
        'End-to-end interactive Tableau and Power BI enterprise dashboards',
        'Streamlit interactive data applications for operational teams',
        'Automated KPI generation and scheduled management delivery',
        'Mobile-optimized performance snapshots for leadership'
      ],
      tech: 'Tableau, Power BI, Streamlit, Looker Studio'
    },
    {
      num: '04',
      id: 'web',
      title: 'Digital Solutions & Custom Tools',
      icon: Globe,
      tagline: 'End-to-end responsive web platforms, internal tools, and quotation systems.',
      bullets: [
        'Live production platforms (e.g. Flora Farming, Uyirveda Health Care)',
        'Automated B2B quotation & multi-rate GST calculation engines',
        'Mobile-first responsive architecture with sub-2s load performance',
        'SEO foundations, lead capture integration, and production QA'
      ],
      tech: 'React, TypeScript, Tailwind CSS, REST APIs'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FAFAF8] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C7A600] font-sans block mb-1">
              Chapter II // Competency Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans tracking-tight text-[#1C1C1C]">
              Four Core Pillars of Engineering & Advisory
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 max-w-md">
            Connecting commercial questions with automated data architecture, resilient pipelines, and clear executive interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white border border-[#1C1C1C]/15 p-6 hover:border-[#1C1C1C]/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]/10">
                    <div className="w-9 h-9 bg-[#1C1C1C] text-[#FAFAF8] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-bold text-lg text-[#1C1C1C]/40">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1C1C1C] group-hover:text-[#C7A600] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-sans text-[#1C1C1C]/70 mt-1 mb-4 leading-relaxed">
                    {pillar.tagline}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {pillar.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-[#1C1C1C]/80">
                        <Check className="w-3.5 h-3.5 text-[#C7A600] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C]/10">
                  <div className="text-[10px] font-sans text-[#1C1C1C]/60 truncate mb-3 uppercase tracking-wider">
                    <strong className="text-[#1C1C1C]">Stack:</strong> {pillar.tech}
                  </div>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center gap-1 transition-colors"
                  >
                    View Solutions <ArrowRight className="w-3 h-3" />
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
