import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { createSiteMetadata, siteViewport } from "@/config/metadata";

export const metadata: Metadata = createSiteMetadata("tr");
export const viewport = siteViewport;

type TurkishRootLayoutProps = {
  children: ReactNode;
};

export default function TurkishRootLayout({ children }: TurkishRootLayoutProps) {
  return (
    <html lang="tr">
      <SiteShell locale="tr">{children}</SiteShell>
    </html>
  );
}
