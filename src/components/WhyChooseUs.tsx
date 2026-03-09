import { motion } from "framer-motion";

const stats = [
  {
    tag: "Projects Launched",
    value: "150+",
    desc: "From stealth to scale—Rankovate has powered PR and SEO campaigns for top crypto startups, tools, and exchanges.",
  },
  {
    tag: "Media Placements",
    value: "1,200+",
    desc: "Your story. Our network. Published on tier-1 crypto sites and global platforms via powerful press and SEO distribution.",
  },
  {
    tag: "Satisfied Clients",
    value: "500+",
    desc: "Trusted by Web3 founders globally — delivering results that build credibility and long-term growth.",
  },
  {
    tag: "Industry Mentions",
    value: "50+",
    desc: "Recognized across major crypto media and marketing platforms for consistent, high-quality execution.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
          ✦ WHY CHOOSE US
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
          Why <span className="text-primary">Rankovate</span> Stands Out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                ✦ {s.tag}
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
