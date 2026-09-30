import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/content";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 pb-28 pt-20 text-sand-200 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-4">
            <Image src="/images/boloti-logo-white.png" alt="Boloti Camp Resort logo" width={64} height={64} className="h-16 w-16" />
            <span className="font-serif text-2xl text-sand-50">Boloti Camp Resort</span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-sand-300">
            A serene sanctuary at the foothills of Mount Kilimanjaro. Your gateway to the mountain, the Serengeti and the quiet in between.
          </p>
        </div>

        <nav aria-label="Stay">
          <h2 className="eyebrow eyebrow-light !font-sans">Stay</h2>
          <ul className="mt-5 space-y-3">
            {rooms.map((r) => (
              <li key={r.slug}>
                <Link href={`/rooms/${r.slug}`} className="link-underline hover:text-sand-50">{r.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore">
          <h2 className="eyebrow eyebrow-light !font-sans">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.filter((n) => n.href !== "/rooms").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-underline hover:text-sand-50">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/kilimanjaro-weekend-getaway" className="link-underline hover:text-sand-50">Weekend getaways</Link></li>
            <li><Link href="/nairobi-to-moshi-road-trip" className="link-underline hover:text-sand-50">Nairobi to Moshi by road</Link></li>
            <li><Link href="/contact" className="link-underline hover:text-sand-50">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow eyebrow-light !font-sans">Find us</h2>
          <address className="mt-5 space-y-3 not-italic leading-relaxed">
            <p>
              {site.address.street}
              <br />
              {site.address.locality}
              <br />
              {site.address.region}, {site.address.countryName}
            </p>
            <p>
              <a href={site.phoneHref} className="link-underline hover:text-sand-50">{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`} className="link-underline hover:text-sand-50">{site.email}</a>
            </p>
          </address>
          <ul className="mt-6 flex gap-5 text-sm uppercase tracking-[0.2em]">
            <li><a href={site.social.instagram} target="_blank" rel="noopener" className="link-underline hover:text-sand-50">Instagram</a></li>
            <li><a href={site.social.facebook} target="_blank" rel="noopener" className="link-underline hover:text-sand-50">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-sand-50/10 px-4 pt-8 text-xs tracking-wide text-sand-300/70 sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Boloti Camp Resort. All rights reserved.</p>
        <p>Masama · Sanya Juu · Kilimanjaro · Tanzania</p>
      </div>
    </footer>
  );
}
