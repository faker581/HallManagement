/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables React's Strict Mode
    swcMinify: true,        // Enables SWC-based minification for faster builds
    // If you're using custom webpack configurations:
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Modify the config object as needed
      return config;
    },
    // If using environment variables:
    env: {
      CUSTOM_API_URL: process.env.CUSTOM_API_URL,
    },
    // Other Next.js options
    // future: {
    //   webpack5: true,    // If you're using Webpack 5
    // },
  };
  
  export default nextConfig;
  