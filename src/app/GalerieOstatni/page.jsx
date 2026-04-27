import OthersGallery from "../Components/OthersGallery";
import JsonLd from "../Components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Ostatní práce a oplocení | Galerie Ploty Grygov",
    description:
      "Další ukázky prací Ploty Grygov: oplocení, kovové prvky, zakázkové práce a montáže související se stavbou plotů.",
    path: "/GalerieOstatni",
    keywords: [
      "oplocení Olomouc",
      "zakázkové práce oplocení",
      "stavební práce ploty",
      "Ploty Grygov",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb-ostatni-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Galerie staveb", path: "/Galerie" },
          { name: "Ostatní práce", path: "/GalerieOstatni" },
        ])}
      />
      <OthersGallery />
    </>
  );
}
