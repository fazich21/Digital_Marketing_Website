const partners = [
  "THE BLOCK", "Coinpaper", "Bitcoin.com", "Investing.com", "CryptoSlate", "BINANCE",
  "THE BLOCK", "Coinpaper", "Bitcoin.com", "Investing.com", "CryptoSlate", "BINANCE",
];

const MediaPartners = () => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <span className="text-base font-medium text-primary flex items-center gap-2 mb-2">
              ✦ Our Media Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Our client's featured in
            </h2>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl border border-border bg-secondary px-10 py-5 text-base font-semibold text-foreground whitespace-nowrap"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
