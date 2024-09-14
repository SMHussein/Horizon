import ClientImage from '@src/components/ClientImage';
import { getClients } from '@utils/services';

async function ClientsContents() {
    const clients = await getClients();

    return (
        <>
            {clients.map((client) => (
                <ClientImage client={client} key={client.name} />
            ))}
        </>
    );
}

export default ClientsContents;
