/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: "/wsu-example-project/public" + process.env.BASE_PATH,
};

export default nextConfig;
