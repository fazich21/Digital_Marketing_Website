import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "We help Web3 startups grow through press coverage, search visibility, and influencer amplification — built to scale long-term.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the go-to launch engine for crypto founders — delivering trusted placements, organic rankings, and real user momentum.",
  },
  {
    icon: Gem,
    title: "Our Value",
    desc: "No shortcuts. No bots. Just smart marketing backed by real metrics, premium media, and scalable Web3 native execution.",
  },
];

const features = [
  { title: "Visibility That Drives Listings", desc: "Get seen where it matters most — exchanges, aggregators, and media." },
  { title: "Scalable Growth at Every Stage", desc: "From seed round to market leader, we grow with you." },
  { title: "Cost-Efficient Execution", desc: "Lean campaigns, maximum ROI. No bloated retainers." },
  { title: "Credible Brand Presence", desc: "Tier-1 placements that build trust and authority." },
  { title: "Faster Go-to-Market Edge", desc: "Launch faster with ready-made distribution and media networks." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
            ✦ OUR APPROACH
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
            Driven by <span className="text-primary">Purpose</span>
            <br />
            Powered by <span className="text-primary">Precision</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            At Rankovate, we execute lean, high-impact campaigns combining crypto PR & SEO — focused on traction, not vanity hype.
          </p>
        </div>
      </section>

      {/* Mission/Vision/Value */}
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
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
            ✦ RANKOVATE FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Why <span className="text-primary">Web3</span> Projects Grow
            <br />Better with Rankovate
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            From press release distribution across top crypto media, to SEO & link building for higher Google visibility — Rankovate supports your project's reach across the Web3 space.
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

      {/* Distribute/Rank/Amplify */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
            ✦ Built to Make Noise Where It Matters
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            We <span className="text-primary">distribute</span>. We <span className="text-primary">rank</span>.
            <br />We <span className="text-primary">amplify</span>.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            At Rankovate, we help Web3 projects grow faster by getting them featured, ranked, and promoted across the channels that drive results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-bold font-display text-lg mb-3">Tier-1 PR Distribution & Backlinks</h3>
              <p className="text-sm text-muted-foreground">
                We get your PRs placed on top crypto media and build SEO-rich backlinks — without touching the writing.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-bold font-display text-lg mb-3">Syndication That Scales</h3>
              <p className="text-sm text-muted-foreground">
                You bring the content — we handle full syndication to crypto news platforms and niche audiences.
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
