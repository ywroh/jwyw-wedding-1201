/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV !== 'production' ? undefined : 'https://ywroh.github.io/jwyw-wedding-1201/',
};

export default nextConfig;
