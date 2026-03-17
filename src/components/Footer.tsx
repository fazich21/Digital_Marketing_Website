import Link from "next/link";
import { Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "PR", href: "/services/pr" },
  { label: "SEO", href: "/services/seo" },
  { label: "Link Building", href: "/services/link-building" },
  { label: "Content Writing", href: "/services/content-writing" },
];

const industries = [
  "Web3 Marketing",
  "AI Crypto Marketing",
  "Crypto Exchange Marketing",
  "Metaverse Marketing",
  "GameFi Marketing",
  "NFT Marketing",
  "DeFi Marketing",
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold font-display">
              <span className="text-primary">R</span>ankovate
            </span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Built for founders.
              <br />
              Powered by Web3.
              <br />
              Proven by results — not promises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Quick Link</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-display mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold font-display mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {ind}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-display mb-3">Contact Info</h4>
            <div className="space-y-2">
              <a
                href="https://t.me/+971505184462"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rankovate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
