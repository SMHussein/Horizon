import { createEditClient } from '@utils/actions';
import { useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';
import Button from './Button';
import Image from 'next/image';

const initialState = {
    success: '',
    error: '',
};

function AddEditClientForm({ clientToEdit, onCloseModal }) {
    console.log(clientToEdit);
    const { id: editId, name, image } = clientToEdit;
    const isEditSession = Boolean(editId);

    const [formState, formAction] = useFormState(createEditClient, initialState);

    if (formState.success) {
        toast.success(formState.success);
        onCloseModal();
    }

    if (formState.error) {
        toast.error(formState.error);
    }

    function handleFormAction(formData) {
        if (formData.get('image')?.size === 0) {
            formData.set('image', image);
        }

        if (formData.get('image') === image && formData.get('name') === name) {
            return toast.error('Nothing changed here, please update values!');
        }

        formAction(formData);
    }

    return (
        <form action={handleFormAction} className='flex flex-col gap-8'>
            <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                    Client Name
                </label>
                <input
                    defaultValue={name}
                    id='name'
                    name='name'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
            </div>
            <div>
                <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                    Client Logo
                </label>
                <input type='file' id='image' name='image' accept='image/*' />
                {editId && image && (
                    <div className=' mt-4'>
                        <Image src={image} alt={name} width={50} height={50} />
                        <p className='block text-xs font-medium text-gray-700'>
                            {name} logo is already included, if you wish to change the logo, please
                            upload image
                        </p>
                    </div>
                )}
            </div>
            <div className='flex gap-4'>
                <Button
                    type='submit'
                    variation='secondary'
                    className='flex gap-2 justify-center items-center'
                >
                    {isEditSession ? 'Edit Client' : 'Add Client'}
                </Button>
            </div>
            <input type='hidden' value={editId} name='editId' />
        </form>
    );
}

export default AddEditClientForm;
