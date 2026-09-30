import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero image={images.bonfire} eyebrow="Page not found" title="This path leads off the map" lede="The page you were looking for has moved or no longer exists. Let us guide you back to the fire." />
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-16 sm:px-8">
        <Link href="/" className="btn-primary">Return home</Link>
        <Link href="/rooms" className="btn-ghost text-forest-900">View our stays</Link>
      </div>
    </>
  );
}
