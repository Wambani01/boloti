"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Img } from "@/lib/images";

type Item = { img: Img; tag: string };

export function GalleryGrid({ items }: { items: Item[] }) {
  const tags = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.tag)))], [items]);
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const shown = filter === "All" ? items : items.filter((i) => i.tag === filter);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const current = index !== null ? shown[index] : null;

  return (
    <>
      <div role="group" aria-label="Filter photographs" className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ${
              filter === t ? "border-forest-800 bg-forest-800 text-sand-50" : "border-sand-300 text-charcoal-700 hover:border-forest-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <li key={item.img.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block w-full overflow-hidden bg-sand-200"
              aria-label={`Enlarge: ${item.img.alt}`}
            >
              <Image
                src={item.img.src}
                alt={item.img.alt}
                width={item.img.w}
                height={item.img.h}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-[1.4s] ease-(--ease-luxe) group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-forest-950/0 transition-colors duration-700 group-hover:bg-forest-950/20" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-forest-950/95 p-0 backdrop:bg-forest-950/80"
        aria-label="Photograph viewer"
      >
        {current && (
          <figure className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-12">
            <div className="relative h-full max-h-[80dvh] w-full">
              <Image src={current.img.src} alt={current.img.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="max-w-2xl text-center text-sm text-sand-200">{current.img.alt}</figcaption>
          </figure>
        )}
        <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full border border-sand-50/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand-50" autoFocus>
          Close
        </button>
        <button type="button" onClick={() => step(-1)} aria-label="Previous photograph" className="absolute left-2 top-1/2 -translate-y-1/2 p-4 text-4xl text-sand-50/80 hover:text-sand-50">‹</button>
        <button type="button" onClick={() => step(1)} aria-label="Next photograph" className="absolute right-2 top-1/2 -translate-y-1/2 p-4 text-4xl text-sand-50/80 hover:text-sand-50">›</button>
      </dialog>
    </>
  );
}
