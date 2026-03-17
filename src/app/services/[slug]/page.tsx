import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Link2, Newspaper, PenTool, Search,
  Radio, Target, MessageSquare, FileText,
  Activity, Send, Stethoscope, Map as MapIcon,
  TrendingUp, BarChart3, Lightbulb, List,
  Edit3, CheckCircle, type LucideIcon,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { marketplaceCategories, type ServiceCategory } from "@/constants/marketplaceCategories";
import * as motion from "framer-motion/client";

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base font-medium text-primary flex items-center justify-center md:justify-start gap-2 mb-6"
          >
            ✦ {service.tag}
          </motion.span>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0"
            >
              <Icon className="w-8 h-8" />
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold font-display leading-tight mb-4"
              >
                {service.title} <span className="text-primary">Service</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-foreground max-w-3xl leading-snug"
              >
                {service.heroLine}
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5">
              <span className="text-sm font-medium">
                {service.timeline} • <span className="text-primary">{service.count}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
                ✦ DEFINITION
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">
                What <span className="text-primary">It Is</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {service.whatItIs}
                </p>
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed border-l-2 border-primary pl-6">
                  {service.role}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-background p-8 md:p-12 shadow-2xl shadow-primary/5"
            >
              <h3 className="text-2xl font-bold font-display mb-6">Common Applications</h3>
              <div className="space-y-4">
                {service.applications.map((app, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <ArrowRight className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{app}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-0" />
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-base font-medium text-primary flex items-center justify-center gap-2 mb-3">
              ✦ DELIVERABLES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              What You <span className="text-primary">Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
             <p className="text-2xl md:text-3xl font-bold font-display max-w-3xl mx-auto leading-tight">
              {service.outcome}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Authority Framework Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
              ✦ OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
              Our <span className="text-primary">Authority</span> Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.authorityFramework.map((step, index) => {
              const StepIcon = allIcons[step.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                    {StepIcon ? (
                      <StepIcon className="w-7 h-7 text-primary" />
                    ) : (
                      <span className="text-primary font-bold">{index + 1}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-4">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Effectiveness Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Link href="/contact" className="block w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background border border-border group-hover:border-primary/40 transition-colors flex items-center justify-center p-12">
                   <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                          <TrendingUp className="w-12 h-12 text-primary" />
                      </div>
                      <h4 className="text-2xl font-bold font-display mb-4">Driving Growth</h4>
                      <p className="text-muted-foreground mb-6">Strategic execution focused on long-term performance and brand authority.</p>
                      <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                        Get Started <ArrowRight className="w-5 h-5" />
                      </span>
                   </div>
                </div>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
                ✦ IMPACT
              </span>
              <h3 className="text-3xl md:text-5xl font-bold font-display mb-8">
                How It Is <span className="text-primary">Effective</span>
              </h3>
              <div className="space-y-6">
                {service.effectiveness.map((item) => (
                  <div key={item} className="flex gap-5 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
