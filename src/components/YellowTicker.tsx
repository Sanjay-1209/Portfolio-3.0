import { tickerItems } from "@/data/profile";

export default function YellowTicker() {
  return (
    <div className="relative overflow-hidden border-y border-ink bg-yellow py-3 sm:py-4">
      <div className="flex w-max motion-safe:animate-[ticker_26s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex shrink-0 items-center gap-6 pr-6"
            aria-hidden={dup === 1}
          >
            {tickerItems.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-6 font-display text-sm sm:text-base font-700 text-ink uppercase tracking-wide"
              >
                {item}
                <span className="text-ink/40">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
