import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, FaqSection, JourneyLinks, JsonLd, PageHero, RatingStrip, SectionHeading } from "@/components/ui";
import { roadTripFaqs } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/site";

/*
 * Kenyan road trippers: the competitor report found Kenyan tour firms selling Nairobi–Moshi road
 * trips while almost no Tanzanian lodge targets Nairobi. Targets "nairobi to moshi by road" via both
 * border crossings: Namanga (through Arusha) and Loitokitok / Oloitoktok (through Tarakea and Rombo).
 */
export const metadata: Metadata = {
  title: { absolute: "Nairobi to Moshi by Road via Namanga or Oloitoktok | Boloti" },
  description:
    "Driving from Nairobi to Moshi via Namanga and Arusha, or via Oloitoktok (Loitokitok) and the Tarakea border? Make Boloti Camp Resort in the Kilimanjaro foothills your first night in Tanzania. Free parking, tents and a villa for groups.",
  keywords: [
    "Nairobi to Moshi by road",
    "Nairobi to Moshi road trip",
    "Namanga border to Moshi",
    "Oloitoktok to Moshi",
    "Loitokitok Tarakea border",
    "Nairobi to Moshi via Loitokitok",
    "where to stay in Moshi from Nairobi",
    "Kenya to Kilimanjaro road trip",
  ],
  alternates: { canonical: "/nairobi-to-moshi-road-trip" },
};

type Stop = { place: string; note: string };

const routes: { id: string; name: string; via: string; intro: string; stops: Stop[] }[] = [
  {
    id: "namanga",
    name: "Via Namanga & Arusha",
    via: "The western route",
    intro: "The most travelled road: south through Kajiado to the Namanga border, then on through Arusha. You reach Boloti before Moshi town.",
    stops: [
      { place: "Nairobi", note: "Set off early. The road south runs through Kajiado towards the border." },
      { place: "Namanga", note: "Cross from Kenya into Tanzania at the Namanga border post." },
      { place: "Arusha", note: "Continue to Arusha, then east along the road towards Moshi and Kilimanjaro International Airport." },
      { place: "Boloti, Masama", note: "Turn north into the foothills before Moshi town. The fire is lit and dinner is waiting." },
    ],
  },
  {
    id: "oloitoktok",
    name: "Via Oloitoktok & Tarakea",
    via: "The eastern route",
    intro: "A quieter, scenic road with Kilimanjaro ahead of you much of the way: out along the Mombasa road, down to Oloitoktok (Loitokitok), across at Tarakea, and around the mountain's eastern slopes.",
    stops: [
      { place: "Nairobi", note: "Head south-east on the Mombasa road as far as Emali." },
      { place: "Oloitoktok", note: "Turn south from Emali to Oloitoktok (Loitokitok) and cross into Tanzania at the Tarakea border post." },
      { place: "Rombo & Moshi", note: "From Tarakea the road runs down the eastern slopes of Kilimanjaro, the side where the Rongai route begins, and through Rombo to Moshi." },
      { place: "Boloti, Masama", note: "Continue west from Moshi and climb into the foothills at Masama. The fire is lit and dinner is waiting." },
    ],
  },
];

function RouteTimeline({ stops }: { stops: Stop[] }) {
  return (
    <ol className="relative mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
      <span className="absolute bottom-3 left-3 top-3 w-px bg-sand-300 md:bottom-auto md:left-3 md:right-3 md:top-3 md:h-px md:w-auto" aria-hidden />
      {stops.map((r, i) => (
        <li key={r.place} className="relative pl-12 md:pl-0 md:pt-12" data-reveal style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
          <span
            className={`absolute left-0 top-0 h-6 w-6 rounded-full border-2 ${i === stops.length - 1 ? "border-terracotta-500 bg-terracotta-500" : "border-gold-500 bg-sand-50"}`}
            aria-hidden
          />
          <h4 className="font-serif text-3xl text-forest-900">{r.place}</h4>
          <p className="mt-2 leading-relaxed text-charcoal-700">{r.note}</p>
        </li>
      ))}
    </ol>
  );
}

export default function RoadTripPage() {
  return (
    <>
      <JsonLd data={faqSchema(roadTripFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Nairobi to Moshi Road Trip", path: "/nairobi-to-moshi-road-trip" }])} />
      <PageHero
        image={images.aerialFarmland}
        eyebrow="Driving from Nairobi"
        title="Your road trip's best first night in Tanzania"
        lede="Whether you cross at Namanga or Oloitoktok, end the day in the Kilimanjaro foothills: tents, a villa, the bonfire and a proper dinner after a long day on the road."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Nairobi to Moshi Road Trip" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28" aria-labelledby="route-heading">
        <SectionHeading eyebrow="Nairobi to Moshi by Road" title={<span id="route-heading">Two borders, one destination</span>}>
          <p>
            There are two ways to drive from Nairobi to Kilimanjaro: west of the mountain through Namanga and Arusha, or east
            of it through Oloitoktok and Tarakea. Boloti sits in Masama, between Moshi and Kilimanjaro International Airport,
            so it is an easy first night whichever border you choose.
          </p>
        </SectionHeading>

        <nav aria-label="Choose your route" className="mt-10 flex flex-wrap gap-3" data-reveal>
          {routes.map((r) => (
            <a key={r.id} href={`#${r.id}`} className="btn-ghost text-forest-900">{r.name}</a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {routes.map((r) => (
            <article key={r.id} id={r.id} className="scroll-mt-28 border-t border-sand-200 pt-10" aria-labelledby={`${r.id}-heading`}>
              <p className="eyebrow">{r.via}</p>
              <h3 id={`${r.id}-heading`} className="mt-3 text-4xl text-forest-900 sm:text-5xl">{r.name}</h3>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal-700">{r.intro}</p>
              <RouteTimeline stops={r.stops} />
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-charcoal-500">
          Allow most of a day for either route. Check border opening hours and current passport, visa and vehicle requirements
          before you travel.
        </p>
      </section>

      <section className="bg-forest-900 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
            <Image src={images.familyTentVerandah.src} alt={images.familyTentVerandah.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading light eyebrow="Made for Road Trippers" title="Park up, unpack, unwind">
              <p>
                Free parking for your vehicle. Two-bedroom Family Tents and a Family Villa with its own kitchen for families
                and groups of friends. King Double Rooms for couples. And after hours on the road, dinner in our open-air
                restaurant and a seat by the fire.
              </p>
              <p className="mt-5">
                Travelling on to the Serengeti or climbing Kilimanjaro? Boloti is the calm first chapter before the adventure.
              </p>
            </SectionHeading>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <Link href="/rooms/family-tents" className="btn-ghost text-sand-50">Family Tents</Link>
              <Link href="/rooms/family-villa" className="btn-ghost text-sand-50">Family Villa</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="border border-sand-200 bg-sand-100 p-8 sm:p-12" data-reveal>
          <p className="eyebrow">For Kenyan tour operators</p>
          <h2 className="mt-3 text-3xl text-forest-900 sm:text-4xl">Bringing guests across from Nairobi?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-charcoal-700">
            We welcome tour operators running Nairobi to Kilimanjaro road trips. Contact our reservations team to talk about
            group stays for your clients.
          </p>
          <a href={whatsappLink("Hello Boloti, I'm a tour operator in Kenya and would like to discuss group stays.")} className="btn-primary mt-8">
            Contact reservations
          </a>
        </div>
      </section>

      <FaqSection title="Before you drive" faqs={roadTripFaqs} />

      <section className="bg-sand-100 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div data-reveal>
            <h2 className="text-4xl text-forest-900 sm:text-5xl">Karibu Tanzania</h2>
            <div className="mt-6"><RatingStrip /></div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
            <Link href="/contact#reserve" className="btn-primary group">Reserve your first night <Arrow /></Link>
            <a href={whatsappLink("Hello Boloti, we're driving from Nairobi and would like to book.")} className="btn-ghost text-forest-900">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <JourneyLinks current="/nairobi-to-moshi-road-trip" heading="Other ways to stay" />
    </>
  );
}
