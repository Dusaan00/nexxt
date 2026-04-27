import PrivacyPolicy from "../Components/PrivacyPolicy";
import { buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata({
    title: "Zásady ochrany osobních údajů | Ploty Grygov",
    description:
      "Informace o zpracování osobních údajů při komunikaci s firmou Ploty Grygov.",
    path: "/PrivacyPolicy",
    noindex: true,
  }),
};

export default function Page() {
  return <PrivacyPolicy />;
}
