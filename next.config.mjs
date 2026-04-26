/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["dimasyoga.my.id"],
  devIndicators:
    false |
    {
      position: "bottom-right" | "bottom-left" | "top-right" | "top-left", // defaults to 'bottom-left',
    },
};

export default nextConfig;
