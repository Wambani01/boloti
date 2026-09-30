import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, FaqSection, JourneyLinks, JsonLd, PageHero, RatingStrip, SectionHeading } from "@/components/ui";
import { weekendFaqs } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/site";

/*
 * Tanzanian weekenders: the competitor report found no leisure property advertising
 * weekend escapes to people in Dar es Salaam or Arusha, and no hotel ranking for "hoteli nzuri moshi".
 */
export const metadata: Metadata = {
  title: { absolute: "Weekend Getaway near Arusha & Moshi | Boloti Camp Resort" },
  description:
    "A weekend under Mount Kilimanjaro: garden dinners, the bonfire, hot springs and cycling at Boloti Camp Resort, around an hour from Arusha and 20 minutes from KIA. Wikendi ya utulivu karibu na Moshi.",
  keywords: [
    "weekend getaway Arusha",
    "weekend getaway Moshi",
    "Kilimanjaro weekend getaway",
    "weekend getaway from Dar es Salaam",
    "hoteli nzuri Moshi",
    "wikendi Kilimanjaro",
  ],
  alternates: { canonical: "/kilimanjaro-weekend-getaway" },
};

const weekend = [
  { day: "Friday", sw: "Ijumaa", body: "Drive in from Arusha or land at KIA. Settle into your tent or villa, then take a drink to the bonfire before dinner under the stars." },
  { day: "Saturday", sw: "Jumamosi", body: "A slow breakfast in the garden, then cycle beside the Boloti River or spend the afternoon floating in the warm waters of Kikuletwa Hot Springs." },
  { day: "Sunday", sw: "Jumapili", body: "Wake to birdsong and the mountain. Linger over breakfast before the easy journey home, rested for the week ahead." },
];

export default function WeekendPage() {
  return (
    <>
      <JsonLd data={faqSchema(weekendFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Weekend Getaway", path: "/kilimanjaro-weekend-getaway" }])} />
      <PageHero
        image={images.lawnCottages}
        eyebrow="From Arusha, Moshi & Dar es Salaam"
        title="A weekend under the mountain"
        lede="Two nights of garden dinners, fireside evenings and slow mornings in the Kilimanjaro foothills. Closer than you think, and a world away from the city."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Weekend Getaway" }]} />
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <SectionHeading eyebrow="The Weekend Escape" title="Leave the city on Friday. Breathe again by Saturday.">
          <p>
            Boloti Camp Resort lies in Masama, between Arusha and Moshi, around an hour&apos;s drive from Arusha and 20
            minutes from Kilimanjaro International Airport (KIA). From Dar es Salaam, a short flight and a taxi transfer bring
            you to our gardens in time for dinner.
          </p>
          <p className="mt-5">
            Choose a canvas tent for two, a King Double Room, or the two-bedroom Family Villa for the whole family, and let the
            mountain set the pace.
          </p>
        </SectionHeading>
        <div className="relative aspect-[4/5] overflow-hidden" data-reveal>
          <Image src={images.bonfireCircle.src} alt={images.bonfireCircle.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-sand-100 py-24 lg:py-28" aria-labelledby="weekend-plan">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="Your Weekend" title={<span id="weekend-plan">Three days, gently planned</span>} />
          <ol className="mt-14 grid gap-px bg-sand-200 md:grid-cols-3">
            {weekend.map((d, i) => (
              <li key={d.day} className="bg-sand-50 p-8" data-reveal style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
                <p className="eyebrow" lang="sw">{d.sw}</p>
                <h3 className="mt-3 text-3xl text-forest-900">{d.day}</h3>
                <p className="mt-3 leading-relaxed text-charcoal-700">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kiswahili section for Tanzanian guests */}
      <section lang="sw" className="bg-forest-900 py-24 lg:py-32" aria-labelledby="kiswahili-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Kwa Wageni wa Tanzania" title={<span id="kiswahili-heading">Wikendi ya utulivu chini ya Mlima Kilimanjaro</span>}>
              <p>
                Pumzika Boloti Camp Resort, Masama, katika miteremko ya Mlima Kilimanjaro. Furahia chakula kitamu katika
                mgahawa wetu wa wazi, bustani tulivu, moto mkubwa wa jioni chini ya nyota, na mandhari nzuri ya mlima.
              </p>
              <p className="mt-5">
                Tuko takriban saa moja kutoka Arusha na dakika 20 kutoka Uwanja wa Ndege wa Kimataifa wa Kilimanjaro (KIA).
                Uliza kuhusu bei kwa wakazi wa Tanzania.
              </p>
            </SectionHeading>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
              <a href={whatsappLink("Habari Boloti, ningependa kuweka nafasi ya wikendi.")} className="btn-primary !bg-sand-50 !text-forest-900 hover:!bg-gold-400">
                Tuma ujumbe WhatsApp
              </a>
              <Link href="/contact#reserve" className="btn-ghost text-sand-50">Weka nafasi</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
            <Image src={images.tableSetting.src} alt={images.tableSetting.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <FaqSection title="Planning your weekend" faqs={weekendFaqs} />

      <section className="bg-sand-100 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div data-reveal>
            <h2 className="text-4xl text-forest-900 sm:text-5xl">Your weekend is waiting</h2>
            <div className="mt-6"><RatingStrip /></div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
            <Link href="/contact#reserve" className="btn-primary group">Reserve your weekend <Arrow /></Link>
            <a href={whatsappLink("Hello Boloti, I'd like to book a weekend. Do you have rates for Tanzanian residents?")} className="btn-ghost text-forest-900">
              Ask about resident rates
            </a>
          </div>
        </div>
      </section>

      <JourneyLinks current="/kilimanjaro-weekend-getaway" heading="Other ways to stay" />
    </>
  );
}
