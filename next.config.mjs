/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lf7b8jav2pkfxc9t.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
