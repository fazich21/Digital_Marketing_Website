const partners = ["GoodFirms", "Google Partner", "Clutch", "DESIGNRUSH"];

const PartnersSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our <span className="text-primary">Partners</span> Not A
                <br />
                <span className="text-primary">Vendors</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0 max-w-sm">
              Recognized by industry leaders — proudly partnered, not outsourced
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div
                key={p}
                className="rounded-lg border border-border bg-secondary px-6 py-5 text-center font-semibold text-foreground text-sm"
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

export default PartnersSection;
