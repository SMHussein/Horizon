'use client';

import About from '@sections/about';
import Clients from '@sections/clients';
import Hero from '@sections/hero';
import Quality from '@sections/quality';
import Roles from '@sections/roles';
import Services from '@sections/services';
import Training from '@sections/training';
import WhyUs from '@sections/whyus';

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Clients />
            <WhyUs />
            <Quality />
            <Roles />
            <Training />
        </>
    );
}

export default Home;
