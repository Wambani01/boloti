import { images, type Img } from "./images";

/* ------------------------------------------------------------------ */
/* Accommodations                                                      */
/* ------------------------------------------------------------------ */

export type Room = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  count: string;
  summary: string;
  story: string[];
  highlights: string[];
  sleeps?: number;
  bed: string;
  schemaType: "Suite" | "HotelRoom" | "Accommodation";
  hero: Img;
  gallery: Img[];
  seoTitle: string;
  seoDescription: string;
};

export const rooms: Room[] = [
  {
    slug: "family-villa",
    name: "The Family Villa",
    eyebrow: "Your Slice of Paradise",
    tagline: "A private home in the foothills",
    count: "One villa · two bedrooms",
    summary:
      "A sprawling two-bedroom villa with its own sitting room and open kitchen: the ease of home, wrapped in the gentle wilderness of Tanzania.",
    story: [
      "The Family Villa was made for the ones you travel with. Two quiet bedrooms, each with twin beds dressed in fine linens, open onto a sitting room where mornings begin slowly and evenings stretch into long conversations.",
      "A fully equipped open kitchen means a midnight cup of tea or a child's early breakfast is always within reach, while our restaurant is only a garden stroll away when you would rather be served. Outside, the lawn becomes your private playground beneath the mountain.",
    ],
    highlights: [
      "Two bedrooms with twin beds",
      "Private sitting room",
      "Fully equipped open kitchen",
      "Ensuite bathroom with rain shower",
      "Garden setting, steps from the restaurant",
      "Complimentary WiFi",
    ],
    sleeps: 4,
    bed: "Two bedrooms, twin beds",
    schemaType: "Suite",
    hero: images.villaLounge,
    gallery: [images.villaExterior, images.villaSitting, images.villaTwin, images.villaKitchen, images.villaTwin2, images.bathroom],
    seoTitle: "Two-Bedroom Family Villa near Kilimanjaro",
    seoDescription:
      "A private two-bedroom Family Villa with sitting room and open kitchen at Boloti Camp Resort, in the Kilimanjaro foothills near Machame and JRO airport.",
  },
  {
    slug: "king-double-rooms",
    name: "King Double Rooms",
    eyebrow: "A Regal Repose",
    tagline: "Sleep like royalty",
    count: "Three rooms",
    summary:
      "Richly furnished rooms with a plush king-size bed, air conditioning and thoughtful touches, where dreams meet nature.",
    story: [
      "Warm terracotta walls, hand-finished timber and soft lantern light give each King Double Room the feeling of a private retreat. The king-size bed is layered in crisp linens, and tall windows let the garden in.",
      "Air conditioning, a mini-fridge and an in-room tea and coffee station keep everything you need close at hand. For honeymooners and anniversaries, we are delighted to dress the room for the occasion. Just let us know when you reserve.",
    ],
    highlights: [
      "Plush king-size bed with fine linens",
      "Air conditioning",
      "Mini-fridge",
      "Tea and coffee station",
      "Writing desk and reading lights",
      "Room dressing for honeymoons on request",
    ],
    sleeps: 2,
    bed: "King-size bed",
    schemaType: "HotelRoom",
    hero: images.kingWindow,
    gallery: [images.kingPetals, images.kingBed, images.kingSuite, images.kingInterior, images.kingTea, images.kingDesk],
    seoTitle: "King Double Rooms near Kilimanjaro Airport",
    seoDescription:
      "Air-conditioned King Double Rooms with plush king beds, mini-fridge and garden views at Boloti Camp Resort, a short drive from Kilimanjaro Airport (JRO).",
  },
  {
    slug: "family-tents",
    name: "Family Tents",
    eyebrow: "Glamping in Style",
    tagline: "Glamour meets the great outdoors",
    count: "Two tents · two bedrooms each",
    summary:
      "Luxurious canvas suites with two well-appointed bedrooms either side of a generous living area. Elegance and earthiness in perfect balance.",
    story: [
      "Our Family Tents bring the romance of the classic safari camp to the foot of Kilimanjaro. Beneath high canvas ceilings, two bedrooms sit either side of a shared living area, giving parents and children their own space and a place to gather.",
      "Step onto the shaded verandah with your morning coffee and watch the garden wake up. Sunbirds and weavers are your nearest neighbours, and at night the canvas hushes the world to a whisper.",
    ],
    highlights: [
      "Two bedrooms with a central living area",
      "Private shaded verandah",
      "Set on open lawns among mature trees",
      "Steps from the bonfire and restaurant",
      "Complimentary WiFi",
    ],
    bed: "Two bedrooms",
    schemaType: "Accommodation",
    hero: images.familyTentVerandah,
    gallery: [images.familyTentGarden, images.familyTentPorch, images.familyTentLawn, images.tentTrees, images.walkway, images.lawnTents],
    seoTitle: "Family Tents: Luxury Glamping at Kilimanjaro",
    seoDescription:
      "Two-bedroom luxury Family Tents with private verandahs: family glamping at Boloti Camp Resort, a tented camp in the Kilimanjaro foothills near Machame Gate.",
  },
  {
    slug: "single-tents",
    name: "Single Tents",
    eyebrow: "A Solitary Haven of Luxury",
    tagline: "An intimate wilderness encounter",
    count: "Two tents",
    summary:
      "A private canvas retreat for the solo traveller or the couple: quiet, beautifully made and close to nature.",
    story: [
      "The Single Tents are our most intimate spaces: a private canvas hideaway on the lawn, with a porch for two and nothing but birdsong for company. They are a favourite of trekkers resting before and after Kilimanjaro, and of travellers who want to feel the land around them without giving up a comfortable bed.",
      "Evenings are spent by the bonfire or in the restaurant; nights beneath canvas, with the mountain air drifting cool and clean through the gardens.",
    ],
    highlights: [
      "Private canvas tent with porch",
      "Quiet lawn setting",
      "Ideal before or after a Kilimanjaro climb",
      "Equipment rental on site",
      "Complimentary WiFi",
    ],
    bed: "Private tent",
    schemaType: "Accommodation",
    hero: images.singleTentLawn,
    gallery: [images.singleTentCanvas, images.singleTentEvening, images.singleTentPorch, images.tentSky, images.tentSunny, images.tentGardens],
    seoTitle: "Single Tents: Tented Camp near Machame Gate",
    seoDescription:
      "Private luxury Single Tents at Boloti Camp Resort: an intimate Kilimanjaro tented camp near Machame Gate, ideal the night before or after your climb.",
  },
];

export function getRoom(slug: string) {
  return rooms.find((r) => r.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Experiences                                                         */
/* ------------------------------------------------------------------ */

export type Experience = {
  name: string;
  eyebrow: string;
  body: string;
  schemaType: "TouristAttraction" | "Park" | "TouristTrip";
};

export const experiences: Experience[] = [
  {
    name: "Kilimanjaro National Park",
    eyebrow: "Embrace the Majestic",
    body: "Journey into the realm of Africa's tallest peak, where rainforest gives way to alpine meadow and every turn of the trail reveals a new horizon. Whether you are summiting or simply walking its lower slopes for a day, Kilimanjaro does not just elevate the body. It lifts the spirit.",
    schemaType: "Park",
  },
  {
    name: "Kikuletwa Hot Springs",
    eyebrow: "A Geothermal Oasis",
    body: "Known locally as Maji Moto, these clear, warm pools lie hidden among whispering palms in the rustic Tanzanian landscape. Float, exhale and gaze up at an open sky: it is the perfect reward after the mountain.",
    schemaType: "TouristAttraction",
  },
  {
    name: "Rare Bird Viewing",
    eyebrow: "Avian Wonders",
    body: "The lush foliage of the Boloti region is home to a colourful tapestry of rare birdlife. With binoculars in hand, and often without leaving our gardens, each chirp and flutter becomes a note in nature's own symphony.",
    schemaType: "TouristAttraction",
  },
  {
    name: "Kibong'oto Waterfalls",
    eyebrow: "The Whispering Cascade",
    body: "A hidden gem where water tumbles with a gentle roar into serene pools, cloaked in native forest. The falls offer a quiet place to breathe, and a spectacle for the eyes.",
    schemaType: "TouristAttraction",
  },
  {
    name: "Boloti River & Siha Cycling",
    eyebrow: "Cycling Along Serenity's Stream",
    body: "Pedal beside the gentle flow of the Boloti River and on through the villages and farmland of Siha district. Every turn of the wheel brings a new vista and a warm greeting, and a truer sense of the rhythm of Tanzanian country life.",
    schemaType: "TouristTrip",
  },
];

/* ------------------------------------------------------------------ */
/* Amenities (verified from the original site)                          */
/* ------------------------------------------------------------------ */

export const amenities = [
  { title: "Dine under the stars", body: "Our open-air restaurant and bar serves local and international cuisine to the melody of nature." },
  { title: "Stay connected", body: "Complimentary WiFi keeps you in touch with the world while you immerse yourself in the wild." },
  { title: "Gear up for adventure", body: "Our equipment rental store is stocked to prepare you for the mountain and beyond." },
  { title: "Effortless arrivals", body: "Free parking and a comfortable taxi service make every transfer to and from Kilimanjaro International Airport seamless." },
] as const;

/* ------------------------------------------------------------------ */
/* Climbers: FAQ (answers use only facts published by Boloti)          */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const climberFaqs: Faq[] = [
  {
    q: "How far is Boloti Camp Resort from Kilimanjaro International Airport (JRO)?",
    a: "Boloti sits in the foothills at Masama, on the airport side of Moshi: around a 20-minute drive from Kilimanjaro International Airport. We can arrange a comfortable taxi transfer for your arrival and departure.",
  },
  {
    q: "Is Boloti a good place to stay before climbing Kilimanjaro via the Machame route?",
    a: "Yes. We are in the Masama area close to Machame Gate and Kilimanjaro National Park, so you can rest in the quiet of the foothills, meet your guide, and set off without a long early-morning drive through town.",
  },
  {
    q: "Is Boloti a good place to stay before the Lemosho or Shira route?",
    a: "Yes. The Lemosho and Shira routes start at Londorossi Gate on the western side of Kilimanjaro, reached through Sanya Juu, the same side of the mountain as Boloti. Stay with us the night before, then meet your operator for the drive to the gate.",
  },
  {
    q: "What about the Marangu or Rongai routes?",
    a: "They start on the eastern and north-eastern side of the mountain, a longer drive from us. Boloti is still a comfortable first night near Kilimanjaro International Airport before your operator collects you.",
  },
  {
    q: "Can I rent climbing equipment at Boloti?",
    a: "Yes. Our on-site equipment rental store is stocked to prepare you for the climb. Tell us what you need when you reserve so we can have it ready.",
  },
  {
    q: "What is there to do after the climb?",
    a: "Recover by the bonfire, enjoy a proper meal in our open-air restaurant, then soak your legs in the warm waters of Kikuletwa Hot Springs, cycle along the Boloti River, or simply sleep.",
  },
  {
    q: "Is there WiFi and parking?",
    a: "Complimentary WiFi is available throughout your stay, and parking is free for guests.",
  },
];

/* ------------------------------------------------------------------ */
/* Journeys: one landing page per high-intent audience                 */
/* ------------------------------------------------------------------ */

export const journeys = [
  {
    href: "/kilimanjaro-climb-stay",
    eyebrow: "For Kilimanjaro climbers",
    title: "The night before, the night after",
    body: "Rest on the western side of the mountain for Machame, Lemosho or Shira, and come back to the fire to celebrate the summit.",
    image: images.singleTentLawn,
  },
  {
    href: "/kilimanjaro-weekend-getaway",
    eyebrow: "From Arusha & Dar es Salaam",
    title: "A weekend under the mountain",
    body: "Garden dinners, the bonfire and slow mornings, just an easy drive or a short flight away.",
    image: images.pavilion,
  },
  {
    href: "/nairobi-to-moshi-road-trip",
    eyebrow: "Driving from Nairobi",
    title: "Your road trip's best first night",
    body: "Via Namanga or Oloitoktok, end the day in the foothills: tents, a villa and space for the whole group.",
    image: images.driveway,
  },
] as const;

/* Answers use only facts published by Boloti, or general travel guidance
   that tells guests to check current requirements. */

export const weekendFaqs: Faq[] = [
  {
    q: "How far is Boloti from Arusha and Moshi?",
    a: "Boloti sits in Masama in the Kilimanjaro foothills, between Arusha and Moshi on the airport side. From Arusha it is around an hour's drive, and Moshi town is closer still.",
  },
  {
    q: "Can we fly in from Dar es Salaam for the weekend?",
    a: "Yes. Fly into Kilimanjaro International Airport (JRO) and you are around 20 minutes from Boloti. We can arrange a taxi transfer to meet your flight.",
  },
  {
    q: "What is there to do for a weekend at Boloti?",
    a: "Unwind in the gardens, cycle along the Boloti River, watch for rare birds, spend an afternoon at Kikuletwa Hot Springs, then gather at the grand bonfire after dinner in our open-air restaurant.",
  },
  {
    q: "Do you have rates for Tanzanian residents?",
    a: "Please ask. Tell us your dates and that you are a Tanzanian resident when you reserve, and our team will reply with the best rate available for your weekend.",
  },
  {
    q: "Is Boloti suitable for families and groups of friends?",
    a: "Yes. The two-bedroom Family Villa has its own kitchen and sitting room, and our Family Tents each have two bedrooms around a shared living area.",
  },
];

export const roadTripFaqs: Faq[] = [
  {
    q: "Which border should we use to drive from Nairobi to Boloti?",
    a: "There are two routes. The western route crosses at Namanga and runs through Arusha, reaching Boloti before Moshi town. The eastern route follows the Mombasa road to Emali, crosses at Oloitoktok (Loitokitok) and Tarakea, then runs through Rombo to Moshi, from where we are a short drive west. We are an easy first night from both.",
  },
  {
    q: "How long is the drive from Nairobi?",
    a: "Allow most of a day on either route. The Namanga route is commonly quoted at around six to seven hours, depending on traffic and time at the border. Check border opening hours before you set off, especially at the quieter Oloitoktok–Tarakea crossing.",
  },
  {
    q: "Where is Boloti in relation to Moshi?",
    a: "We are in Masama, in the foothills between Moshi and Kilimanjaro International Airport. Coming via Namanga and Arusha you reach us before Moshi; coming via Oloitoktok and Tarakea you pass through Moshi and continue west to us.",
  },
  {
    q: "Is there parking for our vehicle?",
    a: "Yes. Parking is free for guests.",
  },
  {
    q: "What do we need to cross the border at Namanga or Oloitoktok?",
    a: "Requirements differ for East African citizens and other nationalities, and for private or hired vehicles. Check the current passport, visa, vehicle and insurance requirements with the relevant authorities or your tour operator before you travel.",
  },
  {
    q: "Can you host a group or a tour operator's clients?",
    a: "Yes. Between the Family Villa, King Double Rooms and our tents we can host families and small groups. Tour operators are welcome to contact our reservations team about group stays.",
  },
];
