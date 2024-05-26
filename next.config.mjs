/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
        },
    ],
    experimental: {
        reactRoot: true,
        suppressHydrationWarning: true,
    },
};

export default nextConfig;
