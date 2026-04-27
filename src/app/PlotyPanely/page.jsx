import DdGallery from "../Components/3dGallery";
import JsonLd from "../Components/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
} from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Ploty z 3D/2D panelů | Panelové ploty na klíč Olomouc",
    description:
      "Montáž panelových plotů 3D/2D na klíč v Olomouci, Grygově a na Moravě. Pevné, moderní oplocení pro domy, zahrady, firmy a průmyslové objekty.",
    path: "/PlotyPanely",
    keywords: [
      "panelové ploty Olomouc",
      "ploty z 3D panelů",
      "ploty z 2D panelů",
      "montáž panelového plotu",
      "Ploty Grygov",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd id="service-panely-schema" data={serviceJsonLd("panely")} />
      <JsonLd
        id="breadcrumb-panely-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Ploty z 3D/2D panelů", path: "/PlotyPanely" },
        ])}
      />
      <DdGallery />
    </>
  );
}
