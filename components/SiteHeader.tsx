"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-(--ease-luxe) ${
        solid ? "bg-sand-50/92 py-3 shadow-[0_1px_0_rgba(42,40,38,0.08)] backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
          <Image
            src={solid ? "/images/boloti-logo.png" : "/images/boloti-logo-white.png"}
            alt=""
            width={48}
            height={48}
            className="h-11 w-11 transition-all duration-500"
          />
          <span className={`font-serif text-xl leading-none tracking-wide transition-colors duration-500 ${solid ? "text-forest-900" : "text-sand-50"}`}>
            Boloti
            <span className="block text-[0.6rem] font-sans uppercase tracking-[0.35em] opacity-70">Camp Resort</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => {
              const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-underline text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ${
                      solid ? "text-charcoal-900 hover:text-terracotta-500" : "text-sand-50/90 hover:text-sand-50"
                    } ${active ? "bg-[length:100%_1px]" : ""}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={`hidden text-sm tracking-wide xl:inline ${solid ? "text-charcoal-700" : "text-sand-100"}`}
          >
            {site.phone}
          </a>
          <Link href="/contact#reserve" className="btn-primary hidden !py-3 sm:inline-flex">
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative h-11 w-11 lg:hidden ${solid ? "text-forest-900" : "text-sand-50"}`}
          >
            <span className={`absolute left-2.5 right-2.5 h-px bg-current transition-all duration-500 ${open ? "top-1/2 rotate-45" : "top-[40%]"}`} />
            <span className={`absolute left-2.5 right-2.5 h-px bg-current transition-all duration-500 ${open ? "top-1/2 -rotate-45" : "top-[60%]"}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-4.25rem)] overflow-y-auto bg-sand-50 px-4 pb-10 pt-6 lg:hidden"
      >
        <ul className="space-y-1">
          {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="block border-b border-sand-200 py-4 font-serif text-3xl text-forest-900">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/contact#reserve" className="btn-primary">Reserve your stay</Link>
          <a href={site.phoneHref} className="btn-ghost text-forest-900">Call {site.phone}</a>
        </div>
      </div>
    </header>
  );
}
