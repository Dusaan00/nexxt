"use client";
import MainTitle from "./Components/MainTitle";
import LandingPage from "./Components/LandingPage";
import Intro from "./Components/Intro";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Typy from "./Components/Typy";
import Instructions from "./Components/Instructions";

import React, { Component } from "react";
import Lenis from "lenis";

export default function Home() {
  /*
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  */

  return (
    <div>
      <MainTitle />
      <LandingPage />
      <Intro id="intro" />
      <Hero />
      <Features />
      <Typy />
      <Instructions />
    </div>
  );
}
