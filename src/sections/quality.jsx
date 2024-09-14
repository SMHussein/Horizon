import Heading from '@src/components/Heading';
import Row from '@src/components/Row';
import Section from '@src/components/Section';
import { getItems } from '@utils/helpers';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Quality() {
    const t = useTranslations('qualityStandards');

    const qualitiesArray = getItems(t, 'qualityStandards.qualities');

    return (
        <Section id='quality' classes='background-colored-logo' observe={true}>
            <Row classes='py-12 sm:py-20 lg:pb-32'>
                <Heading type={2} classes='text-center mb-8'>
                    {t('title')}
                </Heading>
                <Heading type={3} classes='text-center text-primary-100 text-2xl text-balance mb-6'>
                    {t('subTitle')}
                </Heading>
                <div className='max-w-[100%] md:max-w-[60%] mx-auto relative'>
                    <ul className='bg-neutral-400/60 text-center text-xl flex flex-col gap-4 py-8 px-4 font-bold'>
                        {qualitiesArray.map((quality) => (
                            <li key={quality}>{quality}</li>
                        ))}
                    </ul>
                    <div className='hidden lg:block'>
                        <Image
                            src='/assets/icons/hand.svg'
                            alt='security check'
                            width={315}
                            height={307}
                            className=' absolute bottom-0 left-0 translate-y-24 -translate-x-72'
                        />
                        <Image
                            src='/assets/icons/star.svg'
                            alt='badge icon'
                            className='block absolute top-0 right-0 -translate-y-5 translate-x-8 md:translate-x-12'
                            width={133}
                            height={145}
                        />
                    </div>
                </div>
            </Row>
        </Section>
    );
}

export default Quality;
