/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
