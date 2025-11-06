export default function ServiceMenu() {
  const services = [
    { name: "Signature Cut", desc: "Wash, precision cut, and finish.", price: 85 },
    { name: "Clipper Cut", desc: "Tight, clean, and efficient.", price: 55 },
    { name: "Restyle", desc: "Transformative cut with consultation.", price: 120 },
    { name: "Blowout", desc: "Polished finish after wash.", price: 45 },
  ];

  return (
    <section id="services" className="bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-light">Services</h2>
          <span className="text-xs tracking-widest uppercase text-white/50">Transparent pricing</span>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.name} className="border border-white/10 rounded-xl p-6 flex items-center justify-between hover:border-white/30 transition">
              <div>
                <div className="text-lg">{s.name}</div>
                <div className="text-sm text-white/60 mt-1">{s.desc}</div>
              </div>
              <div className="text-lg">${s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
