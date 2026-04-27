import Form from "../Components/Form";
import JsonLd from "../Components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Poptávka stavby plotu | Kontakt Ploty Grygov",
    description:
      "Pošlete nezávaznou poptávku na stavbu plotu na klíč. Ploty Grygov realizují oplocení v Olomouci, Grygově, Přerově, Prostějově, Brně, Ostravě a po Moravě.",
    path: "/form",
    keywords: [
      "poptávka plotu",
      "kontakt Ploty Grygov",
      "stavba plotu Olomouc",
      "cenová nabídka oplocení",
    ],
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb-contact-schema"
        data={breadcrumbJsonLd([
          { name: "Domů", path: "/" },
          { name: "Poptávka a kontakt", path: "/form" },
        ])}
      />
      <Form />
    </>
  );
}
