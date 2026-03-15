import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Link2, Newspaper, PenTool, Search,
  Radio, Target, MessageSquare, FileText,
  Activity, Send, Stethoscope, Map as MapIcon,
  TrendingUp, BarChart3, Lightbulb, List,
  Edit3, CheckCircle, type LucideIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { marketplaceCategories, type ServiceCategory } from "@/constants/marketplaceCategories";

const serviceIcons: Record<ServiceCategory["title"], LucideIcon> = {
  "Link Building": Link2,
  PR: Newspaper,
  SEO: Search,
  "Content Writing": PenTool,
};

const allIcons: Record<string, LucideIcon> = {
  Search, Target, MessageSquare, FileText,
  Radio, PenTool, Send, Activity,
  Stethoscope, Map: MapIcon, TrendingUp, BarChart3,
  Lightbulb, List, Edit3, CheckCircle,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const getServiceBySlug = (slug: string) =>
  marketplaceCategories.find((service) => service.slug === slug);

export function generateStaticParams() {
  return marketplaceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Rankovate",
    };
  }

  return {
    title: `${service.title} Services | Rankovate`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.title];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
            ✦ {service.tag}
          </span>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display">
              {service.title} <span className="text-primary">Service</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mb-5">{service.description}</p>
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mb-8 leading-snug">
            {service.heroLine}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="text-sm text-foreground">
              {service.timeline} • <span className="text-primary font-semibold">{service.count}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-2xl font-bold font-display mb-3">
                What <span className="text-primary">It Is</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.whatItIs}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-2xl font-bold font-display mb-4">
                What You <span className="text-primary">Get</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.highlights.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-secondary/70 px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mb-12">
            <div className="rounded-2xl border border-border bg-primary/5 p-7">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-10 text-center">
                Our Authority Framework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.authorityFramework.map((step, index) => {
                  const StepIcon = allIcons[step.icon];
                  return (
                    <div key={index} className="flex flex-col items-center text-center group relative">
                      {/* Optional connecting line for larger screens */}
                      {index < service.authorityFramework.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-border/50 -z-10" />
                      )}

                      <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-sm">
                        {StepIcon ? (
                          <StepIcon className="w-7 h-7 text-primary" />
                        ) : (
                          <span className="text-primary font-bold">{index + 1}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold font-display mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>



          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl border border-border bg-secondary p-7">
              <h3 className="text-xl font-bold font-display mb-4">
                How It Is <span className="text-primary">Effective</span>
              </h3>
              <div className="space-y-3">
                {service.effectiveness.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
