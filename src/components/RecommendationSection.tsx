import SectionLabel from "./SectionLabel";
import RecommendationCard from "./RecommendationCard";
import { recommendations } from "@/data/recommendations";

export default function RecommendationSection({
  preview = false,
}: {
  preview?: boolean;
}) {
  const items = preview ? recommendations.slice(0, 3) : recommendations;

  return (
    <section className="border-t border-ink-border bg-ink px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel number="05" label="Words" />
        <h2 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-700 uppercase leading-[0.98] tracking-tight text-balance">
          Don&apos;t just
          <br />
          <span className="text-yellow">take my word for it.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
          The work matters. The people you build it with matter too.
        </p>
        <p className="mt-1 font-display text-xs tracking-[0.15em] text-muted uppercase">
          Apparently I didn&apos;t write these.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:gap-8">
          {items.map((rec, i) => (
            <RecommendationCard key={rec.id} rec={rec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
