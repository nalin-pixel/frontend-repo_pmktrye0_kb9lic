export default function FemaleCuts() {
  const styles = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      title: "Textured Bob",
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      title: "Soft Layers",
    },
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      title: "Sleek Long",
    },
    {
      src: "https://images.unsplash.com/photo-1553593646-ce29401635f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbGVlayUyMExvbmd8ZW58MHwwfHx8MTc2MjQwNTg0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Lob with Fringe",
    },
    {
      src: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop",
      title: "Curly Shape",
    },
    {
      src: "https://images.unsplash.com/photo-1657320815727-2512f49f61d5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDdXJseSUyMFNoYXBlfGVufDB8MHx8fDE3NjI0MDU4NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Blunt Cut",
    },
  ];

  return (
    <section id="female" className="bg-white text-black">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-light">Women’s Lookbook</h2>
          <span className="text-xs tracking-widest uppercase text-black/60">Cuts • Color • Finish</span>
        </div>

        <p className="mt-4 max-w-2xl text-black/70">
          A refined gallery inspired by classic editorials. Explore signature shapes, precise lines, and soft movement.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((s, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border border-black/10 bg-white">
              <img
                src={s.src}
                alt={s.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4 flex items-center justify-between text-sm">
                <span className="font-medium">{s.title}</span>
                <span className="text-black/50">Women</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
