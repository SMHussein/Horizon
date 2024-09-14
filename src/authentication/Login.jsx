'use client';

import { login } from '@utils/actions';
import { useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Button from '@src/components/Button';

const initialState = {
    success: '',
    error: '',
};

export default function LoginForm() {
    const [formState, formAction] = useFormState(login, initialState);

    if (formState?.error) {
        toast.error(formState.error);
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 col-span-3'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
                <div className='flex justify-center mb-6'>
                    <Image src='/assets/icons/logo-orange.svg' width={50} height={50} alt='logo' />
                </div>

                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Admin Login</h2>

                <form action={formAction} className='space-y-4 flex flex-col gap-12'>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        required
                        className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        required
                        className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <Button
                        type='submit'
                        variation='primary'
                        className='w-full py-3 bg-primary-100 text-white font-semibold rounded-md shadow-sm hover:bg-primary-50 transition-colors duration-300 flex gap-4 justify-center'
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}
