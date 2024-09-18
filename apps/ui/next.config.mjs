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
            },
            {
                hostname: "www.ign.com",
                protocol: 'https',
                port: '',
                pathname: '/**',
            },
            {
                hostname: "lh3.googleusercontent.com",
                protocol: 'https',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
