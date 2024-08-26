import '@styles/globals.css';
import Header from '@sections/Header';
import Footer from '@sections/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { anonymousPro } from '@fonts/fonts';
import { getContacts } from '@utils/services';

export const metadata = {
    title: 'Horizon - Premier Security Services',
    description:
        'Horizon provides top-tier security solutions including manpower for security guards, CCTV monitoring, and supervision services. Serving Amman, Jordan with unmatched facility management for all security-related needs.',
    author: 'Horizon Security',
    keywords:
        'security services, security guards, CCTV monitoring, supervision, facility management, security manpower, Horizon Security',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://horizon-sp.com/',
        title: 'Horizon - Premier Security Services in Amman, Jordan',
        description:
            'Horizon offers comprehensive security services, including trained security guards, CCTV monitoring, and supervision in Amman, Jordan. We ensure your safety with expert facility management and security manpower solutions.',
    },
};

async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages();
    const direction = locale === 'ar' ? 'rtl' : '';
    const bodyClasses = `${anonymousPro.className} text-accent-150`;
    const contacts = await getContacts();

    return (
        <NextIntlClientProvider messages={messages}>
            <html lang={locale} dir={direction} className='scroll-smooth'>
                <body className={bodyClasses}>
                    <Header />
                    <main>{children}</main>
                    <Footer contacts={contacts} />
                </body>
            </html>
        </NextIntlClientProvider>
    );
}

export default RootLayout;
