import { getSiteCopy, siteIdentity, type Locale } from "@/config/site";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = getSiteCopy(locale);

  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-200">
      <div className="mx-auto flex w-[min(92%,80rem)] flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="text-sm font-semibold tracking-[0.18em] text-white uppercase"
            translate="no"
          >
            {siteIdentity.name}
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-stone-400">
            {copy.footer.description}
          </p>
        </div>
        <p className="text-xs leading-5 text-stone-400">{copy.footer.legal}</p>
      </div>
    </footer>
  );
}
