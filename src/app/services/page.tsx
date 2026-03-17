import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Link2, Newspaper, PenTool, Search, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { marketplaceCategories, type ServiceCategory } from "@/constants/marketplaceCategories";

const serviceIcons: Record<ServiceCategory["title"], LucideIcon> = {
  "Link Building": Link2,
  PR: Newspaper,
  SEO: Search,
  "Content Writing": PenTool,
};

export const metadata: Metadata = {
  title: "Services | Rankovate",
  description:
    "Explore PR, SEO, Link Building, and Content Writing services designed to scale visibility, authority, and growth.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
            ✦ SERVICES
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
            Explore Growth Services
            <br />
            Built for <span className="text-primary">Results</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Choose the service that matches your current growth stage. Every service has clear deliverables,
            practical applications, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketplaceCategories.map((service) => {
              const Icon = serviceIcons[service.title];

              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <span className="text-xs text-muted-foreground">{service.tag}</span>
                  <h2 className="text-xl font-bold font-display mt-2 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <p className="text-xs text-primary font-medium">{service.timeline}</p>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">{service.count}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    View service <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
