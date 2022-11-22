/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BACKEND: process.env.API_BACKEND,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
