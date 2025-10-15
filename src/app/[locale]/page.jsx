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
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@navigation';

async function Home({ params: { locale } }) {
  setRequestLocale(locale);

  return (
    <>
      <a className="skip-link" href="#main-content" class="skip-link">
        Skip to main content
      </a>
      <Header />
      <main className="min-h-dvh" id="main-content">
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
      <Footer />
    </>
  );
}

export default Home;
