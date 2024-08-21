import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import AboutMeContent from "./components/AboutMeContent";

export default function App() {
  return (
    <div className="px-10 primary-background lexend-deca-font">
      <Hero>
        <Navbar />
        <HeroContent />
      </Hero>
      <AboutMe>
        <AboutMeContent />
      </AboutMe>
    </div>
  );
}
