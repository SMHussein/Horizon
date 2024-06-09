'use client';

import Button from '@components/Button';
import React from 'react';
import Lottie from 'lottie-react';
import notFound from '@public/assets/animations/notFound.json';

const Construction = () => {
    return (
        <div className='relative h-[40rem]'>
            <Lottie
                animationData={notFound}
                loop={true}
                style={{
                    width: '40rem',
                    margin: '0 auto',
                }}
            />
            <Button href='/'>Return Home</Button>
        </div>
    );
};

export default Construction;
