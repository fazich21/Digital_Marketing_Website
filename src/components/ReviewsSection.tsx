const reviews = [
  {
    name: "James Morgan",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Rankovate nailed our global coverage. They helped us shape the message and target the right platforms perfectly.",
  },
  {
    name: "Paul Richardson",
    date: "Jan 29, 2026",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Fast, responsive, and well-connected. We got featured on top sites we've been trying to break into for months.",
  },
  {
    name: "Joseph Naccarato",
    date: "Jan 17, 2026",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "The visibility boost was instant. Highly recommend for any Web3 project looking to scale their PR efforts.",
  },
  {
    name: "Emily Carter",
    date: "Dec 30, 2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Their SEO strategy gave us long-term traction. Within weeks, we started ranking for high-intent Web3 terms.",
  },
  {
    name: "Daniel Reeves",
    date: "Dec 18, 2025",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Rankovate understood our launch timeline perfectly. Every milestone was on time and tied to growth.",
  },
  {
    name: "Sophia Bennett",
    date: "Dec 03, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Proactive and strategic team. They aligned PR and link building into a growth system that compounds.",
  },
  {
    name: "Noah Williams",
    date: "Nov 20, 2025",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Excellent communication. We always knew what was being shipped and how it impacted our performance.",
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
            <div className="flex w-max animate-marquee gap-6 py-2" style={{ animationDuration: "35s" }}>
              {reviewTrack.map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="w-[300px] md:w-[360px] shrink-0 rounded-xl border border-border bg-card p-6"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{r.text}"</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={r.image}
                        alt={`${r.name} avatar`}
                        className="w-8 h-8 rounded-full object-cover border border-border"
                        loading="lazy"
                      />
                      <span className="text-sm font-semibold">{r.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{r.date}</span>
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
