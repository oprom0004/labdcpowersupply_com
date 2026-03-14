/** @type {import('next').NextConfig} */
const nextConfig = {
    // Output: 'export' for static site hosting (Vercel auto-detects App Router, no need to set)
    // Trailing slash for clean URLs on static hosts
    trailingSlash: true,
    // Environment variables
    env: {
        SITE_URL: process.env.SITE_URL || 'https://labdcpowersupply.com',
    },
};

export default nextConfig;
