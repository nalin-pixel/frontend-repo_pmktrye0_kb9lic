import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#ffffff33,transparent_40%),radial-gradient(circle_at_80%_0%,#ffffff22,transparent_40%),radial-gradient(circle_at_50%_100%,#ffffff11,transparent_40%)]" />
      </div>
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-wider text-xl">Noir & Shear Studio</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#styles" className="opacity-80 hover:opacity-100">Styles</a>
          <a href="#locations" className="opacity-80 hover:opacity-100">Locations</a>
          <a href="#book" className="opacity-80 hover:opacity-100">Book</a>
        </div>
      </nav>
      <section className="container mx-auto px-6 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Timeless cuts. Modern craft.
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              A black & white sanctuary for precision haircuts and effortless style. Choose your look, pick a time, and we’ll handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#book" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-white/90 transition">
                Book an appointment <ArrowRight size={18} />
              </a>
              <a href="#styles" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                Explore styles
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md md:max-w-lg mx-auto rounded-3xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
                alt="Modern haircut"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
