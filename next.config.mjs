/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export for Cloudflare Pages
    output: 'export',
    // Trailing slash for clean URLs on static hosts
    trailingSlash: true,
    // Environment variables
    env: {
        SITE_URL: process.env.SITE_URL || 'https://labdcpowersupply.com',
    },
};

export default nextConfig;
