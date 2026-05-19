import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs?: ReadonlyArray<FAQ>;
  title?: string;
  subtitle?: string;
}

const defaultFaqs = [
  {
    q: "What is Laserrank?",
    a: "Laserrank is a technology-focused SEO and growth marketing agency that helps businesses improve visibility and drive sustainable online growth.",
  },
  {
    q: "What services does Laserrank provide?",
    a: "We offer technical SEO, PR and media placements, link building, and growth marketing solutions for technology companies.",
  },
  {
    q: "Do you guarantee results or business outcomes?",
    a: "We focus on delivering measurable improvements in visibility and traffic, but we do not guarantee specific rankings or business outcomes.",
  },
  {
    q: "How does press release distribution work?",
    a: "We create and distribute your news to relevant technology and business publications to increase brand visibility and authority.",
  },
  {
    q: "What's included in your SEO service?",
    a: "Our SEO service includes technical audits, keyword strategy, on-page optimization, and authority-building through backlinks and strategic content planning.",
  },
  {
    q: "What is the typical delivery time?",
    a: "Delivery timelines vary by service, but most projects begin showing measurable progress within a few weeks.",
  },
];

const FAQSection = ({ 
  faqs = defaultFaqs, 
  title = "About Us — FAQ's",
  subtitle = "FAQS"
}: FAQSectionProps) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
          ✦ {subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
          {title.split(" — ").map((part, i) => (
            <span key={i}>
              {i > 0 && " — "}
              {part.includes("FAQ's") ? (
                <span className="text-primary">{part}</span>
              ) : (
                part
              )}
            </span>
          ))}
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
