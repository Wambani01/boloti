import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, FaqSection, JsonLd, JourneyLinks, PageHero, RatingStrip, SectionHeading } from "@/components/ui";
import { climberFaqs } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/site";

/*
 * Landing page for the searches the competitor report found nobody is bidding on:
 * "where to stay before climbing kilimanjaro", "hotel near machame gate",
 * "kilimanjaro tented camp", "glamping kilimanjaro".
 */
export const metadata: Metadata = {
  title: { absolute: "Where to Stay Before Climbing Kilimanjaro | Boloti Camp Resort" },
  description:
    "Rest before and after your Kilimanjaro climb at Boloti Camp Resort: a quiet tented camp on the western side of the mountain, well placed for the Machame, Lemosho and Shira routes, around 20 minutes from JRO.",
  keywords: [
    "where to stay before climbing Kilimanjaro",
    "hotel near Machame Gate",
    "where to stay before Lemosho route",
    "hotel near Londorossi Gate",
    "Shira route accommodation",
    "Sanya Juu lodge",
    "Kilimanjaro tented camp",
  ],
  alternates: { canonical: "/kilimanjaro-climb-stay" },
};

/* Western routes are Boloti's natural fit; eastern routes are stated honestly. */
const climbRoutes = [
  {
    name: "Machame",
    gate: "Machame Gate",
    fit: "Close by",
    body: "Machame Gate is in the foothills near us, so you can reach the start of the Whiskey route without a long early drive through Moshi.",
  },
  {
    name: "Lemosho & Shira",
    gate: "Londorossi Gate",
    fit: "On our side of the mountain",
    body: "The western routes begin at Londorossi Gate, reached through Sanya Juu on the western side of Kilimanjaro, the side we are on. Boloti is a calm last night before the longer drive to the trailhead.",
  },
  {
    name: "Marangu & Rongai",
    gate: "Eastern gates",
    fit: "Arrival night near the airport",
    body: "These routes start on the eastern and north-eastern slopes, a longer drive from us. Boloti still works well as a first night close to the airport, with your operator collecting you in the morning.",
  },
];

const steps = [
  { t: "Arrive", d: "Land at Kilimanjaro International Airport and be met by our taxi transfer. Around 20 minutes later, you are in the quiet of the foothills." },
  { t: "Prepare", d: "Meet your guide, check your kit and borrow what's missing from our equipment rental store. A proper dinner, then an early night." },
  { t: "Climb", d: "Set off rested from the western side of the mountain, towards Machame Gate or Londorossi Gate for Lemosho and Shira, without the long drive through town." },
  { t: "Return", d: "Come back to a hot meal, the bonfire and a bed that doesn't move. Soak tired legs at Kikuletwa Hot Springs before your flight or safari." },
];

export default function ClimbStayPage() {
  return (
    <>
      <JsonLd data={faqSchema(climberFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Kilimanjaro Climb Stay", path: "/kilimanjaro-climb-stay" }])} />
      <PageHero
        image={images.kiliView}
        eyebrow="For Kilimanjaro Climbers"
        title="Your climb begins in the foothills"
        lede="Sleep in a quiet tent or room on the western side of Kilimanjaro, well placed for the Machame, Lemosho and Shira routes. Then come back to the fire to celebrate the summit."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Kilimanjaro Climb Stay" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="The Night Before, The Night After" title="Where to stay before climbing Kilimanjaro">
          <p>
            The best climbs start with a good night&apos;s sleep. Boloti sits between Moshi and Kilimanjaro International
            Airport, on the western side of the mountain near Sanya Juu, so you wake to birdsong instead of traffic and reach
            the trailhead unhurried.
          </p>
        </SectionHeading>

        <ol className="mt-16 grid gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="bg-sand-50 p-8" data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
              <span className="font-serif text-5xl text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-3xl text-forest-900">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-charcoal-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand-100 py-24 lg:py-28" aria-labelledby="routes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="Which Route Are You Climbing?" title={<span id="routes-heading">Best placed for the western routes</span>}>
            <p>
              Kilimanjaro&apos;s routes start from different gates around the mountain. Boloti is on the western side, so it
              suits some climbs better than others.
            </p>
          </SectionHeading>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {climbRoutes.map((r, i) => (
              <li key={r.name} className="flex flex-col border border-sand-200 bg-sand-50 p-8" data-reveal style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
                <p className="eyebrow">{r.fit}</p>
                <h3 className="mt-3 text-3xl text-forest-900">{r.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-charcoal-500">{r.gate}</p>
                <p className="mt-4 leading-relaxed text-charcoal-700">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest-900 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
            <Image src={images.singleTentLawn.src} alt={images.singleTentLawn.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading light eyebrow="A Tented Camp Under Kilimanjaro" title="Glamping at the foot of the mountain">
              <p>
                Tented camps are usually a day&apos;s drive away in the Serengeti. At Boloti, canvas suites sit on open lawns
                beneath the mountain itself, with private porches, comfortable beds and the restaurant a short stroll away.
              </p>
            </SectionHeading>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <Link href="/rooms/single-tents" className="btn-ghost text-sand-50">Single Tents</Link>
              <Link href="/rooms/family-tents" className="btn-ghost text-sand-50">Family Tents</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="Questions from climbers" faqs={climberFaqs} />

      <section className="bg-sand-100 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div data-reveal>
            <h2 className="text-4xl text-forest-900 sm:text-5xl">Rest well. Climb well.</h2>
            <div className="mt-6"><RatingStrip /></div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
            <Link href="/contact?stay=single-tents#reserve" className="btn-primary group">Book your climb nights <Arrow /></Link>
            <a href={whatsappLink("Hello Boloti, I'm climbing Kilimanjaro and would like to book nights before and after.")} className="btn-ghost text-forest-900">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <JourneyLinks current="/kilimanjaro-climb-stay" />
    </>
  );
}
