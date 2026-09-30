import { site } from "./site";
import { rooms, experiences, type Faq, type Room } from "./content";
import { images } from "./images";

const abs = (path: string) => new URL(path, site.url).toString();
const RESORT_ID = `${site.url}/#resort`;

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
};

const amenity = (name: string) => ({ "@type": "LocationFeatureSpecification", name, value: true });

/** Sitewide Resort / LodgingBusiness entity, rendered once in the root layout. */
export function resortSchema() {
  const google = site.ratings.find((r) => r.source === "Google");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Resort", "LodgingBusiness"],
        "@id": RESORT_ID,
        name: site.name,
        alternateName: "Boloti Camp",
        slogan: "Where Mount Kilimanjaro Meets Serene Luxury",
        description:
          "Luxury eco-lodge and tented camp at the foothills of Mount Kilimanjaro in Masama near Sanya Juu, Tanzania, on the western side of the mountain near Machame Gate and around 20 minutes from Kilimanjaro International Airport (JRO). Family Villa, King Double Rooms, Family Tents and Single Tents, with an open-air restaurant, bar and nightly bonfire.",
        url: site.url,
        logo: abs("/images/boloti-logo.png"),
        image: [images.aerial, images.familyTentVerandah, images.kingWindow, images.diningChandelier, images.bonfire].map((i) => abs(i.src)),
        telephone: site.phone,
        email: site.email,
        address,
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.mapUrl,
        priceRange: site.priceRange,
        currenciesAccepted: "USD, TZS",
        // TODO: confirm with the front desk, then uncomment.
        // checkinTime: "14:00",
        // checkoutTime: "10:00",
        amenityFeature: [
          "Free WiFi",
          "Free parking",
          "Open-air restaurant",
          "Bar",
          "Airport transfer (taxi service)",
          "Equipment rental",
          "Nightly bonfire",
          "Gardens",
          "Bicycle tours",
          "Bird watching",
          "Family rooms",
          "Air conditioning (King Double Rooms)",
        ].map(amenity),
        containsPlace: rooms.map((r) => roomNode(r)),
        // Rating shown on the page; keep in sync with Google Business Profile.
        ...(google && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: google.score,
            bestRating: google.scale,
            reviewCount: google.count,
          },
        }),
        sameAs: [site.social.instagram, site.social.facebook],
        touristType: [
          "Kilimanjaro climbers",
          "Safari travellers",
          "Weekend travellers from Arusha and Dar es Salaam",
          "Road trippers from Nairobi and Kenya",
          "Families",
          "Honeymooners",
          "Business travellers",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": RESORT_ID },
      },
    ],
  };
}

function roomNode(r: Room) {
  return {
    "@type": r.schemaType,
    "@id": `${site.url}/rooms/${r.slug}#room`,
    name: r.name,
    description: r.summary,
    url: abs(`/rooms/${r.slug}`),
    image: abs(r.hero.src),
    bed: r.bed,
    ...(r.sleeps && {
      occupancy: { "@type": "QuantitativeValue", maxValue: r.sleeps },
    }),
    amenityFeature: r.highlights.map(amenity),
  };
}

export function roomSchema(r: Room) {
  return {
    "@context": "https://schema.org",
    ...roomNode(r),
    containedInPlace: { "@id": RESORT_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/dining#restaurant`,
    name: "Boloti Restaurant & Bar",
    description:
      "Open-air restaurant and bar at Boloti Camp Resort serving international and Tanzanian cuisine at the foothills of Mount Kilimanjaro.",
    url: abs("/dining"),
    image: [images.diningChandelier, images.chefFlambe, images.pavilion].map((i) => abs(i.src)),
    servesCuisine: ["Tanzanian", "International"],
    telephone: site.phone,
    address,
    containedInPlace: { "@id": RESORT_ID },
    acceptsReservations: true,
  };
}

export function experiencesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Experiences near Boloti Camp Resort, Kilimanjaro",
    itemListElement: experiences.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": e.schemaType, name: e.name, description: e.body },
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
