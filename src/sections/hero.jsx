import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '@public/assets/icons/logo-orange.svg';
import CCTV from '@public/assets/images/cctv.jpg';
import Heading from '@src/components/Heading';
import Button from '@src/components/Button';
import Section from '@src/components/Section';
import Row from '@src/components/Row';

function Hero() {
    const t = useTranslations('Hero');

    return (
        <Section id='hero' classes='relative'>
            <Row type='grid-1' classes='z-0'>
                <Image
                    src={CCTV}
                    fill
                    alt='CCTV surveillance services in Jordan by Horizon Security'
                    className='object-cover block opacity-30 -z-50'
                    loading='eager'
                />
                <Image
                    src={Logo}
                    width={101}
                    height={117}
                    alt='logo'
                    className='mb-16'
                    loading='eager'
                />
                <Heading type={1} classes='mb-8'>
                    {t('title')}
                </Heading>
                <p className='text-s mb-16'>{t('subTitle')}</p>
                <Button href='#contact'>{t('btnText')}</Button>
            </Row>
        </Section>
    );
}

export default Hero;
