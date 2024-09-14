import AdminForm from '@src/components/AdminForm';
import Heading from '@src/components/Heading';
import { getContacts } from '@utils/services';

async function page() {
    const contacts = await getContacts();

    return (
        <>
            <Heading type={1} classes='mb-20'>
                Contact Info
            </Heading>
            <AdminForm contacts={contacts} />
        </>
    );
}

export default page;
