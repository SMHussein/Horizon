import { createClient } from '@/utils/supabase/server';

let cachedClients = null;
let clientsCacheExpiry = null;

let cachedContacts = null;
let contactsCacheExpiry = null;

export async function getContacts() {
    const now = new Date();

    // Check if cachedContacts exist and if the cache is still valid
    if (cachedContacts && contactsCacheExpiry && now < contactsCacheExpiry)
        return cachedContacts[0];

    const supabase = createClient();
    const { data: contacts, error } = await supabase
        .from('contact')
        .select('location,phoneNumber1,phoneNumber2,email');

    if (error) {
        throw new Error(error.message);
    }

    // Cache the result and set cache expiry for contacts
    cachedContacts = contacts;
    contactsCacheExpiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Cache for 24 hours

    return cachedContacts[0];
}

export async function getClients() {
    const now = new Date();

    // Check if cachedClients exist and if the cache is still valid
    if (cachedClients && clientsCacheExpiry && now < clientsCacheExpiry) return cachedClients;

    const supabase = createClient();
    const { data: clients, error } = await supabase.from('clients').select('id,name,image');

    if (error) {
        throw new Error(error.message);
    }

    // Cache the result and set cache expiry for clients
    cachedClients = clients;
    clientsCacheExpiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Cache for 24 hours

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
