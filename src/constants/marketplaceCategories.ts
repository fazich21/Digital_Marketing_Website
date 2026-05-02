export const marketplaceCategories = [
  {
    slug: "pr",
    href: "/services/pr",
    title: "PR",
    tag: "Press Release Distribution",
    count: "4 Deliverables",
    description:
      "Build brand credibility and increase visibility through strategic press release distribution across authoritative technology and business publications.",
    highlights: [
      "Targeted placements on authoritative technology and business platforms",
      "Strategic messaging and narrative development for launches and milestones",
      "Full-service press release distribution with transparent tracking and reporting",
      "Executive positioning to establish founders as trusted industry voices",
    ],
    timeline: "Typical turnaround: 48 hours to launch",
    whatItIs:
      "Press release distribution is an effective way to build brand credibility and increase visibility. Whether you are launching a product, announcing updates, or forming partnerships, your business benefits from being featured on trusted media platforms.",
    role:
      "At Rankovate, we secure strategic press coverage across leading technology and business publications, along with a wide network of global media outlets. Our approach is designed to expand your reach, strengthen brand authority, and support long-term growth.",
    applications: [
      "Product launches that need immediate visibility and trusted coverage.",
      "Company updates or milestones that require strong media amplification.",
      "Partnership announcements that should reach high-value audiences.",
      "Authority-building campaigns for technology brands in competitive markets.",
    ],
    effectiveness: [
      "Build strong brand credibility through placements on trusted technology publications.",
      "Reach the right audience with targeted and strategic media distribution.",
      "Strengthen your SEO with high-quality backlinks and increased visibility.",
      "Position your brand as a recognized and reliable voice in your industry.",
      "Gain clear insights with transparent reporting and measurable results.",
    ],
    heroLine:
      "Increase brand credibility and reach with strategic press release distribution built for long-term visibility.",
    outcome:
      "Our press release distribution service expands your media reach, strengthens brand authority, and delivers measurable visibility gains through transparent reporting.",
    authorityFramework: [
      {
        icon: "Radio",
        title: "Media Strategy",
        description: "We develop a targeted media approach that aligns your narrative with market trends and publication opportunities.",
      },
      {
        icon: "PenTool",
        title: "Press Development",
        description: "We craft structured, high-quality press releases designed to meet editorial standards and communicate your message effectively.",
      },
      {
        icon: "Send",
        title: "Distribution",
        description: "We execute strategic distribution across authoritative technology and business platforms to ensure optimal exposure.",
      },
      {
        icon: "Activity",
        title: "Impact Analysis",
        description: "We deliver transparent reporting with clear insights into placements, reach, and performance outcomes.",
      },
    ],
  },
  {
    slug: "seo",
    href: "/services/seo",
    title: "SEO",
    tag: "Technical & On-Page SEO",
    count: "2 Core Deliverables",
    description:
      "Improve search performance with advanced technical audits, on-page optimization, and scalable SEO strategies designed for long-term organic growth.",
    highlights: ["Technical SEO audits", "On-page optimization & strategy"],
    timeline: "Typical turnaround: 5-10 business days",
    whatItIs:
      "Search engine optimization for technology companies is a data-driven process designed to improve discoverability through technical health and content relevance. We optimize underlying site architecture, improve performance, and make sure search engines can index your most valuable assets.",
    role:
      "SEO generates a steady stream of qualified organic traffic and reduces dependency on expensive paid acquisition. It builds durable brand authority and supports sustained growth through compounding search visibility.",
    applications: [
      "Websites experiencing declining organic rankings or inconsistent traffic.",
      "Technology businesses expanding into new markets or service categories.",
      "Content-led growth strategies targeting high-intent search queries.",
      "Platforms that need scalable organic acquisition and technical optimization.",
    ],
    effectiveness: [
      "Improves ranking positions for commercial and informational keywords.",
      "Increases qualified leads by matching content to search intent.",
      "Builds a durable growth engine through compounding organic visibility.",
      "Enhances site performance and user experience to support conversions.",
    ],
    heroLine:
      "Climb search rankings with a data-driven SEO strategy built for scaling technology brands.",
    outcome:
      "We deliver a technically sound, fast website that captures high-intent traffic and supports long-term organic growth.",
    authorityFramework: [
      {
        icon: "Stethoscope",
        title: "Technical Health",
        description: "We resolve indexing issues, site speed bottlenecks, and crawl errors to align your site with modern search standards.",
      },
      {
        icon: "Map",
        title: "Semantic Mapping",
        description: "Keywords are mapped to strategic page clusters that match user intent and build topical authority.",
      },
      {
        icon: "TrendingUp",
        title: "Optimization",
        description: "We optimize on-page elements and technical content to strengthen rankings for your priority queries.",
      },
      {
        icon: "BarChart3",
        title: "Growth Tracking",
        description: "We monitor rank movement and traffic trends, then refine the strategy based on measurable performance.",
      },
    ],
  },
  {
    slug: "link-building",
    href: "/services/link-building",
    title: "Link Building",
    tag: "High-Authority Backlinks",
    count: "5 Deliverables",
    description:
      "Build domain authority with high-quality contextual backlinks from trusted and relevant industry websites.",
    highlights: [
      "High-authority backlinks from relevant technology websites",
      "Strategic outreach to trusted publications and platforms",
      "Contextual link placements within quality content",
      "Link profile analysis and optimization",
      "Transparent reporting on acquired links",
    ],
    timeline: "Typical turnaround: 7-14 business days",
    whatItIs:
      "Link building is the process of acquiring high-quality backlinks from relevant and authoritative websites. These links signal trust and authority to search engines, helping improve rankings and overall visibility.",
    role:
      "At Rankovate, we focus on ethical, high-impact link building strategies that support long-term SEO growth.",
    applications: [
      "Pages that need stronger authority to rank for competitive keywords.",
      "Campaigns that require contextual placements on trusted publications.",
      "Technology brands expanding organic visibility in crowded niches.",
      "Websites that need a healthier and more scalable backlink profile.",
    ],
    effectiveness: [
      "Strengthen your website's authority and trust signals.",
      "Improve rankings across target keywords.",
      "Increase referral and organic traffic.",
      "Build a natural and scalable backlink profile.",
      "Achieve long-term SEO performance growth.",
    ],
    heroLine:
      "Strengthen authority and rankings with ethical, high-impact link building designed for long-term SEO growth.",
    outcome:
      "Our link building service improves authority, visibility, and organic performance through contextual placements and transparent reporting.",
    authorityFramework: [
      {
        icon: "Target",
        title: "Prospect Research",
        description: "We identify high-quality websites and publications that are relevant to your industry.",
      },
      {
        icon: "MessageSquare",
        title: "Outreach Strategy",
        description: "We connect with trusted publishers and platforms to secure strong link opportunities.",
      },
      {
        icon: "FileText",
        title: "Placement Execution",
        description: "We secure contextual backlinks on authoritative sites using ethical placement methods.",
      },
      {
        icon: "Activity",
        title: "Performance Monitoring",
        description: "We track link impact on rankings and domain authority to guide ongoing optimization.",
      },
    ],
  },
] as const;

export type ServiceCategory = (typeof marketplaceCategories)[number];
export type ServiceSlug = ServiceCategory["slug"];
