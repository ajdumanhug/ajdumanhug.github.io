import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX(baseConfig);
export default nextConfig;