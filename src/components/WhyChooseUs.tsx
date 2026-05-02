import { motion } from "framer-motion";

const stats = [
  {
    tag: "Media Placements",
    value: "150+",
    desc: "We position brands across credible technology and business publications through targeted outreach and strategic distribution.",
  },
  {
    tag: "Satisfied Clients",
    value: "1,200+",
    desc: "Our clients, from emerging startups to established tech firms, work with us to improve search visibility, attract qualified traffic, and achieve consistent growth.",
  },
  {
    tag: "Industry Recognition",
    value: "500+",
    desc: "Our work is recognized across technology communities and platforms for delivering effective strategies, measurable performance, and long-term results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
          âœ¦ PROJECTS DELIVERED
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">
          Campaigns Built for <span className="text-primary">Measurable Growth</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-12">
          We partner with technology startups and growing companies to launch and scale SEO and growth marketing initiatives that deliver real business impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-secondary border border-border p-8"
            >
              <span className="text-sm font-medium text-primary flex items-center gap-2 mb-4">
                âœ¦ {s.tag}
              </span>
              <div className="text-5xl md:text-6xl font-bold font-display text-primary mb-4">
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
