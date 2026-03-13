import { motion } from "framer-motion";
import { Zap, Cpu, BarChart3 } from "lucide-react";

const processSteps = [
  {
    icon: Zap,
    title: "Strategy Overhype",
    desc: "We don't just plan, we build the strategy that makes your competitors look like they're still in the analog age.",
  },
  {
    icon: Cpu,
    title: "Tech-first execution",
    desc: "Execution is everything. We prioritize technology and efficiency to bring your vision to life at lightning speed.",
  },
  {
    icon: BarChart3,
    title: "Transparent results",
    desc: "No smoke and mirrors. Just real, measurable results that you can track and verify at every step of the way.",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
            Our <span className="text-primary">process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold font-display text-2xl mb-4">{step.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
              <div className="absolute top-6 right-8 text-4xl font-bold font-display opacity-5">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
