import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, FileText, Send, MessageSquare, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PageId } from '../layout/Navbar';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenResume }) => {
  const [quickName, setQuickName] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Message from ${quickName || 'Portfolio Visitor'}`)}&body=${encodeURIComponent(quickMsg)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4 pb-8 border-b border-[#1C1C1C]/15">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EBE7DE] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1C1C1C]/10">
          <Mail className="w-3 h-3 text-[#B85D19]" />
          Direct Dispatch & Inquiries
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tight text-[#1C1C1C] leading-[1.05]">
          Let’s Discuss Your Next Initiative
        </h1>
        <p className="text-base sm:text-lg font-serif text-[#1C1C1C]/80 leading-relaxed">
          Available for consulting engagements, automated workflow architecture, and high-impact analytics engineering roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Channels Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-6 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-8 h-8 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center mb-3">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/60 block mb-1">Direct Email</span>
                <h3 className="text-sm font-sans font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors break-all">
                  {PERSONAL_INFO.email}
                </h3>
              </div>
              <span className="text-xs font-sans text-[#1C1C1C]/60 mt-4 flex items-center gap-1">
                Open in mail client <ExternalLink className="w-3 h-3 text-[#B85D19]" />
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="p-6 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-8 h-8 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/60 block mb-1">Direct Phone</span>
                <h3 className="text-sm font-sans font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors">
                  {PERSONAL_INFO.phone}
                </h3>
              </div>
              <span className="text-xs font-sans text-[#1C1C1C]/60 mt-4 flex items-center gap-1">
                Call directly <ExternalLink className="w-3 h-3 text-[#B85D19]" />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-8 h-8 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center mb-3">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/60 block mb-1">LinkedIn Network</span>
                <h3 className="text-sm font-sans font-bold text-[#1C1C1C] group-hover:text-[#B85D19] transition-colors">
                  sanjay-dharan-99736321b
                </h3>
              </div>
              <span className="text-xs font-sans text-[#1C1C1C]/60 mt-4 flex items-center gap-1">
                View verified profile <ExternalLink className="w-3 h-3 text-[#B85D19]" />
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Sanjay, I'm reaching out from your portfolio website!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-8 h-8 bg-[#2D5A27] text-[#F4F1EA] flex items-center justify-center mb-3">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#2D5A27] block mb-1">WhatsApp Chat</span>
                <h3 className="text-sm font-sans font-bold text-[#1C1C1C] group-hover:text-[#2D5A27] transition-colors">
                  Instant Project Chat
                </h3>
              </div>
              <span className="text-xs font-sans text-[#1C1C1C]/60 mt-4 flex items-center gap-1">
                Open WhatsApp <ExternalLink className="w-3 h-3 text-[#2D5A27]" />
              </span>
            </a>
          </div>

          {/* Location & Resume Banner */}
          <div className="p-6 bg-white border border-[#1C1C1C]/15 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1C1C1C] text-[#F4F1EA] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1C1C1C]/60 block">Base Location</span>
                <span className="text-sm font-sans font-bold text-[#1C1C1C]">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <button
              onClick={onOpenResume}
              className="px-4 py-2 bg-[#F4F1EA] hover:bg-[#EBE7DE] text-[#1C1C1C] text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 border border-[#1C1C1C]/15 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#B85D19]" />
              View Resume
            </button>
          </div>
        </div>

        {/* Right Column: Quick Direct Message Form (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-[#1C1C1C]/15 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="space-y-1 pb-3 border-b border-[#1C1C1C]/10">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#B85D19]">Fast Dispatch</span>
            <h3 className="text-2xl font-serif italic text-[#1C1C1C]">Send a Direct Message</h3>
            <p className="text-xs font-serif text-[#1C1C1C]/70 leading-relaxed">
              Have a quick inquiry? Prepare an immediate email draft below.
            </p>
          </div>

          <form onSubmit={handleQuickSend} className="space-y-4 pt-2">
            <div>
              <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                placeholder="Your name or company..."
                className="w-full bg-[#F4F1EA] border border-[#1C1C1C]/20 px-4 py-2.5 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-1.5">
                Message / Inquiry
              </label>
              <textarea
                required
                rows={4}
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder="What can I help you with?"
                className="w-full bg-[#F4F1EA] border border-[#1C1C1C]/20 px-4 py-2.5 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1C1C1C] hover:bg-[#333333] text-[#F4F1EA] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              {sent ? <Check className="w-4 h-4 text-[#F4F1EA]" /> : <Send className="w-4 h-4 text-[#F4F1EA]" />}
              {sent ? 'Opening Mail Client...' : 'Dispatch Message Directly'}
            </button>
          </form>

          <div className="pt-3 border-t border-[#1C1C1C]/10 text-center">
            <button
              onClick={() => onNavigate('work-with-me')}
              className="text-xs font-sans uppercase tracking-wider font-semibold text-[#1C1C1C] hover:underline"
            >
              Need a formal project dossier instead? Use Work With Me →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
