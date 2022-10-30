/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BACKEND: process.env.API_BACKEND,
  },
  images: {
    domains: ['hirejob-app-backend-production.up.railway.app'],
  },
}



module.exports = nextConfig