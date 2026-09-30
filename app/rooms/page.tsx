import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { amenities, rooms } from "@/lib/content";
import { images } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rooms, Villa & Luxury Tents near Kilimanjaro",
  description:
    "Choose your sanctuary at Boloti Camp Resort: a two-bedroom Family Villa, King Double Rooms, Family Tents and Single Tents in the Kilimanjaro foothills, near Machame Gate and JRO airport.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Stay", path: "/rooms" }])} />
      <PageHero
        image={images.lawnTents}
        eyebrow="Extraordinary Suites"
        title="Accommodations at the foot of Kilimanjaro"
        lede="A private villa, regal king rooms and canvas suites on open lawns, each one a sanctuary of fine linens, soft light and birdsong."
      />

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Stay" }]} />
      </div>

      <section className="mx-auto max-w-7xl space-y-28 px-4 py-20 sm:px-8 lg:space-y-40 lg:py-28">
        {rooms.map((r, i) => (
          <article key={r.slug} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Link href={`/rooms/${r.slug}`} className={`group relative block aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`} data-reveal>
              <Image src={r.hero.src} alt={r.hero.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1.6s] ease-(--ease-luxe) group-hover:scale-105" />
            </Link>
            <div data-reveal>
              <p className="eyebrow">{r.eyebrow} · {r.count}</p>
              <h2 className="mt-4 text-4xl text-forest-900 sm:text-5xl">
                <Link href={`/rooms/${r.slug}`} className="hover:text-terracotta-500 transition-colors duration-500">{r.name}</Link>
              </h2>
              <p className="mt-2 font-serif text-xl italic text-charcoal-500">{r.tagline}</p>
              <p className="mt-6 leading-relaxed text-charcoal-700">{r.summary}</p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-charcoal-700 sm:grid-cols-2">
                {r.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />{h}</li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={`/rooms/${r.slug}`} className="btn-primary group">View {r.name.replace(/^The /, "")} <Arrow /></Link>
                <Link href={`/contact?stay=${r.slug}#reserve`} className="btn-ghost text-forest-900">Reserve</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="Amenities & Services" title="Every convenience, quietly taken care of" />
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
    </>
  );
}
