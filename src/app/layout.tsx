import type { Metadata } from "next";
import type { ReactNode } from "react";
import AppProviders from "@/components/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  title: "Laserrank — Technology Marketing Agency | Digital PR & SEO",
  description:
    "Laserrank is a technology marketing agency specializing in digital PR distribution, SEO, and link building for high-growth tech companies.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
