import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, JsonLd, PageHero, RatingStrip, SectionHeading } from "@/components/ui";
import { amenities } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story: A Kilimanjaro Garden Sanctuary",
  description:
    "Boloti Camp Resort is a garden sanctuary in Masama at the foothills of Mount Kilimanjaro, around 20 minutes from Kilimanjaro Airport, with easy access to Kilimanjaro National Park and Kikuletwa Hot Springs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Our Story", path: "/about" }])} />
      <PageHero
        image={images.gardenCottages}
        eyebrow="Your Memorable Stay"
        title="A serene getaway, infused with Tanzanian charm"
        lede="More than a stay: an experience wrapped in the warm embrace of Tanzanian hospitality."
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Our Story" }]} />
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <SectionHeading eyebrow="About Boloti" title="Rooted in the foothills">
          <p>
            Boloti Camp Resort lies in Masama, in the green foothills of Mount Kilimanjaro, where cool mountain air drifts
            through gardens alive with birdsong. Our location offers easy access to Kilimanjaro National Park, Kikuletwa Hot
            Springs and the cultural villages of the region.
          </p>
          <p className="mt-5">
            By day, guests seek out rare birds, explore the Boloti River or cycle the lanes of Siha district. As the light
            fades, everyone finds their way to the grand bonfire to share stories and make memories that last a lifetime.
          </p>
        </SectionHeading>
        <div className="relative aspect-[4/5] overflow-hidden" data-reveal>
          <Image src={images.aerialTents.src} alt={images.aerialTents.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="Amenities & Services" title="Enhancing your stay with every convenience" />
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a) => (
              <div key={a.title} className="border-t border-sand-300 pt-6" data-reveal>
                <dt className="font-serif text-2xl text-forest-900">{a.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-charcoal-700">{a.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div className="relative aspect-[4/3] overflow-hidden lg:order-2" data-reveal>
          <Image src={images.driveway.src} alt={images.driveway.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="Begin Your Adventure" title="The beginning of your journey into the heart of Tanzania">
            <p>
              Around 20 minutes from Kilimanjaro International Airport, Boloti ensures your adventures begin and end with
              unparalleled ease and comfort. Reach out to secure your sanctuary in the shadow of Kilimanjaro, and embrace the
              journey of a lifetime.
            </p>
          </SectionHeading>
          <div className="mt-8" data-reveal><RatingStrip /></div>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            <Link href="/contact#reserve" className="btn-primary group">Make a reservation <Arrow /></Link>
            <a href={site.phoneHref} className="btn-ghost text-forest-900">{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
