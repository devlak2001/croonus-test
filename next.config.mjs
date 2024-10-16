/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.staging.croonus.com",
        pathname: "/croonus-uploads/products_gallery/file/**",
      },
      {
        protocol: "http",
        hostname: "api.staging.croonus.com",
        pathname: "/croonus-uploads/b2c/banners/**", // Add this line for banners
      },
    ],
  },
};

export default nextConfig;
