'use client';

import FooterItem from '@src/components/FooterItem';
import Row from '@src/components/Row';
import useSlideUpObserver from '@src/custom/useSlideUpObserver';

async function Footer({ contacts }) {
    const { ref, slideClasses } = useSlideUpObserver(true);

    const { email, location, phoneNumber1, phoneNumber2 } = contacts;

    const footerClasses = `background-colored-logo ${slideClasses}`;

    return (
        <footer ref={ref} className={footerClasses}>
            <Row classes='py-12 sm:py-20'>
                <div className='flex items-start lg:justify-around flex-wrap flex-col lg:flex-row gap-8 lg:gap-4'>
                    <FooterItem alt='location' icon='/assets/icons/location.svg' text={location} />
                    <FooterItem
                        alt='phone'
                        icon='/assets/icons/phone.svg'
                        phone1={phoneNumber1}
                        phone2={phoneNumber2}
                    />
                    <FooterItem alt='email' icon='/assets/icons/email.svg' email={email} />
                </div>
            </Row>
        </footer>
    );
}

export default Footer;
