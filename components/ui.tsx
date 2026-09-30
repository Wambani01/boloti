import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { journeys, type Faq } from "@/lib/content";
import type { Img } from "@/lib/images";
import { site } from "@/lib/site";
import { ParallaxLayer } from "./ParallaxLayer";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`} data-reveal>
      {eyebrow && (
        <p className={`eyebrow ${light ? "eyebrow-light" : ""} flex items-center gap-4 ${center ? "justify-center" : ""}`}>
          <span className="rule-gold" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${light ? "text-sand-50" : "text-forest-900"}`}
      >
        {title}
      </Tag>
      {children && (
        <div className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-sand-200" : "text-charcoal-700"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

/** Full-bleed page header for inner pages, with gentle parallax. */
export function PageHero({
  image,
  eyebrow,
  title,
  lede,
}: {
  image: Img;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-forest-950">
      <ParallaxLayer className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/90 via-forest-950/35 to-forest-950/20" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-40 sm:px-8 lg:pb-28">
        <p className="eyebrow eyebrow-light animate-rise flex items-center gap-4">
          <span className="rule-gold" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-5 max-w-4xl text-5xl leading-[1.02] text-sand-50 [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-sand-200 [animation-delay:240ms]">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

export function RatingStrip({ light = false }: { light?: boolean }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-10 gap-y-4 ${light ? "text-sand-100" : "text-forest-900"}`}>
      {site.ratings.map((r) => (
        <li key={r.source} className="flex items-baseline gap-2">
          <span className="font-serif text-4xl">{r.score}</span>
          <span className="text-xs uppercase tracking-[0.2em] opacity-75">
            / {r.scale} · {r.source}
            {"count" in r && r.count ? ` (${r.count} reviews)` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-charcoal-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="link-underline hover:text-forest-800">Home</Link>
        </li>
        {items.map((it) => (
          <li key={it.name} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {it.href ? (
              <Link href={it.href} className="link-underline hover:text-forest-800">{it.name}</Link>
            ) : (
              <span aria-current="page" className="text-forest-800">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Arrow() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
      <path d="M0 5h16m0 0L12 1m4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function FaqSection({ title, faqs, eyebrow = "Good to Know" }: { title: string; faqs: Faq[]; eyebrow?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-8 lg:py-32" aria-labelledby="faq-heading">
      <SectionHeading eyebrow={eyebrow} title={<span id="faq-heading">{title}</span>} />
      <div className="mt-12 divide-y divide-sand-200 border-y border-sand-200">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6" data-reveal>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-2xl text-forest-900 [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <span className="mt-1 text-gold-500 transition-transform duration-500 group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-4 max-w-3xl leading-relaxed text-charcoal-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Journey cards (climbers, weekenders, road trippers). Pass `current` to hide the page you're on. */
export function JourneyLinks({ current, heading = "Plan your journey" }: { current?: string; heading?: string }) {
  const items = journeys.filter((j) => j.href !== current);
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-28" aria-labelledby="journeys-heading">
      <SectionHeading eyebrow="Made for Your Journey" title={<span id="journeys-heading">{heading}</span>} />
      <ul className={`mt-12 grid gap-8 ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((j, i) => (
          <li key={j.href} data-reveal style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
            <Link href={j.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
                <Image src={j.image.src} alt={j.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-(--ease-luxe) group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-6">{j.eyebrow}</p>
              <h3 className="mt-2 text-3xl text-forest-900">{j.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal-700">{j.body}</p>
              <span className="mt-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500">
                Read more <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
