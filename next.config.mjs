/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/routes/home",
      },
      {
        source: "/home/:id",
        destination: "/routes/home/:id",
      },
    ];
  },
};

export default nextConfig;
