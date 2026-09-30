import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Breadcrumbs, JsonLd, PageHero } from "@/components/ui";
import { galleryImages, images } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery: Our Kilimanjaro Lodge, Tents & Gardens",
  description:
    "See Boloti Camp Resort: luxury safari tents, the Family Villa, King Double Rooms, the open-air restaurant and the nightly bonfire at the foothills of Mount Kilimanjaro.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Boloti Camp Resort gallery",
          image: galleryImages.map(({ img }) => ({
            "@type": "ImageObject",
            contentUrl: new URL(img.src, site.url).toString(),
            description: img.alt,
          })),
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
      <PageHero image={images.aerialFarmland} eyebrow="Your Memorable Stay" title="Our gallery" lede="Canvas and garden, fire and starlight: a glimpse of life at the foot of Kilimanjaro." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs items={[{ name: "Gallery" }]} />
        <div className="mt-10">
          <GalleryGrid items={galleryImages} />
        </div>
      </section>
    </>
  );
}
