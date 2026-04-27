import Achtung from "./Components/Achtung";
import MainTitle from "./Components/MainTitle";
import LandingPage from "./Components/LandingPage";
import Intro from "./Components/Intro";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Typy from "./Components/Typy";
import Instructions from "./Components/Instructions";
import JsonLd from "./Components/JsonLd";
import { buildMetadata, faqJsonLd } from "./seo";

export const metadata = buildMetadata({
  title: "Ploty Grygov | Stavba plotů na klíč Olomouc, Grygov a Morava",
  description:
    "Ploty Grygov staví ploty na klíč z pletiva, 3D/2D panelů a betonu. Realizujeme oplocení v Olomouci, Grygově, Přerově, Prostějově, Brně, Ostravě a po Moravě.",
  path: "/",
  keywords: [
    "Ploty Grygov",
    "Ploty Olomouc",
    "ploty na klíč",
    "stavba plotu Olomouc",
    "montáž plotu Olomouc",
    "oplocení Grygov",
    "oplocení Morava",
  ],
});

const homepageFaq = [
  {
    question: "Kde Ploty Grygov staví ploty na klíč?",
    answer:
      "Nejčastěji realizujeme ploty v Grygově, Olomouci a okolí Olomouce. Po domluvě pracujeme také v okolí Přerova, Prostějova, Brna, Ostravy a napříč Moravou.",
  },
  {
    question: "Jaké typy plotů realizujete?",
    answer:
      "Stavíme ploty z pletiva, ploty z 3D/2D panelů, betonové ploty, oplocení s podhrabovými deskami a k oplocení dodáváme také brány a branky.",
  },
  {
    question: "Dodáváte i materiál pro stavbu plotu?",
    answer:
      "Ano. Vyrábíme a dodáváme pletivo, panely, sloupky, podhrabové desky, brány, branky a montážní příslušenství pro soukromé zákazníky i firmy.",
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd id="homepage-faq-schema" data={faqJsonLd(homepageFaq)} />
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
