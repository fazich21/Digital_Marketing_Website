"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { marketplaceCategories } from "@/constants/marketplaceCategories";

const topNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLink = { label: "Services", href: "/services" };

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto relative flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold font-display">
            <span className="text-primary">R</span>ankovate
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          <Link
            href={topNavLinks[0].href}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            {topNavLinks[0].label}
          </Link>

          <div className="relative group">
            <Link
              href={serviceLink.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              {serviceLink.label}
              <ChevronDown className="w-4 h-4" />
            </Link>

            <div className="invisible absolute left-0 top-full w-72 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-border bg-card p-2 shadow-xl">
                {marketplaceCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="block rounded-lg px-3 py-2 hover:bg-secondary transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{category.title}</p>
                    <p className="text-xs text-muted-foreground">{category.tag}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topNavLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex text-sm font-semibold text-white transition-colors hover:text-primary"
        >
          Lets Grow
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-6 pt-4 space-y-4">
          {mobileNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-white hover:text-white/80"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="rounded-lg border border-border bg-card p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Service Categories
            </p>
            <div className="space-y-2">
              {marketplaceCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="block text-sm text-white hover:text-white/80 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
