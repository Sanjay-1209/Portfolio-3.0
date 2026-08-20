import React from 'react';

interface CompanyLogoProps {
  companyKey: 'ey' | 'tacheon' | 'hyundai' | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyKey, className = '', size = 'md' }) => {
  switch (companyKey.toLowerCase()) {
    case 'ey':
    case 'ernst & young':
    case 'ernst & young gds':
      return (
        <div className={`inline-flex items-center gap-2 font-bold tracking-tight text-[#1C1C1C] ${className}`}>
          <div className="relative flex items-center justify-center bg-[#1C1C1C] px-2.5 py-1 text-[#FAFAF8] shadow-sm">
            <span className="font-extrabold text-base tracking-tighter font-sans">EY</span>
            <div className="w-2 h-2 bg-[#FFE600] ml-1 transform rotate-12"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#1C1C1C]/70 font-semibold hidden sm:inline">Ernst & Young GDS</span>
        </div>
      );

    case 'tacheon':
    case 'tacheon business growth consulting':
      return (
        <div className={`inline-flex items-center gap-2 font-bold tracking-tight text-[#1C1C1C] ${className}`}>
          <div className="relative flex items-center justify-center bg-[#1C1C1C] px-2.5 py-1 text-[#FAFAF8] shadow-sm">
            <span className="font-bold text-xs tracking-[0.2em] font-sans uppercase">TACHEON</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#1C1C1C]/70 font-medium hidden sm:inline">Growth Consulting</span>
        </div>
      );

    case 'hyundai':
    case 'hyundai motor india ltd.':
    case 'hyundai motors':
      return (
        <div className={`inline-flex items-center gap-2 font-bold tracking-tight text-[#1C1C1C] ${className}`}>
          <div className="relative flex items-center justify-center bg-[#1C1C1C] px-2.5 py-1 text-[#FAFAF8] shadow-sm">
            <svg viewBox="0 0 100 60" className="w-6 h-4 text-white fill-current inline-block mr-1">
              <ellipse cx="50" cy="30" rx="45" ry="24" fill="none" stroke="currentColor" strokeWidth="6"/>
              <path d="M36,16 C42,16 45,44 54,44 M64,16 C58,16 55,44 46,44 M38,30 L62,30" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            <span className="font-bold text-xs tracking-[0.2em] font-sans uppercase">HYUNDAI</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#1C1C1C]/70 font-medium hidden sm:inline">Motor India</span>
        </div>
      );

    default:
      return (
        <div className={`inline-flex items-center px-2 py-1 bg-white border border-[#1C1C1C]/20 text-xs font-semibold text-[#1C1C1C] ${className}`}>
          {companyKey}
        </div>
      );
  }
};
