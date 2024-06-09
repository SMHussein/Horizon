'use client';

import React from 'react';
import Lottie from 'lottie-react';
import construction from '@public/assets/animations/construction.json';

const Construction = () => {
    return (
        <div className='relative left-10 -top-4 h-[32rem]'>
            <Lottie animationData={construction} loop={true} />
        </div>
    );
};

export default Construction;
