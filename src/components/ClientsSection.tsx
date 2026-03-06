const clients = [
  "Crytocoin", "ION Mining", "DNMiner", "DigitMiner", "ARTEMIS", "Bitget",
  "Crytocoin", "ION Mining", "DNMiner", "DigitMiner", "ARTEMIS", "Bitget",
];

const ClientsSection = () => {
  return (
    <section className="py-20 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <span className="text-sm font-medium text-primary flex items-center gap-2 mb-2">
              ✦ OUR CLIENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Trusted by Leading <span className="text-primary">Web3</span>
              <br />Tools & <span className="text-primary">Platforms</span>
            </h2>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6" style={{ animationDuration: "25s" }}>
            {clients.map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-lg border border-border bg-secondary px-8 py-4 text-sm font-semibold text-foreground whitespace-nowrap"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
