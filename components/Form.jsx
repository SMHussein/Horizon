'use client';

import { useForm } from 'react-hook-form';
import Button from './Button';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function Form() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        const { name, phone, message, email } = data;

        if (!name || !phone || !message || !email) return;

        setIsLoading(true);
        try {
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    phone,
                    message,
                    email,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            if (!res.ok) throw new Error();

            toast.success(
                'Your message has been sent successfully. We will get back to you as soon as possible'
            );
            reset();
            router.push('/');
        } catch (error) {
            toast.error('Something went wrong! Please try again later');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                    Name
                </label>
                <input
                    id='name'
                    {...register('name', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.name && (
                    <span className='text-red-500 text-sm'>This field is required</span>
                )}
            </div>
            <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                    Phone Number
                </label>
                <input
                    id='phone'
                    type='number'
                    {...register('phone', {
                        required: 'Phone number is required',
                        minLength: {
                            value: 10,
                            message: 'Phone number must be at least 10 digits',
                        },
                    })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.phone && (
                    <span className='text-red-500 text-sm'>{errors.phone.message}</span>
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
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.email && (
                    <span className='text-red-500 text-sm'>{errors.email.message}</span>
                )}
            </div>
            <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                    Question or Inquiry
                </label>
                <textarea
                    rows={10}
                    id='message'
                    {...register('message', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                ></textarea>
                {errors.message && (
                    <span className='text-red-500 text-sm'>This field is required</span>
                )}
            </div>
            <div>
                <Button type='submit' isLoading={isLoading}>
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default Form;
