import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Breadcrumbs, JsonLd, PageHero } from "@/components/ui";
import { getRoom, rooms } from "@/lib/content";
import { breadcrumbSchema, roomSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rooms/[slug]">): Promise<Metadata> {
  const room = getRoom((await params).slug);
  if (!room) return {};
  return {
    title: room.seoTitle,
    description: room.seoDescription,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | Boloti Camp Resort`,
      description: room.seoDescription,
      url: `/rooms/${room.slug}`,
      images: [{ url: room.hero.src, width: room.hero.w, height: room.hero.h, alt: room.hero.alt }],
    },
  };
}

export default async function RoomPage({ params }: PageProps<"/rooms/[slug]">) {
  const room = getRoom((await params).slug);
  if (!room) notFound();
  const others = rooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <JsonLd data={roomSchema(room)} />
      <JsonLd data={breadcrumbSchema([{ name: "Stay", path: "/rooms" }, { name: room.name, path: `/rooms/${room.slug}` }])} />

      <PageHero image={room.hero} eyebrow={room.eyebrow} title={room.name} lede={room.summary} />

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
        <Breadcrumbs items={[{ name: "Stay", href: "/rooms" }, { name: room.name }]} />
      </div>

      <section className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <div data-reveal>
          <p className="font-serif text-3xl italic leading-snug text-forest-800 sm:text-4xl">{room.tagline}.</p>
          {room.story.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-charcoal-700">{p}</p>
          ))}
        </div>

        <aside className="h-fit border border-sand-200 bg-sand-100 p-8 lg:sticky lg:top-28" data-reveal>
          <p className="eyebrow">{room.count}</p>
          <h2 className="mt-3 text-3xl text-forest-900">In your {room.name.replace(/^The /, "").replace(/s$/, "").toLowerCase()}</h2>
          <ul className="mt-6 space-y-3 text-charcoal-700">
            {room.highlights.map((h) => (
              <li key={h} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />{h}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link href={`/contact?stay=${room.slug}#reserve`} className="btn-primary group">Reserve direct <Arrow /></Link>
            <a href={whatsappLink(`Hello Boloti, I'd like to check availability for the ${room.name}.`)} className="btn-ghost text-forest-900">
              Ask on WhatsApp
            </a>
          </div>
        </aside>
      </section>

      <section aria-label={`${room.name} photographs`} className="mx-auto max-w-7xl px-4 pb-24 sm:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[300px] md:grid-cols-3">
          {room.gallery.map((im, i) => (
            <div key={im.src} className={`relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`} data-reveal>
              <Image src={im.src} alt={im.alt} fill sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"} className="object-cover transition-transform duration-[1.4s] ease-(--ease-luxe) hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-4xl text-forest-900" data-reveal>Other sanctuaries</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {others.map((r) => (
              <li key={r.slug} data-reveal>
                <Link href={`/rooms/${r.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.hero.src} alt={r.hero.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-(--ease-luxe) group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-2xl text-forest-900">{r.name}</h3>
                  <p className="text-sm text-charcoal-500">{r.count}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
