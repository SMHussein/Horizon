import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-16 h-16 rounded-full bg-[radial-gradient(farthest-side,_var(--color-brand-600)_94%,_transparent)_top/10px_10px_no-repeat,_conic-gradient(transparent_30%,_var(--color-brand-600))] mask-[radial-gradient(farthest-side,_transparent_calc(100%-10px),_black_0)] animate-spin-custom'></div>
        </div>
    );
};

export default Spinner;
