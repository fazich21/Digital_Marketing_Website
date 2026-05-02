const partners = ["GoodFirms", "Google Partner", "Clutch", "DESIGNRUSH"];

const PartnersSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-16">
          <div className="mb-10 flex flex-col justify-between md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight">
                Our <span className="text-primary">Partners</span> Not A
                <br />
                <span className="text-primary">Vendors</span>
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground md:mt-0">
              Recognized by industry leaders - proudly partnered, not outsourced
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p}
                className="min-w-0 rounded-lg border border-border bg-secondary px-4 py-4 text-center text-sm font-semibold text-foreground whitespace-normal [overflow-wrap:anywhere] sm:px-6 sm:py-5"
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
