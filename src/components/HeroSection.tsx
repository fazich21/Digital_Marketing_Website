import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight, Search, Link2, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  "White label SEO services with superfast turnarounds",
  "Unrivalled quality for SEO agencies and teams",
  "ROI & margins designed for SEO resellers",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                Scale your{" "}
                <span className="text-primary">SEO.</span>
                <br />
                Not your
                <br />
                headcount.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 border-border text-foreground hover:bg-secondary"
              >
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
            >
              <span className="text-sm text-foreground font-medium">
                We are rated <span className="text-primary font-bold">4.8</span> based on{" "}
                <span className="text-primary font-bold">1566 reviews</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative w-full max-w-xl mx-auto lg:mx-0 lg:justify-self-end"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative aspect-[4/5] rounded-3xl border border-border/70 bg-card overflow-hidden shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={heroBg}
                alt="SEO, link building, and content writing workflow dashboard"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/20 blur-3xl" />

              <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-border/80 bg-card/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Growth Focus</p>
                <p className="font-display text-lg font-bold text-foreground">SEO + Links + Content</p>
                <p className="text-xs text-muted-foreground mt-1">
                  One integrated workflow to improve rankings, authority, and conversions.
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-12 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card/95 backdrop-blur px-3 py-2"
            >
              <Search className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">SEO</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -right-4 top-1/3 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card/95 backdrop-blur px-3 py-2"
            >
              <Link2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Link Building</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-8 -bottom-5 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card/95 backdrop-blur px-3 py-2"
            >
              <PenTool className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Content Writing</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
