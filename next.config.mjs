/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  output: 'export',
  basePath: '/Ritik_pandey_Portfolio',

  // Image optimization configuration (unoptimized required for static export)
  images: {
    unoptimized: true,
  },

  // Compiler options for better performance
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Note: Turbopack config removed for compatibility with this Next.js version
};

export default nextConfig;
