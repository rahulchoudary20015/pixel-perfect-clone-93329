const stats = [
  { value: "250K+", label: "Happy Students" },
  { value: "4.9★", label: "Average Rating" },
  { value: "₹10Cr+", label: "Revenue Generated" },
  { value: "99%", label: "Success Rate" },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">📊 Our Impact</p>
        <h2 className="text-3xl md:text-4xl font-black mb-3">Proven Results Across India</h2>
        <p className="text-muted-foreground mb-10">Our students' success speaks for itself</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-6">
              <p className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
