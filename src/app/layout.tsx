import type { Metadata } from "next";
import type { ReactNode } from "react";
import AppProviders from "@/components/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  title: "Rankovate — Web3 Marketing Agency | Crypto PR & SEO",
  description:
    "Rankovate is a Web3 marketing agency specializing in crypto PR distribution, SEO, and link building for blockchain startups.",
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
