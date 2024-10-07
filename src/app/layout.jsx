import "../app/styles/globals.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { ReactLenis } from "../app/utils/lenis";

import { Nunito, Josefin_Sans, Lato } from "next/font/google";

export const metadata = {
  title: "Ploty Grygov | Stavby oplocení | Ploty na klíč",
  description:
    "Provádíme stavby plotů na klíč, rekonstrujeme ploty, používáme vlastní kvalitní materiál. Ploty stavíme po celé Moravě",
  robots: "index, follow",
  openGraph: {
    title: "Ploty Grygov",
    description:
      "Provádíme stavby plotů na klíč, rekonstrujeme ploty, používáme vlastní kvalitní materiál. Ploty stavíme po celé Moravě.",
    images: [{ url: "/logobiig.webp" }],
    url: "https://ploty-grygov.cz/",
    type: "website",
    site_name: "ploty-grygov",
  },
  icons: {
    icon: "/logobasic.webp",
  },
  alternates: {
    canonical: "https://ploty-grygov.cz/",
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
      lang="cs-CZ"
      className={`${nunito.variable} ${josefinSans.variable} ${lato.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="cs-CZ" />
        <meta name="D.Kulíšek" content="Ploty Grygov" />
        <meta
          name="description"
          content="Provádíme stavby plotů na klíč, rekonstrujeme ploty, používáme vlastní kvalitní materiál. Ploty stavíme po celé Moravě"
        />

        <link rel="canonical" href="https://ploty-grygov.cz/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link rel="me" href="https://www.instagram.com/pletivo_grygov/" />
        <link rel="me" href="https://www.facebook.com/PletivoGrygov.cz" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ploty Grygov",
              description:
                "Provádíme stavby plotů na klíč, rekonstrujeme ploty, používáme vlastní kvalitní materiál. Ploty stavíme po celé Moravě. Ploty stavíme z pletiva, z 3D/2D panelů a můžeme k nim přidat i podhrabové desky.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Za Tratí 255",
                addressLocality: "Grygov",
                postalCode: "783 73",
                addressCountry: "CZ",
              },
              telephone: "+420608705547",
              url: "https://ploty-grygov.cz/",
              logo: {
                "@type": "ImageObject",
                url: "https://ploty-grygov.cz/logobiig.png",
              },
              paymentAccepted: [
                "Hotovost",
                "Kreditní karta",
                "Bankovní převod",
              ],
              openingHours: "Po-Pá 07:30-16:00",
              sameAs: [
                "https://www.facebook.com/PletivoGrygov.cz",
                "https://www.instagram.com/pletivo_grygov/",
              ],
              serviceType: [
                {
                  "@type": "Service",
                  name: "Montáže plotů",
                  description:
                    "Profesionální stavby plotů na klíč. Ploty z drátěného pletiva, ploty z 3D panelů",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Rekonstrukce plotů",
                  description:
                    "Kompletní rekonstrukce starých oplocení v Olomouci, v Olomouckém kraji, v Jihomorvském kraji, v Moravskoslezském kraji.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <ReactLenis root>
        <body>
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
