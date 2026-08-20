import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, ChevronRight, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

type QA = { id: string; question: string; answer: string };

const QA_BANK: QA[] = [
  {
    id: 'summary',
    question: 'Summarize Sanjay',
    answer: 'Sanjay Dharan is a Chennai-based Data Analyst, Data Engineer, Automation Specialist and web solutions builder with 2+ years of production experience. He combines analytics, dashboards, data engineering and automation with end-to-end website development, focusing on practical business outcomes rather than isolated technical deliverables.'
  },
  {
    id: 'website',
    question: 'Can Sanjay build my website?',
    answer: 'Yes. Website building is one of Sanjay’s priority client services. He can plan the information architecture, design the responsive UI, develop the site with modern React/TypeScript tooling, optimize mobile UX and SEO, connect lead-capture or WhatsApp flows, test the production build and handle deployment. Flora Farming and Uyirveda Health Care are live examples.'
  },
  {
    id: 'best-service',
    question: 'What is his best service for my business?',
    answer: 'If you need customer acquisition or a stronger digital presence, start with end-to-end website development. If your problem is reporting or decision-making, choose Data Analytics & BI or dashboard development. If your team repeats manual Excel, quotation or reporting work, automation is likely the highest-ROI starting point. Sanjay’s strength is combining these areas when the business problem crosses multiple systems.'
  },
  {
    id: 'proof',
    question: 'What proves his experience?',
    answer: 'His portfolio includes enterprise work across EY GDS, Tacheon and Hyundai, with quantified outcomes such as improved pipeline velocity, reduced data-preparation effort, lower query-processing cost and shorter audit cycles. It also includes live production websites and practical automation tools.'
  },
  {
    id: 'web-examples',
    question: 'Show website examples',
    answer: 'Two current production examples are Flora Farming, a mobile-first microgreens and subscription platform, and Uyirveda Health Care, an Ayurvedic clinic and consultation portal. More website and digital product work is in progress and can be added to this portfolio as it launches.'
  },
  {
    id: 'stack',
    question: 'What technologies does he use?',
    answer: 'His working stack includes React, TypeScript, Tailwind CSS, Python, SQL, Tableau, Power BI, Streamlit, BigQuery, databases, APIs, ETL/data pipelines and automation tooling. The exact stack is selected around the business requirement rather than forcing every project into one technology.'
  },
  {
    id: 'hire',
    question: 'Why should I hire Sanjay?',
    answer: 'Because he can bridge business requirements and implementation. Instead of only producing a dashboard, script or webpage, he can structure the problem, build the solution, improve the user flow, automate repetitive steps, test it and take it to production. That makes him especially useful to founders, SMEs, agencies and teams that need one person to connect data, automation and digital execution.'
  },
  {
    id: 'contact',
    question: 'How can I contact him?',
    answer: `You can contact Sanjay at ${PERSONAL_INFO.email}, connect through LinkedIn, or use the Work With Me page to describe your requirement. He is open to freelance consulting, high-impact contract work and suitable full-time opportunities.`
  },
  {
    id: 'dashboards',
    question: 'Can he build dashboards for my company?',
    answer: 'Yes. Sanjay builds executive and operational dashboards using tools such as Tableau and Power BI, with KPI architecture, data cleaning, modeling and stakeholder-focused views. The goal is not just a visually attractive dashboard, but a dependable reporting layer that answers business questions quickly.'
  },
  {
    id: 'excel-automation',
    question: 'Can he automate Excel and reporting work?',
    answer: 'Yes. Repetitive Excel preparation, recurring reports, file consolidation, calculations and manual copy-paste workflows are strong automation candidates. Sanjay can use Python, SQL and workflow logic to reduce manual preparation and make recurring reporting more consistent.'
  },
  {
    id: 'data-engineering',
    question: 'Can he build ETL or data pipelines?',
    answer: 'Yes. His data-engineering capabilities include ETL and ELT workflows, SQL transformations, BigQuery-oriented analytics engineering, database design, API integration and structured pipelines that feed dashboards or downstream business systems.'
  },
  {
    id: 'industries',
    question: 'Which businesses can he work with?',
    answer: 'The portfolio is relevant to startups, founders, SMEs, agencies, e-commerce and D2C brands, healthcare and clinics, B2B suppliers, construction or electrical and hardware businesses, manufacturing teams and enterprise functions. The strongest fit is a business that needs a combination of digital presence, better data visibility or process automation.'
  },
  {
    id: 'quotation',
    question: 'Can he build a quotation or internal business tool?',
    answer: 'Yes. The portfolio includes a B2B quotation automation concept covering customer and product masters, GST logic, discounts, branded PDF output, revision tracking and faster proposal dispatch. Similar custom internal tools can be designed around your exact operational workflow.'
  },
  {
    id: 'availability',
    question: 'Is Sanjay available for freelance work?',
    answer: 'Yes. The portfolio states that Sanjay is available for freelance consulting, high-impact contract projects and suitable full-time opportunities, with Chennai and remote engagement options.'
  }
];

export const PortfolioAssistant: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<QA | null>(null);
  const [thinking, setThinking] = useState(false);
  const [typed, setTyped] = useState('');
  const timer = useRef<number | null>(null);
  const typeTimer = useRef<number | null>(null);

  const featured = useMemo(() => QA_BANK, []);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
    if (typeTimer.current) window.clearInterval(typeTimer.current);
  }, []);

  const answer = (qa: QA) => {
    if (timer.current) window.clearTimeout(timer.current);
    if (typeTimer.current) window.clearInterval(typeTimer.current);
    setActive(qa);
    setTyped('');
    setThinking(true);
    timer.current = window.setTimeout(() => {
      setThinking(false);
      let i = 0;
      typeTimer.current = window.setInterval(() => {
        i += 2;
        setTyped(qa.answer.slice(0, i));
        if (i >= qa.answer.length && typeTimer.current) window.clearInterval(typeTimer.current);
      }, 12);
    }, 850);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-2.5 rounded-full bg-[#111111] text-white pl-3 pr-4 py-2.5 sm:py-3 shadow-[0_14px_45px_rgba(0,0,0,.24)] border border-white/10 hover:-translate-y-0.5 transition-all"
        aria-label="Open Ask Sanjay portfolio assistant"
      >
        <span className="w-8 h-8 rounded-full bg-[#FFD84D] text-[#111111] flex items-center justify-center shadow-inner">
          <MessageCircle className="w-4 h-4" />
        </span>
        <span className="text-left leading-tight font-sans">
          <span className="block text-[9px] uppercase tracking-[0.18em] text-white/55">Portfolio assistant</span>
          <span className="block text-xs font-bold">Ask Sanjay</span>
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/30 backdrop-blur-[2px]" onClick={() => setOpen(false)}>
          <section
            className="w-full sm:w-[420px] max-h-[86vh] bg-[#FCFCFA] border border-black/10 rounded-t-[28px] sm:rounded-[24px] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            aria-label="Ask Sanjay assistant"
          >
            <header className="px-4 py-4 sm:px-5 bg-[#111111] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD84D] text-[#111111] flex items-center justify-center"><Bot className="w-5 h-5" /></div>
                <div>
                  <div className="flex items-center gap-1.5"><h2 className="font-sans font-bold text-sm">Ask Sanjay</h2><Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" /></div>
                  <p className="font-sans text-[10px] text-white/55">Fast answers from this portfolio • no external AI</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/10" aria-label="Close assistant"><X className="w-5 h-5" /></button>
            </header>

            <div className="p-4 sm:p-5 overflow-y-auto max-h-[calc(86vh-72px)]">
              {!active ? (
                <>
                  <div className="rounded-2xl border border-[#E7C84B]/45 bg-[#FFF9DF] p-4 mb-4">
                    <p className="font-sans text-sm font-semibold text-[#171717]">What would you like to know?</p>
                    <p className="font-sans text-xs text-black/55 mt-1">Choose from 14 common questions. The assistant uses curated portfolio facts, so answers stay consistent and accurate.</p>
                  </div>
                  <div className="grid gap-2">
                    {featured.map((qa) => (
                      <button key={qa.id} onClick={() => answer(qa)} className="w-full flex items-center justify-between gap-3 text-left rounded-xl border border-black/10 bg-white px-3.5 py-3 hover:border-[#D7B400] hover:bg-[#FFFCF0] transition-colors">
                        <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#222]">{qa.question}</span>
                        <ChevronRight className="w-4 h-4 text-black/40 shrink-0" />
                      </button>
                    ))}
                  </div>

                </>
              ) : (
                <>
                  <button onClick={() => { setActive(null); setTyped(''); setThinking(false); }} className="font-sans text-[10px] uppercase tracking-[.16em] font-bold text-black/50 hover:text-black mb-3">← All questions</button>
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-[#111] text-white p-3.5 font-sans text-xs leading-relaxed">{active.question}</div>
                  <div className="mt-3 max-w-[94%] rounded-2xl rounded-bl-md border border-black/10 bg-white p-4 min-h-[112px]">
                    {thinking ? (
                      <div className="flex items-center gap-2 font-sans text-xs text-black/55 py-2">
                        <span className="flex gap-1"><i className="w-1.5 h-1.5 bg-[#C9A900] rounded-full animate-bounce"/><i className="w-1.5 h-1.5 bg-[#C9A900] rounded-full animate-bounce [animation-delay:120ms]"/><i className="w-1.5 h-1.5 bg-[#C9A900] rounded-full animate-bounce [animation-delay:240ms]"/></span>
                        Reviewing portfolio facts…
                      </div>
                    ) : (
                      <p className="font-sans text-[13px] leading-6 text-[#2A2A2A]">{typed}<span className="inline-block w-[2px] h-3.5 bg-[#C9A900] ml-0.5 align-middle animate-pulse" /></p>
                    )}
                  </div>
                  {!thinking && typed.length >= active.answer.length && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button onClick={() => onNavigate('services')} className="rounded-xl border border-black/10 px-3 py-2.5 font-sans text-[11px] font-bold hover:bg-[#FFF8D6]">View Services</button>
                      <button onClick={() => onNavigate('work-with-me')} className="rounded-xl bg-[#FFD84D] px-3 py-2.5 font-sans text-[11px] font-bold text-[#111] flex items-center justify-center gap-1.5">Work With Me <Send className="w-3 h-3"/></button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};
