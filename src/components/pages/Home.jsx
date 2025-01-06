import React from "react";
import Navbar from "../common/Navbar";
import HeroSection from "../home/HeroSection";
import Skills from "../home/Skills";
import Projects from "../home/Projects";
import WorkExperience from "../home/WorkExperience";
import Education from "../home/Education";
import MyServices from "../home/MyServices";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <MyServices/>
      <Projects />
      <WorkExperience />
      <Education />
    </div>
  );
}

export default Home;