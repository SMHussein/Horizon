import Heading from '@components/Heading';
import { useTranslations } from 'next-intl';
import Logo from '@public/assets/icons/logo-white.svg';
import AboutImage from '@public/assets/images/about-image.webp';
import Image from 'next/image';
import Button from '@components/Button';
import Section from '@components/Section';
import Row from '@components/Row';

function About() {
    const t = useTranslations('AboutUs');
    const s = useTranslations('OurServices');

    return (
        <Section id='about' classes='bg-primary-100 text-white'>
            <Row classes='flex gap-4'>
                <div className='w-full py-12 sm:py-20'>
                    <Heading type={2} classes='mb-12'>
                        {t('title')}
                    </Heading>
                    <p>{t('textFirst')}</p>
                    <p className='mb-16'>{t('textSecond')}</p>
                    <div className='flex gap-12 items-center flex-col sm:flex-row'>
                        <Image src={Logo} width={100} height={115} alt='logo grey' />
                        <Button href='#services' variation='secondary'>
                            {s('title')}
                        </Button>
                    </div>
                </div>
                <div className='w-full hidden lg:block'>
                    <Image
                        src={AboutImage}
                        alt='security guard'
                        className='w-full h-full block object-cover'
                    />
                </div>
            </Row>
        </Section>
    );
}

export default About;
