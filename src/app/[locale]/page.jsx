import About from '@src/sections/about';
import Clients from '@src/sections/clients';
import ContactUs from '@src/sections/ContactUs';
import Hero from '@src/sections/hero';
import Quality from '@src/sections/quality';
import Roles from '@src/sections/roles';
import Services from '@src/sections/services';
import Training from '@src/sections/training';
import WhyUs from '@src/sections/whyus';
import { getClients } from '@utils/services';
import { unstable_setRequestLocale } from 'next-intl/server';

async function Home({ params: { locale } }) {
    const clients = await getClients();

    unstable_setRequestLocale(locale);

    return (
        <>
            <Hero />
            <About />
            <Services />
            <Clients clients={clients} />
            <WhyUs />
            <Quality />
            <Roles />
            <Training />
            <ContactUs />
        </>
    );
}

export default Home;
