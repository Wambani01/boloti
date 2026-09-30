import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ParallaxLayer } from "@/components/ParallaxLayer";
import { Arrow, JourneyLinks, RatingStrip, SectionHeading } from "@/components/ui";
import { experiences, rooms } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <JourneyLinks heading="Whatever brings you to Kilimanjaro" />
      <Facts />
      <Accommodations />
      <Transit />
      <Dining />
      <Bonfire />
      <Experiences />
      <Reviews />
      <GalleryTeaser />
      <ClosingCta />
    </>
  );
}

const heroSlides = [
  { img: images.aerial, caption: "The gardens from above" },
  { img: images.lawnTents, caption: "Safari tents on the lawn" },
  { img: images.kiliView, caption: "Kilimanjaro at our gate", position: "center 30%" },
  { img: images.familyTentVerandah, caption: "A Family Tent verandah" },
  { img: images.pavilion, caption: "The restaurant at dusk" },
  { img: images.bonfire, caption: "The evening bonfire" },
];

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-950">
      <HeroSlideshow slides={heroSlides} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/30" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-8 sm:pb-24">
        <p className="eyebrow eyebrow-light animate-rise flex items-center gap-4">
          <span className="rule-gold" aria-hidden />
          Boloti Camp Resort · Masama · Sanya Juu
        </p>
        <h1 className="animate-rise mt-6 max-w-5xl text-[2.9rem] leading-[0.98] text-sand-50 [animation-delay:120ms] sm:text-7xl lg:text-[6.5rem]">
          Where Mount Kilimanjaro Meets <em className="font-normal text-gold-400">Serene Luxury</em>
        </h1>
        <p className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-sand-200 [animation-delay:240ms] sm:text-xl">
          An extraordinary sanctuary nestled at the foothills of Mt. Kilimanjaro. Your gateway to safari adventures,
          cultural escapes, and quiet rejuvenation.
        </p>
        <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
          <Link href="/contact#reserve" className="btn-primary group !bg-sand-50 !text-forest-900 hover:!bg-gold-400">
            Reserve direct <Arrow />
          </Link>
          <Link href="/rooms" className="btn-ghost text-sand-50">
            Explore the sanctuary
          </Link>
        </div>
        <ul className="animate-rise mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-sand-50/15 pt-6 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-sand-200/80 [animation-delay:480ms]">
          <li>★ 4.9 on Google</li>
          <li>~20 min from Kilimanjaro Airport</li>
          <li>Near Machame Gate</li>
        </ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-8 lg:grid-cols-2 lg:py-36">
      <div>
        <SectionHeading eyebrow="An Extraordinary Place" title="A tranquil haven in the lush foothills of Kilimanjaro">
          <p>
            Cradled in the green foothills of Africa&apos;s highest mountain, Boloti Camp Resort is a sanctuary where
            nature&apos;s beauty comes gently to life. We are a short drive from Kilimanjaro International Airport, and
            the natural first and last chapter for trekkers, safari travellers, business guests and families discovering
            Tanzania.
          </p>
          <p className="mt-5">
            Wander our garden paradise, where trees bloom in every season and native birds sing you awake. Here you can
            recharge, rejuvenate and prepare, unhurried, for the journey ahead.
          </p>
        </SectionHeading>
        <Link href="/about" className="group mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800" data-reveal>
          Our story <Arrow />
        </Link>
      </div>
      <div className="relative h-[520px] sm:h-[620px]" data-reveal>
        <div className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-t-full">
          <Image src={images.kiliView.src} alt={images.kiliView.alt} fill sizes="(min-width: 1024px) 30vw, 70vw" className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 h-[48%] w-[58%] overflow-hidden border-8 border-sand-50 shadow-2xl">
          <Image src={images.garden.src} alt={images.garden.alt} fill sizes="(min-width: 1024px) 25vw, 55vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function Facts() {
  const facts = [
    { k: "20", u: "min", v: "from Kilimanjaro International Airport (JRO)" },
    { k: "4", u: "", v: "ways to stay: villa, king rooms, family & single tents" },
    { k: "4.9", u: "★", v: "guest rating on Google" },
    { k: "1", u: "", v: "grand bonfire, lit beneath the stars every evening" },
  ];
  return (
    <section aria-label="Boloti at a glance" className="border-y border-sand-200 bg-sand-100">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-8 lg:grid-cols-4">
        {facts.map((f, i) => (
          <div key={f.v} className="py-10 pr-6" data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
            <dt className="font-serif text-5xl text-forest-900 lg:text-6xl">
              {f.k}
              <span className="ml-1 text-2xl text-terracotta-500">{f.u}</span>
            </dt>
            <dd className="mt-3 max-w-[16rem] text-sm leading-relaxed text-charcoal-700">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Accommodations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-36" aria-labelledby="stay-heading">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Extraordinary Suites" title={<span id="stay-heading">Uncover serenity in our accommodations</span>}>
          <p>
            More than a place to sleep, each of our four sanctuaries is wrapped in the warm embrace of Tanzanian
            hospitality, with modern comforts and nature always within reach.
          </p>
        </SectionHeading>
        <Link href="/rooms" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800" data-reveal>
          Compare all stays <Arrow />
        </Link>
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {rooms.map((r, i) => (
          <li key={r.slug} data-reveal style={{ "--reveal-delay": `${(i % 2) * 150}ms` } as React.CSSProperties} className={i % 2 ? "sm:mt-24" : ""}>
            <Link href={`/rooms/${r.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-200">
                <Image
                  src={r.hero.src}
                  alt={r.hero.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-(--ease-luxe) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="absolute left-5 top-5 rounded-full bg-sand-50/90 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-forest-900 backdrop-blur">
                  {r.count}
                </span>
              </div>
              <p className="eyebrow mt-6">{r.eyebrow}</p>
              <h3 className="mt-2 text-3xl text-forest-900 sm:text-4xl">{r.name}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-charcoal-700">{r.summary}</p>
              <span className="mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500">
                Discover <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Transit() {
  return (
    <section className="bg-sand-100">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <div className="relative aspect-[5/4] overflow-hidden" data-reveal>
          <Image src={images.walkway.src} alt={images.walkway.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="Transit in Tranquility" title="The quiet first night of every great journey">
            <p>
              Before the summit or the Serengeti, and after both, Boloti is the place to exhale. We sit on the airport
              side of Moshi, close to Machame Gate and Kilimanjaro National Park, with easy access to Kikuletwa Hot Springs
              and the cultural villages of Siha.
            </p>
            <p className="mt-5">
              Arrive by our taxi transfer, rent any gear you are missing from our equipment store, eat well, and sleep
              deeply. Tomorrow, the mountain.
            </p>
          </SectionHeading>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
            <Link href="/kilimanjaro-climb-stay" className="btn-primary group">Staying before your climb <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section className="overflow-hidden bg-forest-900 py-24 lg:py-36" aria-labelledby="dining-heading">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 grid grid-cols-5 grid-rows-6 gap-4 lg:order-1 h-[560px]" data-reveal>
          <div className="relative col-span-3 row-span-4 overflow-hidden">
            <Image src={images.chefFlambe.src} alt={images.chefFlambe.alt} fill sizes="(min-width: 1024px) 28vw, 60vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 row-span-3 overflow-hidden">
            <Image src={images.cocktail.src} alt={images.cocktail.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 row-span-3 overflow-hidden">
            <Image src={images.breakfast.src} alt={images.breakfast.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
          </div>
          <div className="relative col-span-3 row-span-2 overflow-hidden">
            <Image src={images.diningChandelier.src} alt={images.diningChandelier.alt} fill sizes="(min-width: 1024px) 28vw, 60vw" className="object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading light eyebrow="Bon Appétit" title={<span id="dining-heading">Exquisite cuisine, elevating flavours</span>}>
            <p>
              In our open-air restaurant, renowned chefs compose a journey for the senses, from international classics to
              the honest, generous flavours of Tanzania. Breakfast arrives with fresh tropical fruit; dinner, with the
              scent of the garden and the glow of the lanterns.
            </p>
            <p className="mt-5">
              Then the bar: the social heart of Boloti, where a well-made cocktail meets tales of the day in the warmth of
              Kilimanjaro.
            </p>
          </SectionHeading>
          <Link href="/dining" className="btn-ghost group mt-10 text-sand-50" data-reveal>
            The restaurant &amp; bar <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Bonfire() {
  return (
    <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-forest-950" aria-labelledby="bonfire-heading">
      <ParallaxLayer className="absolute inset-x-0 -top-[15%] -z-10 h-[130%]" speed={0.18}>
        <Image src={images.bonfire.src} alt={images.bonfire.alt} fill sizes="100vw" className="object-cover" />
      </ParallaxLayer>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-8">
        <SectionHeading light eyebrow="Ignite Memories" title={<span id="bonfire-heading">The grand bonfire, beneath a Kilimanjaro sky</span>}>
          <p>
            As night falls, gather around our fire. Flames dance beneath a sky thick with stars, and fellow explorers
            trade tales of summits and savannahs. It is a place of warmth and connection, where friendships are kindled
            and the spirit of the wilderness comes alive.
          </p>
        </SectionHeading>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-36" aria-labelledby="exp-heading">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Beyond the Gate" title={<span id="exp-heading">Adventures on our doorstep</span>}>
            <p>
              From Africa&apos;s highest summit to warm springs hidden among palms, Boloti is the launchpad for the
              wonders of northern Tanzania.
            </p>
          </SectionHeading>
          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden lg:block" data-reveal>
            <Image src={images.aerialFarmland.src} alt={images.aerialFarmland.alt} fill sizes="40vw" className="object-cover" />
          </div>
        </div>
        <ol className="divide-y divide-sand-200 border-y border-sand-200">
          {experiences.map((e, i) => (
            <li key={e.name} className="grid grid-cols-[3rem_1fr] gap-4 py-9" data-reveal>
              <span className="font-serif text-2xl text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{e.eyebrow}</p>
                <h3 className="mt-2 text-3xl text-forest-900">{e.name}</h3>
                <p className="mt-3 leading-relaxed text-charcoal-700">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-12" data-reveal>
        <Link href="/experiences" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800">
          All experiences <Arrow />
        </Link>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-sand-100 py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div data-reveal>
          <p className="eyebrow">Loved by our guests</p>
          <h2 id="reviews-heading" className="mt-3 text-4xl text-forest-900 sm:text-5xl">Rated among the finest near Kilimanjaro</h2>
        </div>
        <div data-reveal>
          <RatingStrip />
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const set = [images.lawnTents, images.kingPetals, images.pavilion, images.villaLounge, images.ginTonic];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32" aria-labelledby="gallery-heading">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Your Memorable Stay" title={<span id="gallery-heading">Moments at Boloti</span>} />
        <Link href="/gallery" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800" data-reveal>
          View the gallery <Arrow />
        </Link>
      </div>
      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4" data-reveal>
        {set.map((im, i) => (
          <Link
            key={im.src}
            href="/gallery"
            className={`group relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 1 ? "row-span-2" : ""}`}
          >
            <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-(--ease-luxe) group-hover:scale-105" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 py-28 text-center lg:py-40">
      <Image src={images.entrance.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-35" />
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <SectionHeading light align="center" eyebrow="Your Idyllic Retreat" title="Secure your sanctuary in the shadow of Kilimanjaro">
          <p>
            Comfort entwined with adventure, and each moment as precious as the view. Book direct and our team will
            personally shape your stay, from airport transfer to your final evening by the fire.
          </p>
        </SectionHeading>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row" data-reveal>
          <Link href="/contact#reserve" className="btn-primary group !bg-sand-50 !text-forest-900 hover:!bg-gold-400">
            Reserve direct <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
