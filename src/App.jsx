import { useState } from "react";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import AboutMeContent from "./components/AboutMeContent";
import MenuToggle from "./particles/MenuToggle";
import SideBar from "./components/SideBar";
import MySkills from "./components/MySkills";

export default function App() {
  const [sidebar, setSideBar] = useState(false);

  const handleSideBarAction = () => {
    setSideBar(!sidebar);
  };

  return (
    <div className="md:px-10 max-sm:px-0 primary-background lexend-deca-font">
      <Hero>
        <Navbar />
        <HeroContent />
      </Hero>
      <AboutMe>
        <AboutMeContent />
      </AboutMe>
      <MenuToggle handleSideBarAction={handleSideBarAction} sidebar={sidebar} />
      <SideBar sidebar={sidebar} />
      {/* <MySkills>
        <span>MySkills</span>
      </MySkills> */}
    </div>
  );
}
