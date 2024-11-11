import { createClient } from '@/utils/supabase/server';

let cachedClients = null;
let cachedContacts = null;

export function revalidateCache() {
    cachedClients = null;
    cachedContacts = null;
}

export async function getContacts() {
    if (cachedContacts) return cachedContacts[0];

    const supabase = createClient();
    const { data: contacts, error } = await supabase
        .from('contact')
        .select('location,phoneNumber1,phoneNumber2,email');

    if (error) {
        throw new Error(error.message);
    }

    cachedContacts = contacts;
    console.log('contacts fetched');

    return cachedContacts[0];
}

export async function getClients() {
    if (cachedClients) return cachedClients;

    const supabase = createClient();
    const { data: clients, error } = await supabase.from('clients').select('id,name,image');

    if (error) {
        throw new Error(error.message);
    }

    cachedClients = clients;
    console.log('clients fetched');

    return cachedClients;
}

export async function getMessages() {
    const supabase = createClient();
    let { data: messages, error } = await supabase
        .from('messages')
        .select('id,name,phone,email,message,status');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return messages;
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
