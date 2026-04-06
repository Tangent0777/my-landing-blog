// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  images: {
    domains: ["landingblog.netlify.app"],
    // also allow local public folder images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landingblog.netlify.app",
        pathname: "/images/uploads/**",
      },
    ],
  },
};
 
export default nextConfig;
