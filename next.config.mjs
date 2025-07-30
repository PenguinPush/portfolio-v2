/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio-v2',
  assetPrefix: '/portfolio-v2/'
};

export default nextConfig;
