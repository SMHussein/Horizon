'use client';

import Button from '@src/components/Button';
import Error from 'next/error';

export default function NotFound() {
    return (
        <html lang='en'>
            <body className='flex justify-center items-center gap-12'>
                <Error statusCode={404} />
                <Button className='px-6' href='/'>
                    Back to Home
                </Button>
            </body>
        </html>
    );
}
