import Image from "next/image";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Hero from "./Component/Hero";
import Project from "./Component/Project";
import Skill from "./Component/Skill";

export default function Home() {
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
