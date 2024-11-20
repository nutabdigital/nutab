// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/nutab', // Replace 'repository-name' with the actual name of your GitHub repository
  assetPrefix: '/nutab', // Ensures assets like images are correctly loaded
};

export default nextConfig;
