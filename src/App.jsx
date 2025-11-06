import Hero from "./components/Hero";
import StylesGallery from "./components/StylesGallery";
import MapSection from "./components/MapSection";
import BookingAndPayments from "./components/BookingAndPayments";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <StylesGallery />
      <MapSection />
      <BookingAndPayments />
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Noir & Shear Studio. All rights reserved.</div>
          <div className="text-white/60 text-sm">Crafted for Advanced Software Engineering.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
