import { useState } from "react";
import { C } from "./styles/colors";
import { CSS } from "./styles/globalCss";
import { LaunchScreen } from "./components/launch/LaunchScreen";
import launchStyles from "./components/launch/LaunchScreen.module.css";

import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { GithubActivity } from "./components/sections/GithubActivity";
import { Stats } from "./components/sections/Stats";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ScrollToTop } from "./components/sections/ScrollToTop";

const SECTION_MAP = {
  About:        <><About/><Stats/></>,
  Skills:       <><Skills/><Services/><Stats/></>,
  Services:     <><Services/><Stats/></>,
  Projects:     <><Projects/><Stats/></>,
  Experience:   <><Experience/><Stats/></>,
  Education:    <><Education/><Stats/></>,
  GitHub:       <><GithubActivity/><Stats/></>,
  Contact:      <Contact/>,
};

export default function App() {
  const [active, setActive] = useState("Home");
  const [launchComplete, setLaunchComplete] = useState(false);
  const [showLaunch, setShowLaunch] = useState(true);

  return (
    <>
    <div
      id="portfolio-root"
      className={`${launchStyles.portfolioUnderlay} ${launchComplete ? launchStyles.portfolioVisible : launchStyles.portfolioHidden}`}
      style={{ height:"100vh", overflowY:"auto", background:C.bg, color:"#e2e8f0", fontFamily:"Inter,system-ui,sans-serif" }}
    >
      <style>{CSS}</style>
      <Navbar active={active} setActive={setActive}/>
      <main>
        {active === "Home" ? (
          <>
            <Hero/>
            <div id="about-section" style={{ marginTop:36 }}><About/></div>
            <Skills/>
            <Services/>
            <div id="projects-section"><Projects/></div>
            <Experience/>
            <Education/>
            <GithubActivity/>
            <Stats/>
            <Contact/>
          </>
        ) : (
          <div style={{ paddingTop:8 }}>
            {SECTION_MAP[active]}
            {active !== "Contact" && <Contact/>}
          </div>
        )}
      </main>
      <Footer setActive={setActive}/>
      <ScrollToTop/>
    </div>
    {!showLaunch ? null : (
      <LaunchScreen
        onReveal={() => setLaunchComplete(true)}
        onComplete={() => setShowLaunch(false)}
      />
    )}
    </>
  );
}
