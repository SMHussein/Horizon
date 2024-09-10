'use client';

import ContactForm from '@components/ContactForm';
import Heading from '@components/Heading';
import Row from '@components/Row';
import Section from '@components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function ContactUs() {
    const t = useTranslations('contactUs');
    const v = useTranslations('validation');

    return (
        <Section observe={true} id='contact' classes='background-colored-logo'>
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

                <p className='text-xl px-12 py-4 text-center'>{t('location')}</p>
                <p className='text-xl px-12 text-center'>{t('sendUs')}</p>
                <ContactForm
                    name={t('name')}
                    phone={t('phone')}
                    email={t('email')}
                    message={t('message')}
                    send={t('send')}
                    successMessage={t('success')}
                    emailValidation={v('email')}
                    phoneValidation={v('phone')}
                    requiredValidation={v('required')}
                    phoneLengthValidation={v('phoneLength')}
                />
            </Row>
        </Section>
    );
}

export default ContactUs;
