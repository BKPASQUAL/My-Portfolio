import React from "react";
import Navbar from "../common/Navbar";
import HeroSection from "../home/HeroSection";
import Skills from "../home/Skills";
import Projects from "../home/Projects";
import WorkExperience from "../home/WorkExperience";
import Education from "../home/Education";
import MyServices from "../home/MyServices";
import Certificates from "../home/Certificates";
import Footer from "../common/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <HeroSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="expertise">
        <MyServices />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
