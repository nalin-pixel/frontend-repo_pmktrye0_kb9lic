import { ArrowRight } from "lucide-react";

export default function HeaderHero() {
  return (
    <header className="relative bg-black text-white">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-widest uppercase text-xs text-white/70">Noir & Shear Studio</div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#lookbook" className="hover:text-white transition">Lookbook</a>
          <a href="#visit" className="hover:text-white transition">Visit</a>
          <a href="#booking" className="hover:text-white transition">Book</a>
        </nav>
        <a href="#booking" className="inline-flex items-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          Book Now <ArrowRight size={16} />
        </a>
      </div>

      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Precision cuts. Monochrome elegance.
            <br />
            Crafted in the spirit of modern classicism.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            A restrained palette. Exacting technique. Haircutting as design. Experience meticulous service in a space defined by light and shadow.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#booking" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition">Reserve an appointment</a>
            <a href="#lookbook" className="border border-white/20 px-6 py-3 rounded-full text-sm hover:border-white transition">Explore the lookbook</a>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full bg-white/[0.06] blur-3xl absolute -top-40 -right-20" />
          <div className="w-[60vw] h-[60vw] rounded-full bg-white/[0.04] blur-3xl absolute -bottom-20 -left-10" />
        </div>
      </div>
    </header>
  );
}
