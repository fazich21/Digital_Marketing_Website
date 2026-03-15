import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactFaqs = [
  {
    question: "What is the fastest way to contact Rankovate?",
    answer:
      "The fastest way is to message us directly on Telegram. You can also fill out the contact form and our team will follow up.",
  },
  {
    question: "Can I contact you without Telegram?",
    answer:
      "Yes. If you do not use Telegram, simply fill out the contact form with your project details and we will reply by email.",
  },
  {
    question: "Should I use Telegram or the form?",
    answer:
      "Use Telegram for direct and quick conversation. Use the form when you want to share complete requirements in one structured message.",
  },
  {
    question: "What details should I include in the contact form?",
    answer:
      "Include your website, project type, goals, and timeline. The more context you share, the faster we can recommend the right service plan.",
  },
  {
    question: "How quickly will your team respond?",
    answer:
      "Most inquiries get a response within one business day. Telegram messages are usually answered faster when a strategist is available.",
  },
  {
    question: "Can I share my requirements first and discuss later?",
    answer:
      "Yes. You can submit full requirements in the form first, and we will review them before scheduling the next discussion.",
  },
  {
    question: "Do you accept international clients?",
    answer:
      "Yes, we work with Web3 and blockchain teams globally. You can contact us via Telegram or form from any region.",
  },
  {
    question: "Can I contact you for only one service?",
    answer:
      "Absolutely. You can reach out for a single service like PR, SEO, Link Building, or Content Writing, and scale later if needed.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "", lastName: "", website: "", phone: "", email: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ firstName: "", lastName: "", website: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
                ✦ CONTACT US
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Our team is ready to <span className="text-primary">help</span>
              </h1>
              <p className="text-muted-foreground mb-10 max-w-md">
                Looking for crypto marketing, PR distribution, or SEO support? Rankovate's team is here to help Web3 and blockchain projects grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telegram</p>
                    <a
                      href="https://t.me/+971505184462"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors mt-1"
                    >
                      <Send className="w-4 h-4" />
                      Open Telegram
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">hello@rankovate.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">First Name</label>
                    <Input
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                    <Input
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your Website</label>
                  <Input
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone No</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">E-mail</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary border-border min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-full" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary flex items-center gap-2 mb-3">
              ✦ CONTACT FAQS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
              Contacting <span className="text-primary">Rankovate</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {contactFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`contact-faq-${index}`}
                  className="rounded-xl border border-border bg-secondary px-6 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
