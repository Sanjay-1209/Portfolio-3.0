type Props = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionLabel({ number, label, className = "" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 font-display text-xs sm:text-sm font-600 tracking-[0.2em] text-yellow uppercase ${className}`}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-yellow" aria-hidden="true" />
      {number} / {label}
    </div>
  );
}
