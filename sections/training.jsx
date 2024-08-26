import Heading from '@components/Heading';
import Row from '@components/Row';
import Section from '@components/Section';
import { getItems } from '@utils/helpers';
import { useTranslations } from 'next-intl';

function Training() {
    const t = useTranslations('training');
    const titledList = getItems(t, 'training.trainingsList').map((item) => item.split(':'));

    return (
        <Section id='training' classes='background-colored-logo' observe={true}>
            <Row classes='py-12 sm:py-20'>
                <Heading type={2} classes='text-center mb-12'>
                    {t('title')}
                </Heading>
                <Heading type={3} classes='text-primary-100 text-center text-balance mb-6'>
                    {t('subTitle')}
                </Heading>
                <ul className='list-decimal bg-neutral-400/60 px-12 py-8 flex flex-col gap-4 mb-6'>
                    {titledList.map((item) => (
                        <li key={item}>
                            <span className='font-bold'>{item[0]}:</span>
                            <span>{item[1]}</span>
                        </li>
                    ))}
                </ul>
                <p className='text-primary-100 text-xl font-bold text-center text-balance'>
                    {t('trainingsNote')}
                </p>
            </Row>
        </Section>
    );
}

export default Training;
