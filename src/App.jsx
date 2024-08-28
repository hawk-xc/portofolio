// App.jsx
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import AboutMeContent from "./components/AboutMeContent";
import MenuToggle from "./particles/MenuToggle";
import SideBar from "./components/SideBar";
import MySkills from "./components/MySkills";
import MySkillsContent from "./components/MySkillsContent";
import MyCertificate from "./components/MyCertificate";
import MyCertificateContent from "./components/MyCertificateContent";
import MyProject from "./components/MyProject";
import MyProjectContent from "./components/MyProjectContent";
import ContactMe from "./components/ContactMe";
import ContactMeContent from "./components/ContactMeContent";

export default function App() {
  const [sidebar, setSideBar] = useState(false);
  const homeRef = useRef(null);
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const certificateRef = useRef(null);
  const projectRef = useRef(null);
  const contactmeRef = useRef(null);

  const refLists = {
    homeRef: homeRef,
    aboutmeRef: aboutmeRef,
    skillsRef: skillsRef,
    certificateRef: certificateRef,
    projectRef: projectRef,
    contactmeRef: contactmeRef,
  };

  const reference = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
        left: 0,
      });
      setSideBar(false);
    } else {
      console.warn("scroll bug");
    }
  };

  const handleSideBarAction = () => {
    setSideBar(!sidebar);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden align-middle md:px-10 max-sm:px-0 primary-background lexend-deca-font">
      <Hero homeRef={homeRef}>
        <Navbar />
        <HeroContent />
      </Hero>
      <AboutMe aboutmeRef={aboutmeRef}>
        <AboutMeContent />
      </AboutMe>
      <MySkills skillsRef={skillsRef}>
        <MySkillsContent />
      </MySkills>
      <MyCertificate certificateRef={certificateRef}>
        <MyCertificateContent />
      </MyCertificate>
      <MyProject projectRef={projectRef}>
        <MyProjectContent />
      </MyProject>
      <ContactMe contactmeRef={contactmeRef}>
        <ContactMeContent />
      </ContactMe>
      <MenuToggle handleSideBarAction={handleSideBarAction} sidebar={sidebar} />
      <SideBar sidebar={sidebar} reference={reference} refLists={refLists} />
    </div>
  );
}
