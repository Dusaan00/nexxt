import BetonGallery from "../Components/BetonGallery";
import JsonLd from "../Components/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
} from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Betonové ploty na klíč | Stavba betonového plotu Olomouc",
    description:
      "Realizace betonových plotů na klíč v Olomouci, Grygově a na Moravě. Odolné oplocení pro soukromí, dlouhou životnost a minimální údržbu.",
    path: "/BetonovePloty",
    keywords: [
      "betonové ploty Olomouc",
      "betonový plot na klíč",
      "stavba betonového plotu",
      "oplocení Olomouc",
      "Ploty Grygov",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd id="service-beton-schema" data={serviceJsonLd("beton")} />
      <JsonLd
        id="breadcrumb-beton-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Betonové ploty", path: "/BetonovePloty" },
        ])}
      />
      <BetonGallery />
    </>
  );
}
