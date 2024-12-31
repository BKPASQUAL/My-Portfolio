import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from '../home/HeroSection'
import { Button } from "@material-tailwind/react";

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection/>        
    </div>
  )
}

export default Home
