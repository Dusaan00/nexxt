import Gallery from "../Components/Gallery";
import JsonLd from "../Components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Galerie staveb plotů | Realizace Ploty Grygov",
    description:
      "Galerie realizovaných plotů na klíč od Ploty Grygov. Ukázky pletivových, panelových a betonových plotů, bran, branek a dalších prací.",
    path: "/Galerie",
    keywords: [
      "galerie plotů",
      "realizace plotů Olomouc",
      "stavby plotů",
      "Ploty Grygov galerie",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb-galerie-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Galerie staveb", path: "/Galerie" },
        ])}
      />
      <Gallery />
    </>
  );
}
