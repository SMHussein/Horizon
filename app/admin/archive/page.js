import ClientImage from '@components/ClientImage';
import Heading from '@components/Heading';
import { getArchivedClients } from '@utils/services';

async function page() {
    const archivedClients = await getArchivedClients();

    return (
        <div>
            <Heading type={1} classes='mb-20'>
                Current Clients
            </Heading>
            <div
                className='mb-20 grid gap-20 items-center justify-items-center'
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}
            >
                {archivedClients.length ? (
                    archivedClients.map((client) => (
                        <ClientImage
                            client={client}
                            key={client.name}
                            name={true}
                            classes='border min-w-[400px] relative'
                            type='archive'
                        />
                    ))
                ) : (
                    <p className='text-xl'>No clients have been archived yet!</p>
                )}
            </div>
        </div>
    );
}

export default page;
