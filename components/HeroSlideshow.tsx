"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Img } from "@/lib/images";
import { ParallaxLayer } from "./ParallaxLayer";

type Slide = { img: Img; caption: string; position?: string };

const INTERVAL = 6500;

/**
 * Crossfading background slideshow for the home hero. The first slide is preloaded for LCP;
 * later slides mount one step ahead so they are decoded before they fade in.
 * Auto-advance pauses when the tab is hidden, and is off for reduced-motion users.
 */
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(2);
  const [paused, setPaused] = useState(false);

  const go = (i: number) => {
    setActive(i);
    setMounted((m) => Math.max(m, Math.min(i + 2, slides.length)));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setPaused(true));
      return () => cancelAnimationFrame(id);
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((a) => {
        const next = (a + 1) % slides.length;
        setMounted((m) => Math.max(m, Math.min(next + 2, slides.length)));
        return next;
      });
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <>
      <ParallaxLayer className="absolute inset-0 -z-10" speed={0.3}>
        {slides.slice(0, mounted).map((s, i) => (
          <div
            key={s.img.src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-(--ease-luxe) ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.img.src}
              alt={i === 0 ? s.img.alt : ""}
              fill
              preload={i === 0}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              className={`object-cover transition-transform duration-[9000ms] ease-out ${i === active ? "scale-100" : "scale-110"}`}
              style={{ objectPosition: s.position ?? "center" }}
            />
          </div>
        ))}
      </ParallaxLayer>

      {/* Controls sit above the gradient, bottom-right */}
      <div className="absolute bottom-6 right-4 z-10 flex items-center gap-4 sm:bottom-10 sm:right-8">
        <p className="hidden text-right text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-sand-200/80 md:block" aria-live="off">
          <span className="text-sand-50">{String(active + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")}
          <span className="ml-3 normal-case tracking-[0.08em]">{slides[active].caption}</span>
        </p>
        <div className="flex items-center gap-2" role="group" aria-label="Hero slideshow">
          {slides.map((s, i) => (
            <button
              key={s.img.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${s.caption}`}
              aria-current={i === active}
              className="group flex h-8 items-center"
            >
              <span className={`block h-px transition-all duration-700 ${i === active ? "w-10 bg-gold-400" : "w-5 bg-sand-50/50 group-hover:bg-sand-50"}`} />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-sand-50/40 text-sand-50 transition-colors hover:bg-sand-50/10"
          >
            {paused ? (
              <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden><path d="M0 0l10 6-10 6z" fill="currentColor" /></svg>
            ) : (
              <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden><path d="M0 0h3v12H0zM7 0h3v12H7z" fill="currentColor" /></svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
