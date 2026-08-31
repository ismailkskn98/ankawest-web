import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { createSiteMetadata, siteViewport } from "@/config/metadata";

export const metadata: Metadata = createSiteMetadata("en");
export const viewport = siteViewport;

type EnglishRootLayoutProps = {
  children: ReactNode;
};

export default function EnglishRootLayout({ children }: EnglishRootLayoutProps) {
  return (
    <html lang="en">
      <SiteShell locale="en">{children}</SiteShell>
    </html>
  );
}
