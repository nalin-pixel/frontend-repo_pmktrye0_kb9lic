import { useState } from "react";

const styles = [
  { id: 1, gender: "male", name: "Classic Fade", img: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, gender: "male", name: "Textured Quiff", img: "https://images.unsplash.com/photo-1512531737927-2b1f33f1f3e3?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, gender: "female", name: "Soft Bob", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop" },
  { id: 4, gender: "female", name: "Long Layers", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop" },
  { id: 5, gender: "male", name: "Crew Cut", img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1600&auto=format&fit=crop" },
  { id: 6, gender: "female", name: "Curtain Bangs", img: "https://images.unsplash.com/photo-1532479397733-6b1f2576642e?q=80&w=1600&auto=format&fit=crop" },
];

export default function StylesGallery() {
  const [filter, setFilter] = useState("all");
  const filtered = styles.filter((s) => (filter === "all" ? true : s.gender === filter));

  return (
    <section id="styles" className="bg-white text-black">
      <div className="container mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Choose your style</h2>
            <p className="text-black/60">Browse signature looks for men and women.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full border ${filter === "all" ? "bg-black text-white" : "border-black/20"}`}>All</button>
            <button onClick={() => setFilter("male")} className={`px-4 py-2 rounded-full border ${filter === "male" ? "bg-black text-white" : "border-black/20"}`}>Male</button>
            <button onClick={() => setFilter("female")} className={`px-4 py-2 rounded-full border ${filter === "female" ? "bg-black text-white" : "border-black/20"}`}>Female</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((style) => (
            <div key={style.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={style.img} alt={style.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{style.name}</h3>
                  <p className="text-sm text-black/60 capitalize">{style.gender}</p>
                </div>
                <button className="px-3 py-2 rounded-full bg-black text-white text-sm">Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
