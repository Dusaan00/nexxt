import GalerieBrany from "../Components/GalerieBrany";
import JsonLd from "../Components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Brány a branky k plotům | Galerie realizací Ploty Grygov",
    description:
      "Ukázky bran a branek k oplocení od Ploty Grygov. Dodávka a montáž bran, branek a oplocení pro domy, zahrady i firemní areály.",
    path: "/GalerieBrany",
    keywords: [
      "brány k plotu Olomouc",
      "branky k oplocení",
      "montáž brány",
      "Ploty Grygov",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb-brany-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Galerie staveb", path: "/Galerie" },
          { name: "Brány a branky", path: "/GalerieBrany" },
        ])}
      />
      <GalerieBrany />
    </>
  );
}
