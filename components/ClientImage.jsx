import Image from 'next/image';
import AdminClientsMenu from './AdminClientsMenu';

function ClientImage({ client, name = false, classes, type = 'clients' }) {
    const className = `flex flex-col flex-wrap justify-center items-center gap-8 p-6 ${classes}`;
    return (
        <div className={className}>
            {name && (
                <div className='flex justify-between gap-8 z-20 w-full text-left'>
                    <p className='text-xl text-center'>{client.name}</p>
                    <div className=' absolute top-3 right-3'>
                        {type === 'clients' && <AdminClientsMenu client={client} type={type} />}
                    </div>
                </div>
            )}
            <Image
                src={client.image}
                width={224}
                height={224}
                alt={client.name}
                className='rounded-full z-10'
            />
        </div>
    );
}

export default ClientImage;
