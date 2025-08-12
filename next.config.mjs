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
    // Ensure favicon is properly served
    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
