import { motion } from "framer-motion";
import { Link2, Newspaper, Search, PenTool, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { marketplaceCategories } from "@/constants/marketplaceCategories";

const serviceIcons: Record<(typeof marketplaceCategories)[number]["title"], LucideIcon> = {
  "Link Building": Link2,
  PR: Newspaper,
  SEO: Search,
  "Content Writing": PenTool,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Explore the <span className="text-primary">marketplace.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            View all services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketplaceCategories.map((service, i) => {
            const Icon = serviceIcons[service.title];

            return (
              <Link key={service.title} href={service.href} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative h-full rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-xs text-muted-foreground">{service.tag}</span>
                    <h3 className="text-xl font-bold font-display mt-2 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {service.highlights.map((detail) => (
                        <p key={detail} className="text-xs text-muted-foreground">
                          • {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-primary font-medium">{service.timeline}</p>
                    <p className="text-xs text-muted-foreground mt-1">{service.count}</p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
