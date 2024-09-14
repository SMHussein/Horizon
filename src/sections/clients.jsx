import ClientsContents from '@src/components/ClientsContents';
import Heading from '@src/components/Heading';
import Row from '@src/components/Row';
import Section from '@src/components/Section';
import SpinnerBig from '@src/components/SpinnerBig';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

function Clients() {
    const t = useTranslations('ourClints');

    return (
        <Section id='clients' classes=' bg-primary-100 overflow-hidden' observe={true}>
            <Row classes='py-20 background-gray-logo min-h-[1650px] md:min-h-[1172px] lg:min-h-[812px]'>
                <Heading type={2} classes='text-center text-white mb-28'>
                    {t('title')}
                </Heading>
                <div className='relative grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center'>
                    <Suspense fallback={<SpinnerBig />}>
                        <ClientsContents />
                    </Suspense>
                </div>
            </Row>
        </Section>
    );
}

export default Clients;
