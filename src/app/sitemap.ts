import type { MetadataRoute } from "next";

import { getSiteUrl, localePaths, supportedLocales } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return supportedLocales.map((locale) => ({
    url: new URL(localePaths[locale], siteUrl).toString(),
    changeFrequency: "monthly",
    priority: locale === "tr" ? 1 : 0.8,
  }));
}
