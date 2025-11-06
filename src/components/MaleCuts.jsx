export default function MaleCuts() {
  const styles = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
      title: "Classic Taper",
    },
    {
      src: "https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1200&auto=format&fit=crop",
      title: "Side Part",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      title: "Textured Crop",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      title: "Crew Cut",
    },
    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
      title: "Fade + Beard",
    },
    {
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
      title: "Messy Quiff",
    },
  ];

  return (
    <section id="male" className="bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-light">Men’s Lookbook</h2>
          <span className="text-xs tracking-widest uppercase text-white/50">Cuts • Beard • Finish</span>
        </div>

        <p className="mt-4 max-w-2xl text-white/70">
          Sharp silhouettes and clean fades drawing from timeless barbering with a modern edge.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((s, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={s.src}
                alt={s.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4 flex items-center justify-between text-sm">
                <span className="font-medium">{s.title}</span>
                <span className="text-white/60">Men</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
