'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { revalidateCache } from './services';

export async function updateContacts(currentState, formData) {
    revalidateCache();
    const supabase = createClient();
    const phoneNumber1 = formData.get('phoneNumber1');
    const phoneNumber2 = formData.get('phoneNumber2');
    const email = formData.get('email');
    const location = formData.get('location');

    const { error } = await supabase
        .from('contact')
        .update({ phoneNumber1, phoneNumber2, email, location })
        .eq('id', 1);

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    return { message: 'Contacts were updated!' };
}

export async function contactUs(currentState, formData) {
    const supabase = createClient();
    const { name, phone, email, message } = formData;

    const { data, error } = await supabase
        .from('messages')
        .insert([{ name, phone, email, message, status: 'unread' }])
        .select();

    if (error) {
        return { error: 'Something went wrong, please try again later' };
    }

    const newState = { ...currentState, message: 'Message sent successfully!', id: data[0].id };

    return newState;
}

export async function createEditClient(currentState, formData) {
    revalidateCache();
    const supabase = createClient();
    const name = formData.get('name');
    const image = formData.get('image');
    const editId = formData.get('editId');

    if (!name || !image || (!editId && !image.size)) {
        return { error: 'Fields should not be empty!' };
    }

    const hasImagePath = image?.startsWith?.(process.env.SUPABASE_URL);

    const imageName = `${Math.random()}-${image.name}`.replaceAll('/', '');
    const imagePath = hasImagePath
        ? image
        : `${process.env.SUPABASE_URL}/storage/v1/object/public/clients/${imageName}`;

    // 1. Create/edit client
    let query = supabase.from('clients');

    // A) CREATE
    if (!editId) query = query.insert([{ name, image: imagePath }]);

    // B) EDIT
    if (editId) query = query.update({ name, image: imagePath }).eq('id', editId);

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error('Client could not be created');
    }

    // 2. Upload image
    if (hasImagePath) {
        revalidatePath('/');
        return { success: 'Clients list is updated!' };
    }

    const { data: dataImage, error: storageError } = await supabase.storage
        .from('clients')
        .upload(imageName, image);

    // 3. Delete the client IF there was an error uplaoding image
    if (storageError) {
        await supabase.from('clients').delete().eq('id', data.id);
        console.error(storageError);
        throw new Error('client image could not be uploaded and the client was not created');
    }

    if (data && dataImage) {
        revalidatePath('/', 'layout');
        return { success: 'Clients list is updated!' };
    }
}

export async function deleteClient(currentState, client) {
    revalidateCache();
    const supabase = createClient();
    const { id, image } = client;

    try {
        const { error: deleteError } = await supabase.from('clients').delete().eq('id', id);

        if (deleteError) {
            throw new Error('Client could not be deleted');
        }
    } catch (e) {
        return { error: e.message };
    }

    try {
        const imagePath = image.split('/').pop(); // Assuming 'image' contains the full URL

        const { error: storageError } = await supabase.storage.from('clients').remove([imagePath]);

        if (storageError) {
            throw new Error('Client deleted, but image could not be removed from storage');
        }
    } catch (e) {
        return { error: e.message };
    }

    revalidatePath('/', 'layout');
    return { success: 'Client deleted successfully!' };
}

export async function deleteMessage(currentState, id) {
    const supabase = createClient();

    const { error } = await supabase.from('messages').delete().eq('id', id);

    if (error) {
        return { error: 'Failed to delete message' };
    }

    revalidatePath('/admin/messages');

    return { success: 'Message deleted successfully!' };
}

export async function readMessage(currentState, id) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('messages')
        .update({ status: 'read' })
        .eq('id', id)
        .select();

    if (error) {
        return { error: 'Failed to update message' };
    }

    revalidatePath('/admin/messages');

    return { success: 'Message update successfully!' };
}

export async function archiveClient(currentState, client) {
    revalidateCache();
    const { id } = client;
    // Step 2: Insert the client data into the archive table
    const { error: insertError } = await supabase.from('archive').insert([client]);

    if (insertError) {
        console.error('Error inserting client into archive:', insertError);
        return { error: 'Failed to archive client' };
    }

    // Step 3: Delete the client from the clients table
    const { error: deleteError } = await supabase.from('clients').delete().eq('id', id);

    if (deleteError) {
        console.error('Error deleting client:', deleteError);
        return { error: 'Failed to delete client from clients table' };
    }

    revalidatePath('/', 'layout');
    return { success: 'Client archived successfully' };
}

export async function login(currentState, formData) {
    const supabase = createClient();
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return { error: error.message };
    }

    redirect('/admin');
}

export async function logout(params) {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        redirect('/error');
    }

    redirect('/admin');
}

// info@horizon-sp.com
