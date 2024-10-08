import MainTitle from "./Components/MainTitle";
import LandingPage from "./Components/LandingPage";
import Intro from "./Components/Intro";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Typy from "./Components/Typy";
import Instructions from "./Components/Instructions";

export default function Home() {
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
