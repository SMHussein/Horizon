'use client';

import FooterItem from '@components/FooterItem';
import Heading from '@components/Heading';
import Row from '@components/Row';
import useSlideUpObserver from '@custom/useSlideUpObserver';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Footer() {
    const { ref, slideClasses } = useSlideUpObserver(true);
    const t = useTranslations('contactUs');

    const footerClasses = `background-colored-logo ${slideClasses}`;

    return (
        <footer ref={ref} id='contact' className={footerClasses}>
            <Row classes='py-20'>
                <div className='flex gap-12 justify-items-center items-center mb-12'>
                    <Image
                        src='/assets/icons/logo-orange.svg'
                        width={108}
                        height={125}
                        alt='logo'
                    />
                    <Heading type={2}>{t('title')}</Heading>
                </div>
                <p className='bg-primary-50 text-xl px-12 py-8 text-center mb-16'>
                    {t('location')}
                </p>

                <div className='flex items-start lg:justify-around flex-wrap flex-col lg:flex-row gap-8 lg:gap-4'>
                    <FooterItem
                        alt='location'
                        icon='/assets/icons/location.svg'
                        text1={t('address')}
                    />
                    <FooterItem
                        alt='phone'
                        icon='/assets/icons/phone.svg'
                        text1={t('phoneNumber1')}
                        text2={t('phoneNumber2')}
                    />
                    <FooterItem alt='email' icon='/assets/icons/email.svg' text1={t('email')} />
                </div>
            </Row>
        </footer>
    );
}

export default Footer;
