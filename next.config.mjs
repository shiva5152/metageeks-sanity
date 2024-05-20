/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "https://img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "https://media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
