import { motion } from "framer-motion";
import { Tag, Headphones, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Tag,
    title: "White Label Services",
    desc: "White label services designed for agencies to resell",
  },
  {
    icon: Headphones,
    title: "Fanatical Support",
    desc: "A dedicated support team on hand via telephone & email",
  },
  {
    icon: Users,
    title: "No Vendor Clutter",
    desc: "No need to manage multiple freelancers & vendors",
  },
  {
    icon: ShieldCheck,
    title: "Money Back Guarantee",
    desc: "100% money back guarantee on all of our services",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-2">We have the answer.</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
            In-house vs freelancers?
            <br />
            <span className="text-primary">Neither.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold font-display text-xl mb-3">{f.title}</h3>
              <p className="text-base text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
