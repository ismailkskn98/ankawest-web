import type { Metadata, Viewport } from "next";

import {
  getSiteCopy,
  getSiteUrl,
  localePaths,
  siteIdentity,
  type Locale,
} from "@/config/site";

export const siteViewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafaf9",
};

export function createSiteMetadata(locale: Locale): Metadata {
  const copy = getSiteCopy(locale);
  const siteUrl = getSiteUrl();

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    applicationName: siteIdentity.name,
    ...(siteUrl
      ? {
          metadataBase: siteUrl,
          alternates: {
            canonical: localePaths[locale],
            languages: {
              "tr-TR": localePaths.tr,
              en: localePaths.en,
              "x-default": localePaths.tr,
            },
          },
        }
      : {
          robots: {
            index: false,
            follow: false,
          },
        }),
  };
}
