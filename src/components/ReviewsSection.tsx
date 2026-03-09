import { Quote } from "lucide-react";

const reviews = [
  {
    name: "James Morgan",
    date: "Feb 12, 2026",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=James%20Morgan",
    text: "We wanted global coverage for our latest update, and Rankovate nailed it. They didn't just blast out a generic press release — they helped us shape the message and target the right platforms.",
  },
  {
    name: "Paul Richardson",
    date: "Jan 29, 2026",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Paul%20Richardson",
    text: "Fast, responsive, and very well-connected in the crypto media space. We got featured on sites we've been trying to break into for months. Rankovate made it happen in a matter of days.",
  },
  {
    name: "Joseph Naccarato",
    date: "Jan 17, 2026",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Joseph%20Naccarato",
    text: "The visibility boost was instant, and we've been riding that momentum ever since. Highly recommend for any Web3 project looking to scale their PR efforts.",
  },
  {
    name: "Emily Carter",
    date: "Dec 30, 2025",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emily%20Carter",
    text: "Their SEO and content strategy gave us long-term traction, not just a one-time spike. Within weeks, we started ranking for high-intent Web3 terms that actually convert.",
  },
  {
    name: "Daniel Reeves",
    date: "Dec 18, 2025",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Daniel%20Reeves",
    text: "Rankovate understood our token launch timeline better than most agencies. Every campaign milestone was clear, on time, and directly tied to measurable growth.",
  },
  {
    name: "Sophia Bennett",
    date: "Dec 03, 2025",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sophia%20Bennett",
    text: "The team is proactive and genuinely strategic. They helped us align PR, link building, and content into one growth system that keeps compounding.",
  },
  {
    name: "Noah Williams",
    date: "Nov 20, 2025",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Noah%20Williams",
    text: "Communication was excellent from day one. We always knew what was being shipped, where we were getting coverage, and how each deliverable impacted performance.",
  },
];

const reviewTrack = [...reviews, ...reviews];

const ReviewsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <span className="text-base font-medium text-primary flex items-center gap-2 mb-3">
          ✦ CLIENT TESTIMONIALS
        </span>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            What <span className="text-primary">Web3</span> Founders <em>Say</em>
            <br />About <span className="text-primary">Rankovate</span>
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-8 py-2" style={{ animationDuration: "42s" }}>
              {reviewTrack.map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="w-[360px] md:w-[430px] shrink-0 rounded-xl border border-border bg-card p-8"
                >
                  <Quote className="w-9 h-9 text-primary mb-5" />
                  <p className="text-base text-muted-foreground leading-relaxed mb-7">{r.text}</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={r.image}
                        alt={`${r.name} avatar`}
                        className="w-9 h-9 rounded-full object-cover border border-border"
                        loading="lazy"
                      />
                      <span className="text-base font-semibold">{r.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
