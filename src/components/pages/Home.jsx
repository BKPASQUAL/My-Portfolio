import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from '../home/HeroSection'
import { Button } from "@material-tailwind/react";
import Skills from '../home/Skills';
import Projects from '../home/Projects';

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>   
        <Skills/>     
        <Projects/>     
    </div>
  )
}

export default Home
