/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Next.js default image optimization is not supported in static exports automatically
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
