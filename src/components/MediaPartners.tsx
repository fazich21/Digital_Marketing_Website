const partners = [
  "THE BLOCK",
  "Coinpaper",
  "Bitcoin.com",
  "Investing.com",
  "CryptoSlate",
  "BINANCE",
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
          <div className="inline-flex w-max will-change-transform animate-[marquee_8s_linear_infinite] sm:animate-[marquee_12s_linear_infinite] md:animate-[marquee_18s_linear_infinite] lg:animate-[marquee_26s_linear_infinite]">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
                {partners.map((p, i) => (
                  <div
                    key={`${group}-${p}-${i}`}
                    className="mr-8 flex-shrink-0 rounded-xl border border-border bg-secondary px-10 py-5 text-base font-semibold text-foreground whitespace-nowrap"
                  >
                    {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
