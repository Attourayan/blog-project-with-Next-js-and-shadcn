import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // Replace with your new domain
        port: "",
        pathname: "/**", // Matches all paths under this domain
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com", // Replace with your new domain
        port: "",
        pathname: "/**", // Matches all paths under this domain
      }
    ],
  },
};

export default nextConfig;
