import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-near px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display text-[15vw] sm:text-[9vw] lg:text-[7vw] font-700 leading-[0.9] tracking-tight">
          SANJAY
          <br />
          DHARAN<span className="text-yellow">.</span>
        </h2>

        <p className="mt-6 font-display text-sm sm:text-base tracking-[0.2em] text-muted">
          DATA × SOFTWARE × AI × AUTOMATION
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 border-t border-ink-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-3">
              Location
            </p>
            <p className="font-display text-sm sm:text-base">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-3">
              Connect
            </p>
            <a
              href={profile.linkedinPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-display text-sm sm:text-base hover:text-yellow"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="block font-display text-sm sm:text-base hover:text-yellow mt-1"
            >
              Email
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-3">
              Explore
            </p>
            <Link href="/work" className="block font-display text-sm sm:text-base hover:text-yellow">
              Work
            </Link>
            <Link
              href="/recommendations"
              className="block font-display text-sm sm:text-base hover:text-yellow mt-1"
            >
              Recommendations
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-3">
              Next
            </p>
            <a
              href={profile.tingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-display text-sm sm:text-base text-yellow"
            >
              Ting ↗
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs sm:text-sm text-muted font-body">
          Designed around data. Built around impact.
        </p>
      </div>
    </footer>
  );
}
