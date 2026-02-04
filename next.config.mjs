// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // Performance optimizations
  compress: true,

  // Optimize images (even for static export)
  images: {
    unoptimized: true, // Required for static export
  },

  // Turbopack config (empty to silence dev warning - we use webpack for builds)
  turbopack: {},

  // Note: Cache headers are configured in public/_headers file for static hosting
  // (Netlify, Cloudflare Pages, etc.) since next.config.mjs headers don't work with output: 'export'

  // Webpack optimizations - only apply in production to avoid HMR issues
  // Note: Using --webpack flag in build script since we have custom webpack config
  webpack: (config, { isServer, dev }) => {
    // Only apply custom optimization in production builds
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Separate vendor chunks for better caching
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
            },
            // Separate framer-motion into its own chunk
            framer: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer',
              priority: 20,
            },
            // Separate three.js into its own chunk (already lazy loaded)
            three: {
              test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
              name: 'three',
              priority: 20,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
  