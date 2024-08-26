import { createClient } from '@/utils/supabase/server';

export async function getContacts() {
    const supabase = createClient();
    let { data: contacts, error } = await supabase
        .from('contact')
        .select('location,phoneNumber1,phoneNumber2,email');
    if (error) {
        throw new Error(error.message);
    }

    return contacts[0];
}

export async function getClients() {
    const supabase = createClient();
    let { data: clients, error } = await supabase.from('clients').select('id,name,image');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return clients;
}

export async function getArchivedClients() {
    const supabase = createClient();
    let { data: clients, error } = await supabase.from('archive').select('id,name,image');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return clients;
}
