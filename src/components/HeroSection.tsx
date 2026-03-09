import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "White label SEO services with superfast turnarounds",
  "Unrivalled quality for SEO agencies and teams",
  "ROI & margins designed for SEO resellers",
];

const sliderItems = [
  "Infographic Design",
  "Media Placements DR 50+",
  "Social Video Ads",
  "Explainer Videos",
  "Blog Writing Service",
  "Article Writing",
  "Product Descriptions",
  "Keyword Research",
  "Multilingual Outreach",
  "Infographic Outreach",
  "Content Syndication",
  "Website Copywriting",
  "Blogger Outreach",
  "Press Release Writing",
  "Local Citation Building",
  "Niche Edits",
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
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 border-border text-foreground hover:bg-secondary hover:text-primary"
              >
                <Link href="/contact">
                  Lets Grow <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
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
            <div className="relative rounded-3xl bg-card overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-border/70" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="absolute -top-24 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-background via-background/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="relative z-20 h-[520px] md:h-[620px]">
                <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                  <div className="h-full overflow-hidden">
                    <motion.div
                      className="space-y-4"
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    >
                      {[...sliderItems, ...sliderItems].map((item, index) => (
                        <div
                          key={`col-1-${item}-${index}`}
                          className="slider-glow-border w-full px-5 py-4"
                        >
                          <p className="text-base font-semibold text-foreground">{item}</p>
                          <p className="text-sm text-primary/90 mt-1">Campaign-ready delivery</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="h-full overflow-hidden hidden sm:block">
                    <motion.div
                      className="space-y-4"
                      animate={{ y: ["-50%", "0%"] }}
                      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    >
                      {[...sliderItems, ...sliderItems].map((item, index) => (
                        <div
                          key={`col-2-${item}-${index}`}
                          className="slider-glow-border w-full px-5 py-4"
                        >
                          <p className="text-base font-semibold text-foreground">{item}</p>
                          <p className="text-sm text-primary/90 mt-1">White-label execution</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="h-full overflow-hidden hidden lg:block">
                    <motion.div
                      className="space-y-4"
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    >
                      {[...sliderItems, ...sliderItems].map((item, index) => (
                        <div
                          key={`col-3-${item}-${index}`}
                          className="slider-glow-border w-full px-5 py-4"
                        >
                          <p className="text-base font-semibold text-foreground">{item}</p>
                          <p className="text-sm text-primary/90 mt-1">Scalable growth ops</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
