import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteCopy, type Locale } from "@/config/site";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteShell({ children, locale }: SiteShellProps) {
  const copy = getSiteCopy(locale);

  return (
    <body className="flex min-h-screen flex-col bg-stone-50 text-stone-950 antialiased">
      <a
        className="sr-only z-50 bg-stone-950 px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        href="#main-content"
      >
        {copy.accessibility.skipToContent}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </body>
  );
}
