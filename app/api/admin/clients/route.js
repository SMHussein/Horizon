import { createEditClient } from '@utils/services';
export const POST = async (req) => {
    try {
        // Parse the JSON body once
        const { params } = await req.json();
        // Update contacts using the parsed data

        await createEditClient(params);

        return new Response('New client is added!', { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(`Failed to add client! ${error.message}`, { status: 500 });
    }
};

export const PATCH = async (req) => {
    try {
        // Parse the JSON body once
        const { params } = await req.json();
        // Update contacts using the parsed data
        await createEditClient(params);

        return new Response('Clients were updated!', { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(`Failed to update clients! ${error.message}`, { status: 500 });
    }
};
