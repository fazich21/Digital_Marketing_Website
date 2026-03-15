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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
            ✦ OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
            Our <span className="text-primary">process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary border border-border text-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold font-display text-2xl mb-4">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
