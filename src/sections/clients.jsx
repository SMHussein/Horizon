import ClientImage from '@src/components/ClientImage';
import Heading from '@src/components/Heading';
import Row from '@src/components/Row';
import Section from '@src/components/Section';
import { useTranslations } from 'next-intl';

function Clients({ clients = {} }) {
    const t = useTranslations('ourClints');

    return (
        <Section id='clients' classes=' bg-primary-100 overflow-hidden' observe={true}>
            <Row classes='py-20 background-gray-logo'>
                <Heading type={2} classes='text-center text-white mb-28'>
                    {t('title')}
                </Heading>
                <div className='grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center	'>
                    {clients.map((client) => (
                        <ClientImage client={client} key={client.name} />
                    ))}
                </div>
            </Row>
        </Section>
    );
}

export default Clients;
