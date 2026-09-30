"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { rooms } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const today = () => new Date().toISOString().slice(0, 10);

/** Floating direct-booking bar. Sends dates to the reservation form on /contact. */
export function BookingBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [checkin, setCheckin] = useState("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contact")) return null;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const [k, v] of data) if (typeof v === "string" && v) params.set(k, v);
    router.push(`/contact?${params.toString()}#reserve`);
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-700 ease-(--ease-luxe) sm:bottom-5 sm:px-6 sm:pb-0 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {/* Mobile: two clear actions */}
      <div className="flex gap-2 rounded-full bg-forest-900/95 p-1.5 shadow-2xl backdrop-blur md:hidden">
        <Link href="/contact#reserve" tabIndex={visible ? 0 : -1} className="flex-1 rounded-full bg-sand-50 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-forest-900">
          Book direct
        </Link>
        <a
          href={whatsappLink("Hello Boloti, I'd like to check availability.")}
          tabIndex={visible ? 0 : -1}
          className="flex-1 rounded-full py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand-50"
        >
          WhatsApp
        </a>
      </div>

      {/* Desktop: full availability bar */}
      <form
        onSubmit={submit}
        className="mx-auto hidden max-w-5xl items-center gap-2 rounded-full border border-sand-200/60 bg-sand-50/95 p-2 pl-8 shadow-[0_24px_60px_-20px_rgba(15,31,23,0.45)] backdrop-blur-md md:flex"
        aria-label="Check availability"
      >
        <label className="flex flex-1 flex-col">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-terracotta-500">Arrive</span>
          <input type="date" name="checkin" min={today()} value={checkin} onChange={(e) => setCheckin(e.target.value)} tabIndex={visible ? 0 : -1} className="bg-transparent text-sm text-charcoal-900 outline-none" />
        </label>
        <span className="h-8 w-px bg-sand-300" aria-hidden />
        <label className="flex flex-1 flex-col pl-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-terracotta-500">Depart</span>
          <input type="date" name="checkout" min={checkin || today()} tabIndex={visible ? 0 : -1} className="bg-transparent text-sm text-charcoal-900 outline-none" />
        </label>
        <span className="h-8 w-px bg-sand-300" aria-hidden />
        <label className="flex flex-col pl-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-terracotta-500">Guests</span>
          <select name="guests" defaultValue="2" tabIndex={visible ? 0 : -1} className="bg-transparent text-sm text-charcoal-900 outline-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </label>
        <span className="h-8 w-px bg-sand-300" aria-hidden />
        <label className="flex flex-1 flex-col pl-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-terracotta-500">Stay</span>
          <select name="stay" defaultValue="" tabIndex={visible ? 0 : -1} className="bg-transparent text-sm text-charcoal-900 outline-none">
            <option value="">Any sanctuary</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>{r.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" tabIndex={visible ? 0 : -1} className="btn-primary !px-7">
          Check availability
        </button>
      </form>
    </div>
  );
}
