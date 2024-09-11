/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd33r43rvwo508f.cloudfront.net',
                port: '',
                pathname: '/**',
            },
            {
                hostname: "media.mapgenie.io",
                protocol: 'https',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
