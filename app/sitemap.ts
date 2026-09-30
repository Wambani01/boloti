import type { MetadataRoute } from "next";
import { rooms } from "@/lib/content";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => new URL(path, site.url).toString();
  const lastModified = new Date("2026-09-30");
  return [
    { url: u("/"), lastModified, changeFrequency: "monthly", priority: 1, images: [u(images.aerial.src)] },
    { url: u("/rooms"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...rooms.map((r) => ({
      url: u(`/rooms/${r.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [u(r.hero.src)],
    })),
    { url: u("/kilimanjaro-climb-stay"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/kilimanjaro-weekend-getaway"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/nairobi-to-moshi-road-trip"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/dining"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/experiences"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/gallery"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: u("/about"), lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: u("/contact"), lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
