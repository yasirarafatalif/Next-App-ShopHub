export function StatsSection() {
  const stats = [
    { label: 'Products', value: '5000+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Countries Served', value: '45' },
    { label: 'Years in Business', value: '10+' },
  ];

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
