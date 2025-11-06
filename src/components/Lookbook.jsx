import { useState } from "react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", tag: "Female" },
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop", tag: "Male" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", tag: "Female" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", tag: "Male" },
  { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop", tag: "Female" },
  { src: "https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1200&auto=format&fit=crop", tag: "Male" },
];

export default function Lookbook() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? IMAGES : IMAGES.filter(i => i.tag === filter);

  return (
    <section id="lookbook" className="bg-white text-black">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-light">Lookbook</h2>
          <div className="flex items-center gap-2 text-sm">
            {['All','Male','Female'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full border ${filter===f ? 'bg-black text-white border-black' : 'border-black/20 hover:border-black'} transition`}
              >{f}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-xl border border-black/10">
              <img src={img.src} alt={`${img.tag} style`} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-4 text-sm text-black/60">{img.tag}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
