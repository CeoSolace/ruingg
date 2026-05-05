/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable the new App Router and React Server Components
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;