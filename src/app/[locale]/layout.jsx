import '@styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { anonymousPro } from '@fonts/fonts';
import { getMetadata } from '@utils/helpers';
import { Toaster } from 'react-hot-toast';
import { routing } from '@src/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = params;
    return getMetadata(locale);
}

async function RootLayout({ children, params: { locale } }) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
    const direction = locale === 'ar' ? 'rtl' : '';
    const bodyClasses = `${anonymousPro.className} text-accent-150`;

    return (
        <html lang={locale} dir={direction} className='scroll-smooth'>
            <body className={bodyClasses}>
                <Toaster
                    position='top-center'
                    gutter={12}
                    containerStyle={{ margin: '8px' }}
                    toastOptions={{
                        success: {
                            duration: 5000,
                        },
                        error: {
                            duration: 5000,
                        },
                        style: {
                            fontSize: '16px',
                            maxWidth: '500px',
                            padding: '16px 24px',
                            backgroundColor: 'white',
                            color: 'color-grey-700',
                            textAlign: 'center',
                            lineHeight: '1.5',
                        },
                    }}
                />
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
