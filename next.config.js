/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGOURI: process.env.MONGOURI,
  },
};

module.exports = nextConfig;
