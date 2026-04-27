import PletivoGallery from "../Components/PletivoGallery";
import JsonLd from "../Components/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
} from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Ploty z pletiva na klíč | Montáž pletivového plotu Olomouc",
    description:
      "Stavba plotů z pletiva na klíč v Olomouci, Grygově a na Moravě. Vlastní pletivo, montáž sloupků, vzpěr, napínacích drátů, podhrabových desek, bran a branek.",
    path: "/PlotyPletivo",
    keywords: [
      "ploty z pletiva Olomouc",
      "pletivový plot na klíč",
      "montáž pletiva",
      "stavba plotu z pletiva",
      "Ploty Grygov",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd id="service-pletivo-schema" data={serviceJsonLd("pletivo")} />
      <JsonLd
        id="breadcrumb-pletivo-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Ploty z pletiva", path: "/PlotyPletivo" },
        ])}
      />
      <PletivoGallery />
    </>
  );
}
