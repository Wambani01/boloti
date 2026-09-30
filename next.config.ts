import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  // Preserve search rankings and backlinks from the old WordPress URLs.
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/restaurant", destination: "/dining", permanent: true },
      { source: "/activities", destination: "/experiences", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/family-villa", destination: "/rooms/family-villa", permanent: true },
      { source: "/king-double-rooms", destination: "/rooms/king-double-rooms", permanent: true },
      { source: "/family-tents", destination: "/rooms/family-tents", permanent: true },
      { source: "/single-tents", destination: "/rooms/single-tents", permanent: true },
      { source: "/accommodation/:path*", destination: "/rooms", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
