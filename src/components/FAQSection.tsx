import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Rankovate?",
    a: "Rankovate is a Web3 marketing agency built for crypto startups. We offer two core services: Press Release Distribution, Crypto SEO & Link Building.",
  },
  {
    q: "What services does Rankovate provide?",
    a: "We provide Crypto PR Distribution, SEO & Link Building, Content Writing, AI SEO, and comprehensive Web3 marketing services tailored for blockchain projects.",
  },
  {
    q: "Does Rankovate guarantee project success or raise funds?",
    a: "No. Rankovate provides marketing services only. We don't guarantee fundraising outcomes or project success, but we deliver measurable marketing results.",
  },
  {
    q: "How does Press Release Distribution work?",
    a: "You provide or we help craft your press release, then we distribute it across our network of 100+ crypto and mainstream media outlets for maximum visibility.",
  },
  {
    q: "What's included in your Crypto SEO service?",
    a: "Our Crypto SEO service includes keyword research, on-page optimization, link building, content strategy, and monthly reporting tailored for Web3 projects.",
  },
  {
    q: "What's the usual delivery time?",
    a: "Most services are delivered within 7-14 business days. Press releases can be distributed within 48 hours of approval.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
          ✦ FAQS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
          About Us — <span className="text-primary">FAQ's</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-secondary px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
