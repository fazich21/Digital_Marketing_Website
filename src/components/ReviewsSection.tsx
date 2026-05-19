import React from "react";

const reviews = [
  {
    name: "James Morgan",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    text: "We worked with Laserrank for link building and digital PR, and the results were impressive. The backlinks were high quality, and our organic traffic started growing within weeks.",
  },
  {
    name: "Paul Richardson",
    date: "Jan 29, 2026",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Great experience working with Laserrank. Their SEO strategy and PR campaigns helped us build credibility in the SaaS space.",
  },
  {
    name: "Joseph Naccarato",
    date: "Jan 17, 2026",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Professional team with a strong understanding of tech SEO and PR. They helped us gain visibility on niche websites and improved our rankings for competitive keywords.",
  },
  {
    name: "Emily Carter",
    date: "Dec 30, 2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Great experience working with their team. The SEO work was structured and transparent, and the link building was completely white-hat. We saw steady ranking growth.",
  },
  {
    name: "Daniel Reeves",
    date: "Dec 18, 2025",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Excellent outreach process. The links were contextual and naturally placed, which made a noticeable difference in our SEO performance.",
  },
  {
    name: "Sophia Bennett",
    date: "Dec 03, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
    text: "The team handled everything professionally, from prospecting to placement. The backlinks we received were highly relevant and valuable.",
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
            <br />About <span className="text-primary">Laserrank</span>
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-6 py-4" style={{ animationDuration: "35s" }}>
              {reviewTrack.map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="w-[300px] md:w-[380px] shrink-0 rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-base md:text-lg font-display font-medium text-foreground leading-snug mb-8 tracking-tight">
                      "{r.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <img
                        src={r.image}
                        alt={`${r.name} avatar`}
                        className="w-10 h-10 rounded-full object-cover border border-border transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-none mb-1">{r.name}</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{r.date}</span>
                      </div>
                    </div>
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
