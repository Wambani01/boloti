import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { experiences } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema, experiencesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Things to Do near Kilimanjaro",
  description:
    "From Boloti Camp Resort: Kilimanjaro National Park, Kikuletwa (Maji Moto) Hot Springs, Kibong'oto Waterfalls, rare bird viewing and Boloti River bike rides through Siha district.",
  alternates: { canonical: "/experiences" },
};

// Photos are shown only where the original site has a matching image.
const photo = [images.kiliView, null, images.garden, null, images.aerialFarmland];

export default function ExperiencesPage() {
  return (
    <>
      <JsonLd data={experiencesSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Experiences", path: "/experiences" }])} />
      <PageHero
        image={images.aerialTents}
        eyebrow="Your Gateway to Adventure"
        title="Experiences in the shadow of Kilimanjaro"
        lede="Boloti is not only a place to stay. It is a launchpad into the natural beauty, cultural richness and adventurous spirit of northern Tanzania."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Experiences" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="Explore, Discover, Connect" title="Curated adventures, steps from your door">
          <p>
            Whether you are a thrill-seeker, a nature lover or a curious explorer, our team will happily help you
            plan each outing around your pace and your journey.
          </p>
        </SectionHeading>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {experiences.map((e, i) => {
            const im = photo[i];
            return (
              <article key={e.name} className={`grid items-center gap-10 ${im ? "lg:grid-cols-2 lg:gap-20" : "lg:grid-cols-[8rem_1fr]"}`}>
                {im ? (
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`} data-reveal>
                    <Image src={im.src} alt={im.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <span className="font-serif text-7xl text-gold-500 lg:text-8xl" aria-hidden data-reveal>{String(i + 1).padStart(2, "0")}</span>
                )}
                <div className={im ? "" : "max-w-3xl border-l border-sand-300 pl-8"} data-reveal>
                  <p className="eyebrow">{e.eyebrow}</p>
                  <h2 className="mt-4 text-4xl text-forest-900 sm:text-5xl">{e.name}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-charcoal-700">{e.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-sand-100 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-8 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl text-4xl text-forest-900 sm:text-5xl" data-reveal>Climbing Kilimanjaro? Begin and end with us.</h2>
          <Link href="/kilimanjaro-climb-stay" className="btn-primary group" data-reveal>Plan your climb stay <Arrow /></Link>
        </div>
      </section>
    </>
  );
}
