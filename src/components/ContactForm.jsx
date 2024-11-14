'use client';

import { useForm } from 'react-hook-form';
import Button from './Button';
import { toast } from 'react-hot-toast';
import { useFormState } from 'react-dom';
import { contactUs } from '@utils/actions';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const initialState = {
    message: '',
    error: '',
    id: '',
};

function ContactForm({
    name,
    email,
    phone,
    message,
    send,
    emailValidation,
    phoneValidation,
    requiredValidation,
    phoneLengthValidation,
    successMessage,
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [formState, formAction] = useFormState(contactUs, initialState);

    const onSubmit = async (data) => {
        const { name, email, phone, message } = data;

        if (!name || !email || !phone || !message) return;

        formAction(data);
        sendEmail(name, email, message, phone);
        reset();
    };

    const sendEmail = async (name, email, message, phone) => {
        try {
            const emailParams = {
                name,
                phone,
                email,
                message,
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
        } catch (error) {
            console.error('Failed to send message. Please try again later.', error);
        }
    };

    useEffect(() => {
        if (formState.message) {
            toast.success(successMessage);
        }
    }, [formState.id]);

    return (
        <form action={handleSubmit(onSubmit)} className='space-y-4 flex flex-col gap-4'>
            <div>
                <label htmlFor='name'>{name}</label>
                <input
                    id='name'
                    {...register('name', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.name && <span className='text-red-500 text-sm'>{requiredValidation}</span>}
            </div>
            <div>
                <label htmlFor='phone'>{phone}</label>
                <input
                    id='phone'
                    type='number'
                    {...register('phone', {
                        required: phoneValidation,
                        minLength: {
                            value: 9,
                            message: phoneLengthValidation,
                        },
                    })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.phone && (
                    <span className='text-red-500 text-sm'>{errors.phone.message}</span>
                )}
            </div>

            <div>
                <label htmlFor='email'>{email}</label>
                <input
                    id='email'
                    {...register('email', {
                        required: requiredValidation,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: emailValidation,
                        },
                    })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
                {errors.email && (
                    <span className='text-red-500 text-sm'>{errors.email.message}</span>
                )}
            </div>
            <div>
                <label htmlFor='message'>{message}</label>
                <textarea
                    rows={10}
                    id='message'
                    {...register('message', { required: true })}
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                ></textarea>
                {errors.message && (
                    <span className='text-red-500 text-sm'>{requiredValidation}</span>
                )}
            </div>
            <div>
                <Button className='flex gap-4 items-center justify-center'>{send}</Button>
            </div>
        </form>
    );
}

export default ContactForm;
