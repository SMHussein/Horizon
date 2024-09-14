import About from '@src/sections/about';
import Clients from '@src/sections/clients';
import ContactUs from '@src/sections/ContactUs';
import Hero from '@src/sections/hero';
import Quality from '@src/sections/quality';
import Roles from '@src/sections/roles';
import Services from '@src/sections/services';
import Training from '@src/sections/training';
import WhyUs from '@src/sections/whyus';
import Header from '@src/sections/Header';
import Footer from '@src/sections/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import SpinnerBig from '@src/components/SpinnerBig';

async function Home({ params: { locale } }) {
    unstable_setRequestLocale(locale);

    return (
        <>
            <Header />
            <main className='min-h-dvh'>
                <Hero />
                <About />
                <Services />
                <Clients />
                <WhyUs />
                <Quality />
                <Roles />
                <Training />
                <ContactUs />
            </main>
            <Suspense fallback={<SpinnerBig />}>
                <Footer />
            </Suspense>
        </>
    );
}

export default Home;
