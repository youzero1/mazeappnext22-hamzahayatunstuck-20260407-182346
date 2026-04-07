/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'lh3.googleusercontent.com', 'graph.facebook.com'],
  },
};

export default nextConfig;
