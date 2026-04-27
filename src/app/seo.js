export const siteUrl = "https://ploty-grygov.cz";

export const business = {
  name: "Ploty Grygov",
  legalName: "Ploty Grygov s.r.o.",
  url: siteUrl,
  email: "plotygrygov@gmail.com",
  phone: "+420 608 474 760",
  phoneCompact: "+420608474760",
  address: {
    streetAddress: "Za Tratí 255",
    addressLocality: "Grygov",
    addressRegion: "Olomoucký kraj",
    postalCode: "783 73",
    addressCountry: "CZ",
  },
  geo: {
    latitude: 49.5351327,
    longitude: 17.3038416,
  },
  sameAs: [
    "https://www.facebook.com/PletivoGrygov.cz",
    "https://www.instagram.com/pletivo_grygov/",
    "https://www.pletivogrygov.cz/",
  ],
};

export const serviceAreas = [
  "Grygov",
  "Olomouc",
  "Olomoucký kraj",
  "Přerov",
  "Prostějov",
  "Brno",
  "Ostrava",
  "Morava",
];

export const services = {
  pletivo: {
    name: "Stavba plotů z pletiva na klíč",
    path: "/PlotyPletivo",
    description:
      "Montáž pletivových plotů z vlastního materiálu v Olomouci, Grygově a na Moravě. Realizace pro rodinné domy, firmy, zahrady i sportoviště.",
  },
  panely: {
    name: "Stavba plotů z 3D/2D panelů",
    path: "/PlotyPanely",
    description:
      "Montáž moderních panelových plotů 3D/2D včetně sloupků, bran, branek a podhrabových desek pro soukromé i firemní pozemky.",
  },
  beton: {
    name: "Stavba betonových plotů",
    path: "/BetonovePloty",
    description:
      "Realizace betonových plotů pro soukromí, odolnost a dlouhou životnost. Stavby v okolí Olomouce, Přerova, Prostějova i po Moravě.",
  },
  rekonstrukce: {
    name: "Rekonstrukce oplocení",
    path: "/form",
    description:
      "Demontáž starého oplocení, příprava pozemku a stavba nového plotu včetně konzultace a cenové nabídky.",
  },
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/opengraph-image.png",
  noindex = false,
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: business.name,
      locale: "cs_CZ",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${business.name} - stavby plotů na klíč`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#local-business`,
    name: business.name,
    legalName: business.legalName,
    description:
      "Rodinná firma z Grygova u Olomouce zaměřená na stavby plotů na klíč, rekonstrukce oplocení, montáž pletivových, panelových a betonových plotů.",
    url: business.url,
    telephone: business.phoneCompact,
    email: business.email,
    image: absoluteUrl("/opengraph-image.png"),
    logo: absoluteUrl("/logobasic.webp"),
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "15:30",
      },
    ],
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: business.sameAs,
    priceRange: "Individuální nabídka podle rozsahu stavby",
    makesOffer: Object.values(services).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: serviceAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        provider: {
          "@id": `${siteUrl}/#local-business`,
        },
      },
    })),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: business.name,
    url: siteUrl,
    inLanguage: "cs-CZ",
    publisher: {
      "@id": `${siteUrl}/#local-business`,
    },
  };
}

export function serviceJsonLd(serviceKey) {
  const service = services[serviceKey];

  if (!service) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.name,
    url: absoluteUrl(service.path),
    provider: {
      "@id": `${siteUrl}/#local-business`,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "CZK",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CZK",
        description: "Cena se stanovuje individuálně podle zaměření a rozsahu stavby.",
      },
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/form"),
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
