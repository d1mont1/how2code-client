/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'edmy-react.hibootstrap.com',
            'res.cloudinary.com',
            'randomuser.me',
            'avatars.githubusercontent.com',
        ],
    },
    experimental: {
        reactRoot: true,
        suppressHydrationWarning: true,
    },
};

export default nextConfig;
