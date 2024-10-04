import NextBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "media.mapgenie.io",
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
    reactStrictMode: true,
    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };
        return config;
    },
};

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
