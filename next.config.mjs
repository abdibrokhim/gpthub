/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'iili.io',
              port: '',
            },
        ],
    },
};

export default nextConfig;
