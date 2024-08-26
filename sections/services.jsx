import Heading from '@components/Heading';
import Row from '@components/Row';
import Section from '@components/Section';
import ServicesCards from '@components/ServicesCards';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '@public/assets/icons/logo-orange.svg';

function Services() {
    const t = useTranslations('OurServices');

    return (
        <Section id='services' classes='background-colored-logo p-8' observe={true}>
            <Row classes='py-12 sm:py-20'>
                <Heading type={2} classes='mb-12 text-center'>
                    {t('title')}
                </Heading>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
                    <ServicesCards
                        title={t('securityEquipment.title')}
                        text={t('securityEquipment.text')}
                    />
                    <ServicesCards title={t('siteSecurity.title')} text={t('siteSecurity.text')} />
                    <ServicesCards title={t('armedUnarmed.title')} text={t('armedUnarmed.text')} />
                    <ServicesCards title={t('securityPlan.title')} text={t('securityPlan.text')} />
                    <ServicesCards
                        title={t('securityConsultancy.title')}
                        text={t('securityConsultancy.text')}
                    />
                    <ServicesCards
                        title={t('securityTechnology.title')}
                        text={t('securityTechnology.text')}
                    />
                    <ServicesCards
                        title={t('securityQualified.title')}
                        text={t('securityQualified.text')}
                    />
                    <ServicesCards
                        title={t('securityControl.title')}
                        text={t('securityControl.text')}
                    />
                    <Image
                        src={Logo}
                        width={109}
                        height={125}
                        alt='logo'
                        className='justify-self-center sm:col-span-2 lg:col-span-1'
                    />
                </div>
            </Row>
        </Section>
    );
}

export default Services;
