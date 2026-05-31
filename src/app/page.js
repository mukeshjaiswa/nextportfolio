"use client"
import react, { useEffect } from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Hero from "./Component/Hero";
import Project from "./Component/Project";
import Skill from "./Component/Skill";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
   
      once: false,
    });
  }, []);
  return (
    <div>

      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>

  );
}
