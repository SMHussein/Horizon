import FooterContents from '@src/components/Footer';
import { getContacts } from '@utils/services';

async function Footer() {
    const contacts = await getContacts();
    return <FooterContents contacts={contacts} />;
}

export default Footer;
