const dotenv = require('dotenv')

dotenv.config({ path: `./.env.${process.env.ENVIRONMENT}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  pageExtensions: ['ts', 'tsx'],

  experimental: {
    emotion: true,
  },
}

module.exports = nextConfig
