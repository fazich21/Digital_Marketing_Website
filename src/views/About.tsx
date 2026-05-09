import { motion } from "framer-motion";
import { Target, Eye, Gem, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "We help technology companies grow through strategic SEO, targeted media exposure, and data-driven marketing built for long-term, sustainable scale.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become a trusted growth partner for technology brands, delivering consistent visibility, strong search performance, and measurable business impact.",
  },
  {
    icon: Gem,
    title: "Our Values",
    desc: "We believe in doing things the right way: no shortcuts, no artificial tactics, and a strong focus on data, quality execution, and scalable growth.",
  },
];

const features = [
  {
    title: "Strategic Distribution",
    desc: "Expand your visibility through relevant, high-impact channels where your audience already pays attention.",
  },
  {
    title: "Strong Rankings",
    desc: "Combine technical SEO and authority signals to build durable search performance that compounds over time.",
  },
  {
    title: "Measurable Impact",
    desc: "Track every campaign through transparent reporting and clear outcomes you can trust.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
                OUR APPROACH
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Our <span className="text-primary">Approach</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Driven by Strategy. Powered by Precision.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                  {[40, 65, 45, 80, 55, 90, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg relative group/bar"
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover/bar:opacity-100 transition-opacity">
                        {height}%
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-widest px-1">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Organic Visibility</p>
                    <p className="text-2xl font-bold text-primary">+145%</p>
                  </div>
                  <div className="h-12 w-24 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Growth Metric</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground mb-6 transition-all duration-300">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary mb-3">{v.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
            WHAT MAKES US DIFFERENT?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Built for Visibility
            <br />
            That Drives <span className="text-primary">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Strategic distribution. Strong rankings. Measurable impact. We combine search optimization with targeted media exposure across high-impact channels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-secondary p-6"
              >
                <h3 className="font-bold font-display mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
            OUR EXECUTION MODEL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Built for Visibility That
            <br />
            Creates <span className="text-primary">Sustained Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            We help technology brands strengthen authority and scale reach through strategic PR, link building, and distribution designed to perform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-bold font-display text-lg mb-3">Authority-Driven PR & Link Building</h3>
              <p className="text-sm text-muted-foreground">
                We place your brand on credible technology platforms while strengthening your SEO through high-quality, relevant backlinks.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-bold font-display text-lg mb-3">Distribution Designed to Scale</h3>
              <p className="text-sm text-muted-foreground">
                With a focus on reach and relevance, we ensure your content is delivered to the right platforms and audiences for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default About;
