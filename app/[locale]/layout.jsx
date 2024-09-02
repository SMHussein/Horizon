import '@styles/globals.css';
import Header from '@sections/Header';
import Footer from '@sections/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { anonymousPro } from '@fonts/fonts';
import { getContacts } from '@utils/services';
import { getMetadata } from '@utils/helpers';

export async function generateMetadata({ params }) {
    const { locale } = params;
    return getMetadata(locale);
}

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
