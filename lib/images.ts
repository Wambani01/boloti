/**
 * Every photograph from the original site, renamed for search and given descriptive alt text.
 * Alt-tag template: "<what is pictured> <where / detail> at Boloti Camp Resort, <place keyword>".
 */
export type Img = { src: string; alt: string; w: number; h: number };

const img = (file: string, alt: string, w = 1920, h = 1281): Img => ({
  src: `/images/${file}.webp`,
  alt,
  w,
  h,
});

export const images = {
  // Grounds and arrival
  aerial: img("aerial-view-boloti-camp-resort-kilimanjaro-foothills", "Aerial view of Boloti Camp Resort's cottages and gardens in the Kilimanjaro foothills, Tanzania", 1920, 1080),
  aerialFarmland: img("aerial-boloti-camp-resort-farmland-siha", "Boloti Camp Resort from above, surrounded by the farmland of the Kilimanjaro foothills", 1920, 1080),
  aerialTents: img("aerial-tented-camp-gardens-kilimanjaro", "Aerial view of the safari tents and gardens at Boloti Camp Resort near Machame, Kilimanjaro", 1920, 1580),
  lawnTents: img("lawn-safari-tents-boloti-camp", "Sweeping lawn with luxury safari tents at Boloti Camp Resort, Mt. Kilimanjaro"),
  lawnCottages: img("garden-lawn-tents-and-cottages", "Tents and cottages across the garden lawn at Boloti Camp Resort, Kilimanjaro"),
  kiliView: img("mount-kilimanjaro-view-boloti-entrance", "Snow-capped Mount Kilimanjaro rising behind the Boloti Camp Resort entrance sign at dusk", 1637, 1920),
  entrance: img("boloti-camp-resort-entrance-dusk", "Lantern-lit entrance to Boloti Camp Resort at dusk, Masama, Kilimanjaro"),
  walkway: img("garden-walkway-to-safari-tents", "Garden walkway leading to the safari tents at Boloti Camp Resort"),
  gardenCottages: img("lush-garden-cottages-kilimanjaro", "Lush gardens and cottages at Boloti Camp Resort, a Kilimanjaro eco-lodge"),
  garden: img("tropical-garden-boloti-camp", "Tropical garden with native trees and birdlife at Boloti Camp Resort"),
  gardenChairs: img("garden-lounge-chairs", "Handcrafted wooden lounge chairs in the gardens of Boloti Camp Resort", 1281, 1920),
  driveway: img("driveway-and-gardens", "Driveway and free guest parking framed by acacia trees at Boloti Camp Resort"),

  // Family Villa
  villaExterior: img("family-villa-exterior", "Luxury Family Villa with private garden at Boloti Camp Resort, Mt. Kilimanjaro"),
  villaSitting: img("family-villa-sitting-room", "Sitting room and open kitchen in the two-bedroom Family Villa at Boloti Camp Resort"),
  villaLounge: img("family-villa-lounge", "Bright lounge with handcrafted sofas in the Family Villa at Boloti Camp Resort, Kilimanjaro"),
  villaTwin: img("family-villa-twin-bedroom", "Twin bedroom with fine linens in the Family Villa at Boloti Camp Resort"),
  villaTwin2: img("family-villa-twin-beds", "Second twin bedroom with garden windows in the Boloti Family Villa"),
  villaKitchen: img("family-villa-open-kitchen", "Fully equipped open kitchen in the Family Villa at Boloti Camp Resort"),
  villaKitchen2: img("family-villa-kitchen-window", "Family Villa kitchen with timber windows onto the garden, Boloti Camp Resort"),
  bathroom: img("ensuite-bathroom-rain-shower", "Ensuite bathroom with rain shower at Boloti Camp Resort, Kilimanjaro", 1281, 1920),

  // King Double Rooms
  kingPetals: img("king-double-room-rose-petals", "King Double Room dressed with rose petals for a honeymoon at Boloti Camp Resort", 1281, 1920),
  kingBed: img("king-double-room-bed", "Plush king-size bed in a King Double Room at Boloti Camp Resort, Mt. Kilimanjaro"),
  kingSuite: img("king-double-room-suite", "Spacious King Double Room with timber furnishings at Boloti Camp Resort"),
  kingInterior: img("king-double-room-interior", "King Double Room with terracotta walls and garden light at Boloti Camp Resort"),
  kingWindow: img("king-double-room-window-light", "Sunlit King Double Room with bay windows at Boloti Camp Resort, Kilimanjaro"),
  kingTea: img("king-room-tea-coffee-station", "In-room tea and coffee station in a King Double Room at Boloti Camp Resort", 1281, 1920),
  kingDesk: img("king-room-desk-and-lighting", "Writing desk and warm reading light in a Boloti King Double Room", 1281, 1920),

  // Family Tents
  familyTentVerandah: img("family-tent-verandah", "Luxury Family Tent with shaded verandah on the lawn at Boloti Camp Resort, Kilimanjaro"),
  familyTentGarden: img("family-tent-garden", "Two-bedroom glamping Family Tent set in the gardens of Boloti Camp Resort"),
  familyTentPorch: img("family-tent-private-porch", "Private porch with safari chairs outside a Family Tent at Boloti Camp Resort"),
  familyTentLawn: img("family-tent-lawn", "Family Tent among acacia and cypress trees at Boloti Camp Resort, Tanzania"),
  tentTrees: img("luxury-safari-tent-trees", "Luxury safari tent beneath tall trees at Boloti Camp Resort, Kilimanjaro tented camp"),

  // Single Tents
  singleTentLawn: img("single-tent-lawn", "Single Tent at golden hour on the lawn at Boloti Camp Resort, Kilimanjaro glamping"),
  singleTentCanvas: img("single-tent-canvas", "Canvas Single Tent glowing in evening light at Boloti Camp Resort", 1340, 1520),
  singleTentEvening: img("single-tent-evening", "Single safari tent with private deck at Boloti Camp Resort near Machame Gate"),
  singleTentPorch: img("single-tent-porch-chairs", "Folding safari chairs on a Single Tent porch at Boloti Camp Resort"),
  tentSky: img("safari-tent-blue-sky", "Safari tent under a clear blue Kilimanjaro sky at Boloti Camp Resort"),
  tentSunny: img("safari-tent-sunny-lawn", "Safari tent with verandah on a sunny lawn at Boloti Camp Resort, Tanzania"),
  tentGardens: img("safari-tent-gardens", "Tented suite framed by gardens at Boloti Camp Resort, Kilimanjaro"),

  // Dining and bar
  chef: img("boloti-head-chef", "Boloti Camp Resort's head chef in the restaurant, Kilimanjaro", 1281, 1920),
  chefFlambe: img("chef-flambe-kitchen", "Chef flambéing a dish in the kitchen at Boloti Restaurant, Kilimanjaro"),
  diningRoom: img("open-air-restaurant-dining-room", "Open-air restaurant dining room set for dinner at Boloti Camp Resort"),
  diningChandelier: img("restaurant-chandelier-dining", "Restaurant with handcrafted chandelier and timber tables at Boloti Camp Resort"),
  pavilion: img("restaurant-pavilion-dusk", "Restaurant pavilion glowing at dusk at Boloti Camp Resort, Mt. Kilimanjaro"),
  restaurantEntrance: img("restaurant-entrance-evening", "Evening entrance to Boloti Restaurant and bar, Kilimanjaro", 1281, 1920),
  tableSetting: img("table-setting-garden-view", "Dinner table set with garden views at Boloti Restaurant"),
  breakfast: img("breakfast-spread", "Breakfast spread with fresh juice and pastries at Boloti Camp Resort"),
  fruit: img("fresh-tropical-fruit", "Fresh pineapple and watermelon served at breakfast at Boloti Camp Resort", 1281, 1920),
  chapati: img("local-breakfast-chapati", "Tanzanian chapati and local breakfast at Boloti Restaurant", 1281, 1920),
  cocktail: img("signature-cocktail-served", "Signature tropical cocktail served at the Boloti Camp Resort bar", 1281, 1920),
  ginTonic: img("gin-and-tonic-lime-rosemary", "Gin and tonic with lime and rosemary at the Boloti bar, Kilimanjaro", 1281, 1920),
  bar: img("resort-bar-shelves", "Lantern-lit resort bar at Boloti Camp Resort, Kilimanjaro"),
  barLounge: img("bar-lounge-seating", "Bar lounge with African textile seating at Boloti Camp Resort"),
  restaurantGarden: img("restaurant-garden-view", "Restaurant terrace opening onto the gardens at Boloti Camp Resort"),

  // Bonfire
  bonfire: img("grand-bonfire-starlit-night", "Grand evening bonfire under a starlit sky at Boloti Camp Resort, Mt. Kilimanjaro"),
  bonfireCircle: img("bonfire-circle-evening", "Circle of chairs around the bonfire at night at Boloti Camp Resort"),
  bonfireDay: img("bonfire-pit-daytime", "Bonfire lounge with safari chairs in the gardens of Boloti Camp Resort"),
} satisfies Record<string, Img>;

export const galleryImages: { img: Img; tag: "Stay" | "Grounds" | "Dining" | "Evenings" }[] = [
  { img: images.aerial, tag: "Grounds" },
  { img: images.familyTentVerandah, tag: "Stay" },
  { img: images.diningChandelier, tag: "Dining" },
  { img: images.bonfire, tag: "Evenings" },
  { img: images.kingPetals, tag: "Stay" },
  { img: images.kiliView, tag: "Grounds" },
  { img: images.chefFlambe, tag: "Dining" },
  { img: images.villaLounge, tag: "Stay" },
  { img: images.lawnTents, tag: "Grounds" },
  { img: images.cocktail, tag: "Dining" },
  { img: images.singleTentLawn, tag: "Stay" },
  { img: images.pavilion, tag: "Evenings" },
  { img: images.garden, tag: "Grounds" },
  { img: images.villaTwin, tag: "Stay" },
  { img: images.breakfast, tag: "Dining" },
  { img: images.bonfireCircle, tag: "Evenings" },
  { img: images.aerialTents, tag: "Grounds" },
  { img: images.kingWindow, tag: "Stay" },
  { img: images.bar, tag: "Dining" },
  { img: images.entrance, tag: "Evenings" },
  { img: images.tentTrees, tag: "Stay" },
  { img: images.gardenChairs, tag: "Grounds" },
  { img: images.tableSetting, tag: "Dining" },
  { img: images.familyTentPorch, tag: "Stay" },
  { img: images.villaKitchen, tag: "Stay" },
  { img: images.ginTonic, tag: "Dining" },
  { img: images.walkway, tag: "Grounds" },
  { img: images.bathroom, tag: "Stay" },
  { img: images.chef, tag: "Dining" },
  { img: images.aerialFarmland, tag: "Grounds" },
  { img: images.singleTentPorch, tag: "Stay" },
  { img: images.restaurantEntrance, tag: "Evenings" },
];
