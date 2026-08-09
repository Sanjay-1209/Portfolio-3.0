import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-4 pt-14 sm:pt-16 md:pt-[68px] text-center">
      <p className="font-display text-xs tracking-[0.25em] text-yellow uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl font-700 uppercase">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        This page doesn&apos;t exist — but the work does.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-yellow px-6 py-3 font-display text-sm font-600 text-ink hover:scale-[1.02] transition-transform"
      >
        BACK HOME
      </Link>
    </div>
  );
}
