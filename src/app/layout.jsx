import "../app/styles/globals.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JsonLd from "./Components/JsonLd";
import {
  buildMetadata,
  localBusinessJsonLd,
  siteUrl,
  webSiteJsonLd,
} from "./seo";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { ReactLenis } from "../app/utils/lenis";

import { Nunito, Josefin_Sans, Lato } from "next/font/google";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Ploty Grygov | Ploty na klíč Olomouc a Morava",
    description:
      "Stavby plotů na klíč z Grygova u Olomouce. Montáž pletivových, panelových a betonových plotů, rekonstrukce oplocení a brány pro Olomouc, Přerov, Prostějov, Brno, Ostravu a Moravu.",
    path: "/",
    keywords: [
      "Ploty Grygov",
      "Ploty Olomouc",
      "ploty na klíč Olomouc",
      "stavba plotu Olomouc",
      "montáž oplocení Morava",
      "pletivové ploty",
      "panelové ploty",
      "betonové ploty",
    ],
  }),
  title: {
    default: "Ploty Grygov | Ploty na klíč Olomouc a Morava",
    template: "%s | Ploty Grygov",
  },
  applicationName: "Ploty Grygov",
  authors: [{ name: "Ploty Grygov" }],
  creator: "Ploty Grygov",
  publisher: "Ploty Grygov",
  icons: {
    icon: "/favicon.ico",
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-josefin-sans",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={`${nunito.variable} ${josefinSans.variable} ${lato.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <ReactLenis root>
        <body>
          <JsonLd id="local-business-schema" data={localBusinessJsonLd()} />
          <JsonLd id="website-schema" data={webSiteJsonLd()} />
          <GoogleTagManager gtmId="GTM-NNL3R8BB" />
          <GoogleAnalytics gaId="G-DL2ZB1J7Z6" />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
