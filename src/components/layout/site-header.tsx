import Link from "next/link";

import {
  getAlternateLocale,
  getSiteCopy,
  localePaths,
  siteIdentity,
  siteNavigation,
  type Locale,
} from "@/config/site";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const copy = getSiteCopy(locale);
  const alternateLocale = getAlternateLocale(locale);

  return (
    <header className="border-b border-stone-200/80 bg-stone-50/95">
      <div className="mx-auto flex w-[min(92%,80rem)] flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="w-fit text-lg font-semibold tracking-[0.18em] text-stone-950 uppercase transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 motion-reduce:transition-none"
          href={localePaths[locale]}
          aria-label={copy.header.homeLabel}
          translate="no"
        >
          {siteIdentity.name}
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
          <nav aria-label={copy.header.navigationLabel}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-700">
              {siteNavigation[locale].map((item) => (
                <li key={item.id}>
                  <Link
                    className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-stone-300 px-3 text-xs font-semibold tracking-[0.14em] text-stone-900 transition-colors hover:border-stone-950 hover:bg-stone-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 motion-reduce:transition-none"
            href={localePaths[alternateLocale]}
            hrefLang={alternateLocale}
            lang={alternateLocale}
            aria-label={copy.header.languageSwitchLabel}
          >
            {copy.header.languageSwitchText}
          </Link>
        </div>
      </div>
    </header>
  );
}
