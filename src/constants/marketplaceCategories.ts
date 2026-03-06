export const marketplaceCategories = [
  {
    slug: "link-building",
    href: "/services/link-building",
    title: "Link Building",
    tag: "A la carte link building",
    count: "6 Services in this category",
    description: "Build authority with contextual backlinks from vetted, niche-relevant websites.",
    highlights: ["Guest posts and niche edits", "Anchor text and URL strategy"],
    timeline: "Typical turnaround: 7-14 business days",
    whatItIs:
      "Link building is the process of acquiring relevant, trustworthy backlinks from external sites to strengthen your domain authority and organic rankings.",
    role:
      "Its role is to improve off-page SEO signals, increase topical authority, and help key pages rank for competitive search terms.",
    applications: [
      "Product and service landing pages that need stronger authority.",
      "New websites that need trust signals to compete in search results.",
      "Content hubs and blog clusters targeting high-intent keywords.",
      "Local and niche campaigns where contextual citations matter.",
    ],
    effectiveness: [
      "Quality backlinks improve domain credibility and ranking potential.",
      "Strategic anchors reinforce topical relevance for target pages.",
      "Long-term link equity supports sustained traffic growth.",
      "Editorial placements can drive both SEO value and referral traffic.",
    ],
  },
  {
    slug: "pr",
    href: "/services/pr",
    title: "PR",
    tag: "Secure media links",
    count: "6 Services in this category",
    description: "Distribute your story to trusted crypto and business media for stronger visibility.",
    highlights: ["Press release distribution", "Placement and publication reporting"],
    timeline: "Typical turnaround: 48 hours to launch",
    whatItIs:
      "PR service distributes your announcements to media outlets and digital publications to build visibility, credibility, and branded search demand.",
    role:
      "Its role is to position your brand in front of relevant audiences while creating trust signals that support both acquisition and SEO.",
    applications: [
      "Product launches, roadmap announcements, and funding updates.",
      "Brand awareness pushes in new markets or verticals.",
      "Reputation building for early-stage and growth-stage companies.",
      "Campaigns that need immediate visibility and media momentum.",
    ],
    effectiveness: [
      "Media coverage strengthens brand trust and social proof.",
      "Syndication amplifies reach across multiple audience segments.",
      "Branded mentions increase awareness and search demand.",
      "PR assets can be repurposed for sales, investor, and community channels.",
    ],
  },
  {
    slug: "seo",
    href: "/services/seo",
    title: "SEO",
    tag: "Set your foundations",
    count: "3 Services in this category",
    description: "Improve rankings with technical fixes, on-page optimization, and measurable growth plans.",
    highlights: ["Technical and content audits", "Keyword and internal-link mapping"],
    timeline: "Typical turnaround: 5-10 business days",
    whatItIs:
      "SEO is a structured process to improve your site’s discoverability in search engines through technical health, content relevance, and authority signals.",
    role:
      "Its role is to generate qualified organic traffic, reduce paid acquisition dependency, and compound growth over time.",
    applications: [
      "Websites with declining rankings or traffic volatility.",
      "Businesses expanding into new service pages or markets.",
      "Content-led growth strategies targeting high-intent search queries.",
      "Ecommerce and SaaS sites requiring scalable organic acquisition.",
    ],
    effectiveness: [
      "Improves ranking positions for commercial and informational keywords.",
      "Increases qualified traffic with stronger search intent matching.",
      "Creates durable growth through compounding organic visibility.",
      "Enhances site performance and UX, which supports conversion rates.",
    ],
  },
  {
    slug: "content-writing",
    href: "/services/content-writing",
    title: "Content Writing",
    tag: "On-demand content",
    count: "5 Services in this category",
    description: "Publish conversion-focused content mapped to search intent and user journey stages.",
    highlights: ["SEO briefs and outlines", "Long-form blogs and landing-page copy"],
    timeline: "Typical turnaround: 3-7 business days",
    whatItIs:
      "Content writing service creates SEO-ready and conversion-driven copy tailored to your audience, funnel stage, and brand voice.",
    role:
      "Its role is to educate, persuade, and convert users while supporting topical authority and organic performance.",
    applications: [
      "Landing pages designed for lead generation and signups.",
      "Blog content targeting awareness, comparison, and decision stages.",
      "Product and feature pages requiring clearer positioning.",
      "Email, social, and campaign assets that need message consistency.",
    ],
    effectiveness: [
      "Intent-aligned content improves engagement and conversion quality.",
      "Consistent publishing supports keyword breadth and topical depth.",
      "Clear messaging reduces friction in the buyer journey.",
      "Reusable content assets lower long-term campaign production costs.",
    ],
  },
] as const;

export type ServiceCategory = (typeof marketplaceCategories)[number];
export type ServiceSlug = ServiceCategory["slug"];
