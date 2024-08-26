'use client';

import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import Button from './Button';
import { updateContacts } from '@utils/actions';
import toast from 'react-hot-toast';

function Form({ contacts }) {
    const { email, location, phoneNumber1, phoneNumber2 } = contacts;

    const initialState = {
        message: '',
    };
    const [formState, formAction] = useFormState(updateContacts, initialState);

    const {
        register,
        formState: { errors },
    } = useForm({
        defaultValues: { email, location, phoneNumber1, phoneNumber2 },
    });

    formState.message && toast.success(formState.message);

    return (
        <form action={formAction} className='flex flex-col gap-8'>
            <div>
                <label htmlFor='phoneNumber1' className='block text-sm font-medium text-gray-700'>
                    Phone Number 1
                </label>
                <input
                    id='phoneNumber1'
                    {...register('phoneNumber1', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.phoneNumber1 && (
                    <span className='text-red-500 text-sm'>This field is required</span>
                )}
            </div>
            <div>
                <label htmlFor='phoneNumber2' className='block text-sm font-medium text-gray-700'>
                    Phone Number 2
                </label>
                <input
                    id='phoneNumber2'
                    {...register('phoneNumber2', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.phoneNumber2 && (
                    <span className='text-red-500 text-sm'>This field is required</span>
                )}
            </div>

            <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email
                </label>
                <input
                    id='email'
                    {...register('email', {
                        required: 'Email is required',
                    })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.email && (
                    <span className='text-red-500 text-sm'>{errors.email.message}</span>
                )}
            </div>
            <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                    Address
                </label>
                <textarea
                    rows={2}
                    id='location'
                    {...register('location', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                ></textarea>
                {errors.location && (
                    <span className='text-red-500 text-sm'>This field is required</span>
                )}
            </div>
            <div>
                <Button
                    type='submit'
                    variation='secondary'
                    className='flex gap-2 justify-center items-center'
                >
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default Form;
