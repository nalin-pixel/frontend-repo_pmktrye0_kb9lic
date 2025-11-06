import HeaderHero from "./components/HeaderHero";
import ServiceMenu from "./components/ServiceMenu";
import FemaleCuts from "./components/FemaleCuts";
import MaleCuts from "./components/MaleCuts";
import VisitUs from "./components/VisitUs";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <HeaderHero />
      <ServiceMenu />
      <FemaleCuts />
      <MaleCuts />
      <VisitUs />
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Noir & Shear Studio</div>
          <div className="text-white/60 text-sm">Project for Advanced Software Engineering</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
