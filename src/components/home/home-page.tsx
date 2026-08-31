import Link from "next/link";

import { getSiteCopy, siteIdentity, type Locale } from "@/config/site";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const copy = getSiteCopy(locale);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-stone-200 bg-stone-100">
        <div
          className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_top_right,rgba(180,143,79,0.22),transparent_62%)]"
          aria-hidden="true"
        />
        <div className="mx-auto grid min-h-[38rem] w-[min(92%,80rem)] items-end py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:gap-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-800 uppercase">
              {siteIdentity.name}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
              {copy.home.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {copy.home.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950 motion-reduce:transition-none"
                href={copy.home.primaryAction.href}
              >
                {copy.home.primaryAction.label}
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 px-6 text-sm font-semibold text-stone-950 transition-colors hover:border-stone-950 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950 motion-reduce:transition-none"
                href={copy.home.secondaryAction.href}
              >
                {copy.home.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div
            className="mt-14 hidden min-h-64 border-l border-amber-800/30 lg:block"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="mx-auto w-[min(92%,80rem)] py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 border-b border-stone-300 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase">
            {copy.home.scopeEyebrow}
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
              {copy.home.scopeTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
              {copy.home.scopeDescription}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
          {copy.home.sections.map((section, index) => (
            <article
              className="scroll-mt-8 border-b border-stone-300 py-10 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              id={section.id}
              key={section.id}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-800 uppercase">
                {String(index + 1).padStart(2, "0")} · {section.eyebrow}
              </p>
              <h3 className="mt-5 text-2xl leading-tight font-semibold tracking-[-0.02em]">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
