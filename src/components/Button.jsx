'use client';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

function Button({ href, type, variation = 'primary', children, className, onClick }) {
    let classes = `text-center transition-all min-w-[150px] inline-block py-2 px-4 ${className}`;

    if (variation === 'primary') {
        classes += ' bg-primary-100 text-white hover:bg-primary-50';
    }

    if (variation === 'secondary') {
        classes += ' bg-accent-50 hover:bg-accent-100 text-accent-150';
    }

    let element = null;

    if (href)
        element = (
            <Link className={classes} href={href}>
                {children}
            </Link>
        );

    const { pending } = useFormStatus();

    if (!href)
        element = (
            <button
                type={type}
                className={classes}
                disabled={pending}
                aria-disabled={pending}
                onClick={onClick}
            >
                {children}
                {pending && <SpinnerMini />}
            </button>
        );

    return element;
}

export default Button;
