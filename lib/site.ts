/**
 * Single source of truth for Boloti's name, address and phone (NAP).
 * The competitor report found two different phone numbers online; keep this one
 * identical on Google Business Profile, TripAdvisor and every booking site.
 */
export const site = {
  name: "Boloti Camp Resort",
  shortName: "Boloti",
  url: "https://boloticampresort.com",
  tagline: "Luxury Eco-Lodge at the Foothills of Mt. Kilimanjaro",
  phone: "+255 754 710 563",
  phoneHref: "tel:+255754710563",
  // Confirm this number is on WhatsApp Business before launch.
  whatsapp: "255754710563",
  email: "reservations@boloticampresort.com",
  address: {
    // Both local names are in use: Masama Magharibi (ward) and Sanya Juu (nearest town,
    // and the name Lemosho/Shira climbers know from the road to Londorossi Gate).
    street: "Boloti, Masama Magharibi",
    locality: "Sanya Juu",
    region: "Kilimanjaro",
    country: "TZ",
    countryName: "Tanzania",
  },
  // Ward centroid from OpenStreetMap. Replace with the exact pin from Google Business Profile.
  geo: { lat: -3.238, lng: 37.1353 },
  mapUrl: "https://maps.google.com/?q=Boloti+Camp+Resort",
  mapEmbed: "https://maps.google.com/maps?q=boloti%20camp%20resort&t=m&z=12&output=embed&iwloc=near",
  social: {
    instagram: "https://www.instagram.com/boloticamp_resort/",
    instagramHandle: "@boloticamp_resort",
    facebook: "https://www.facebook.com/boloticampresort",
  },
  // Observed on public listings, 30 September 2026. Update as reviews grow.
  ratings: [
    { source: "Google", score: "4.9", scale: "5", count: 19 },
    { source: "TripAdvisor", score: "5.0", scale: "5" },
    { source: "Agoda", score: "9.8", scale: "10" },
  ],
  priceRange: "$$$",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/rooms", label: "Stay" },
  { href: "/dining", label: "Dining" },
  { href: "/experiences", label: "Experiences" },
  { href: "/kilimanjaro-climb-stay", label: "Climbers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
] as const;
