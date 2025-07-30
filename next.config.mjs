/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-v2/' : ''
};

export default nextConfig;
