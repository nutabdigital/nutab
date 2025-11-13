// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  
  // Optimize production builds
  swcMinify: true,
  
  // Optimize images (even for static export)
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Experimental optimizations for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Production optimizations
    if (!isServer) {
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
  