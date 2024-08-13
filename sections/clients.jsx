import Heading from '@components/Heading';
import Row from '@components/Row';
import Section from '@components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Clients() {
    const t = useTranslations('ourClints');

    return (
        <Section id='clients' classes=' bg-primary-100 overflow-hidden' observe={true}>
            <Row classes='py-20 background-gray-logo'>
                <Heading type={2} classes='text-center text-white mb-28'>
                    {t('title')}
                </Heading>
                <div className='grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center	'>
                    <Image
                        src='/assets/images/ayass.webp'
                        width={224}
                        height={224}
                        alt='Ayass Hotel'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/crown.webp'
                        width={224}
                        height={224}
                        alt='Crown Prince Fowndation'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/carr.webp'
                        width={224}
                        height={224}
                        alt='Carrfour'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/amc.webp'
                        width={224}
                        height={224}
                        alt='Abdali Medical Center'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/mov.webp'
                        width={224}
                        height={224}
                        alt='Movenpick'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/dna.webp'
                        width={224}
                        height={224}
                        alt='DNA Store'
                        className='rounded-full z-10'
                    />
                    <Image
                        src='/assets/images/siraj.webp'
                        width={224}
                        height={224}
                        alt='Siraj Hotel'
                        className='rounded-full z-10'
                    />{' '}
                    <Image
                        src='/assets/images/village.webp'
                        width={224}
                        height={224}
                        alt='Swefieh Village'
                        className='rounded-full z-10'
                    />
                </div>
            </Row>
        </Section>
    );
}

export default Clients;
