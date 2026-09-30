import type { Metadata } from "next";
import { ReservationForm } from "@/components/ReservationForm";
import { Breadcrumbs, JsonLd, PageHero, RatingStrip } from "@/components/ui";
import { images } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve Direct & Contact",
  description:
    "Book direct with Boloti Camp Resort in Masama, Kilimanjaro. Request your dates for the Family Villa, King Double Rooms or luxury tents, or call +255 754 710 563.",
  alternates: { canonical: "/contact" },
};

const pick = (v: string | string[] | undefined) => (typeof v === "string" ? v : undefined);

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const sp = await searchParams;
  const defaults = {
    checkin: pick(sp.checkin),
    checkout: pick(sp.checkout),
    guests: pick(sp.guests),
    stay: pick(sp.stay),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero image={images.entrance} eyebrow="Reserve Direct" title="Secure your sanctuary" lede="Tell us your dates and we will personally confirm availability, transfers and every detail of your stay." />

      <section id="reserve" className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-4 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:py-28">
        <div>
          <Breadcrumbs items={[{ name: "Contact" }]} />
          <h2 className="mt-8 text-4xl text-forest-900 sm:text-5xl">Request your reservation</h2>
          <div className="mt-10">
            <ReservationForm defaults={defaults} />
          </div>
        </div>

        <aside className="space-y-10">
          <div className="border-t border-sand-300 pt-6">
            <h2 className="eyebrow !font-sans">Speak with us</h2>
            <p className="mt-4 font-serif text-3xl text-forest-900">
              <a href={site.phoneHref} className="link-underline">{site.phone}</a>
            </p>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="link-underline text-charcoal-700">{site.email}</a>
            </p>
            <a href={whatsappLink("Hello Boloti, I'd like to make a reservation.")} className="btn-ghost mt-6 text-forest-900">
              WhatsApp reservations
            </a>
          </div>
          <div className="border-t border-sand-300 pt-6">
            <h2 className="eyebrow !font-sans">Find us</h2>
            <address className="mt-4 not-italic leading-relaxed text-charcoal-700">
              {site.address.street}
              <br />
              {site.address.locality}
              <br />
              {site.address.region}, {site.address.countryName}
            </address>
            <p className="mt-2 text-sm text-charcoal-500">Around 20 minutes from Kilimanjaro International Airport (JRO)</p>
          </div>
          <div className="border-t border-sand-300 pt-6">
            <h2 className="eyebrow !font-sans">Guest ratings</h2>
            <div className="mt-4"><RatingStrip /></div>
          </div>
        </aside>
      </section>

      <section aria-label="Map" className="h-[420px] bg-sand-200">
        <iframe
          title="Map showing Boloti Camp Resort in the Kilimanjaro foothills"
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full grayscale-[40%]"
        />
      </section>
    </>
  );
}
