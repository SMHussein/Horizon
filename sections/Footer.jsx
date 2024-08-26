'use client';

import FooterItem from '@components/FooterItem';
import Heading from '@components/Heading';
import Row from '@components/Row';
import useSlideUpObserver from '@custom/useSlideUpObserver';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Footer({ contacts }) {
    const { ref, slideClasses } = useSlideUpObserver(true);
    const t = useTranslations('contactUs');

    const { email, location, phoneNumber1, phoneNumber2 } = contacts;

    const footerClasses = `background-colored-logo ${slideClasses}`;

    return (
        <footer ref={ref} id='contact' className={footerClasses}>
            <Row classes='py-12 sm:py-20'>
                <div className='flex flex-col sm:flex-row gap-12 justify-items-center items-center mb-12'>
                    <Image
                        src='/assets/icons/logo-orange.svg'
                        width={108}
                        height={125}
                        alt='logo'
                    />
                    <Heading type={2} classes='text-center'>
                        {t('title')}
                    </Heading>
                </div>

                <p className='bg-primary-100 text-xl text-white px-12 py-8 text-center mb-16'>
                    {t('location')}
                </p>

                <div className='flex items-start lg:justify-around flex-wrap flex-col lg:flex-row gap-8 lg:gap-4'>
                    <FooterItem alt='location' icon='/assets/icons/location.svg' text1={location} />
                    <FooterItem
                        alt='phone'
                        icon='/assets/icons/phone.svg'
                        text1={phoneNumber1}
                        text2={phoneNumber2}
                    />
                    <FooterItem alt='email' icon='/assets/icons/email.svg' text1={email} />
                </div>
            </Row>
        </footer>
    );
}

export default Footer;
