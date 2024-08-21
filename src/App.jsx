import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import LandingContent from "./components/LandingContent";

export default function App() {
  return (
    <div className="px-10 primary-background lexend-deca-font">
      <Hero>
        <Navbar />
      </Hero>
    </div>
  );
}
