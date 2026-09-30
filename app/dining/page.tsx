import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { images } from "@/lib/images";
import { breadcrumbSchema, restaurantSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant & Bar at the Foot of Kilimanjaro",
  description:
    "Dine under the stars at Boloti Restaurant: international and Tanzanian cuisine by our chefs, a lantern-lit bar and the nightly bonfire, in the Kilimanjaro foothills.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return (
    <>
      <JsonLd data={restaurantSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Dining", path: "/dining" }])} />
      <PageHero
        image={images.diningChandelier}
        eyebrow="Bon Appétit"
        title="A feast for the senses"
        lede="In the warmth of Kilimanjaro, every meal is a celebration of taste, aroma and presentation."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Dining" }]} />
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <SectionHeading eyebrow="Boloti Restaurant" title="Elevating flavours, from the garden to the table">
          <p>
            Our renowned chefs curate a diverse journey of gastronomy, from international delicacies to the soulful flavours of
            Tanzania. Mouthwatering starters, generous mains and delectable desserts are each composed with care, and served
            in an open-air dining room where the evening breeze carries the scent of the garden.
          </p>
          <p className="mt-5">
            Mornings begin with fresh tropical fruit, warm chapati and pastries; evenings, with candlelight and the
            unhurried pleasure of a meal worth lingering over.
          </p>
        </SectionHeading>
        <div className="grid grid-cols-2 gap-4" data-reveal>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={images.chef.src} alt={images.chef.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative mt-16 aspect-[3/4] overflow-hidden">
            <Image src={images.chefFlambe.src} alt={images.chefFlambe.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="grid auto-rows-[260px] grid-cols-2 gap-3 px-3 md:grid-cols-4" aria-label="Dining photographs">
        {[images.breakfast, images.fruit, images.tableSetting, images.chapati, images.pavilion, images.restaurantGarden].map((im, i) => (
          <div key={im.src} className={`relative overflow-hidden ${i === 0 || i === 4 ? "col-span-2" : ""}`} data-reveal>
            <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section className="bg-forest-900 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4" data-reveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={images.cocktail.src} alt={images.cocktail.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-16 aspect-[3/4] overflow-hidden">
              <Image src={images.bar.src} alt={images.bar.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
          <SectionHeading light eyebrow="The Bar" title="Toast to adventure">
            <p>
              At the heart of Boloti, our bar is the social pulse of the camp, where laughter flows as freely as our curated
              selection of drinks. Settle in with a crisp gin and tonic or a signature cocktail, and let the peaks of
              Kilimanjaro set the mood for the evening.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28 lg:py-40">
        <Image src={images.bonfireCircle.src} alt={images.bonfireCircle.alt} fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-forest-950/65" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
          <SectionHeading light align="center" eyebrow="Ignite Memories" title="After dinner, the fire">
            <p>
              Carry your glass to the grand bonfire, where crackling flames dance beneath a starlit sky and the day&apos;s
              adventures become tomorrow&apos;s stories.
            </p>
          </SectionHeading>
          <Link href="/contact#reserve" className="btn-primary group mt-10 !bg-sand-50 !text-forest-900" data-reveal>
            Reserve your stay <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
