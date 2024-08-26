import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'piywqxfqqrlzyymsagou.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/clients/**',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
