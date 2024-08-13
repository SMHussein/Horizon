import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '@public/assets/icons/logo-orange.svg';
import CCTV from '@public/assets/images/cctv.jpg';
import Heading from '@components/Heading';
import Button from '@components/Button';
import Section from '@components/Section';
import Row from '@components/Row';

function Hero() {
    const t = useTranslations('Hero');
    const b = useTranslations('AboutUs');

    return (
        <Section id='hero' classes='relative'>
            <Row type='grid-1' classes='z-0'>
                <Image
                    src={CCTV}
                    fill
                    alt='cctv background image'
                    className='object-cover block opacity-30 -z-50'
                />
                <Image src={Logo} width={101} height={117} alt='logo' className='mb-16' />
                <Heading type={1} classes='mb-8'>
                    {t('title')}
                </Heading>
                <p className='text-s mb-16'>{t('subTitle')}</p>
                <Button href='#about'>{b('title')}</Button>
            </Row>
        </Section>
    );
}

export default Hero;
