/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export for Cloudflare Pages
    output: 'export',
    // Output to 'out' directory (CF Pages default publish dir)
    distDir: 'out',
    // Trailing slash for clean URLs on static hosts
    trailingSlash: true,
    // Environment variables
    env: {
        SITE_URL: process.env.SITE_URL || 'https://labdcpowersupply.com',
    },
};

export default nextConfig;
