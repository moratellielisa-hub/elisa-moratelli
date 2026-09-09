import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Il dominio tecnico di Vercel non deve essere indicizzato come copia del sito:
      // tutto il traffico va sul dominio canonico.
      {
        source: "/:path*",
        has: [{ type: "host", value: "elisa-moratelli.vercel.app" }],
        destination: "https://elisamoratelli.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
