import Heading from '@src/components/Heading';
import Row from '@src/components/Row';
import Section from '@src/components/Section';
import WhyUsCard from '@src/components/WhyUsCard';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function WhyUs() {
    const t = useTranslations('whyUs');

    return (
        <Section
            id='whyus'
            classes='relative background-combined-logo background-colored-logo'
            observe={true}
        >
            <Row classes='pt-32 pb-48'>
                <Heading type={2} classes='text-center mb-12 md:mb-40 text-balance'>
                    {t('title')}
                </Heading>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-16'>
                    <WhyUsCard
                        title={t('experiencedPersonnel.title')}
                        text={t('experiencedPersonnel.text')}
                    />
                    <WhyUsCard title={t('stateOfArt.title')} text={t('stateOfArt.text')} />
                    <WhyUsCard
                        title={t('qualifiedLeadership.title')}
                        text={t('qualifiedLeadership.text')}
                    />
                </div>
            </Row>
        </Section>
    );
}

export default WhyUs;
