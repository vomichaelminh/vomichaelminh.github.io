import React from "react";
import "../../App.css";
import Cards from "../Cards";
import About from "../pages/About";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Experience from "../pages/Experience";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
