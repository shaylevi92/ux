/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  basePath: '/ux',
  assetPrefix: '/ux/',
  webpack: (config) => {
    config.module.rules.push({
      test: /framer-motion/,
      sideEffects: false
    });

    // Add this configuration for Framer Motion
    config.module.rules.push({
      test: /framer-motion/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    return config;
  },
  experimental: {
    turbotrace: {
      enabled: true,
      memoryLimit: 4096
    }
  }
};

module.exports = nextConfig; 
