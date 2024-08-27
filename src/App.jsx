import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import AboutMeContent from "./components/AboutMeContent";
import MySkills from "./components/MySkills";

export default function App() {
  return (
    <div className="md:px-10 max-sm:px-0 primary-background lexend-deca-font">
      <Hero>
        <Navbar />
        <HeroContent />
      </Hero>
      <AboutMe>
        <AboutMeContent />
      </AboutMe>
      {/* <MySkills>
        <span>MySkills</span>
      </MySkills> */}
    </div>
  );
}
