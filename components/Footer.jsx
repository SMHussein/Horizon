'use client';

import { HiBuildingOffice, HiMiniEnvelope, HiMiniPhone } from 'react-icons/hi2';

function Footer() {
    return (
        <footer className=' w-full border-t-2 mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 py-8 md:justify-items-center'>
            <div>
                <h3 className='desc text-center'>
                    <span className='flex justify-center gap-4 items-center  mb-2 md:mb-4	'>
                        <HiMiniEnvelope /> Email
                    </span>
                    <span className='text-sm'>site.operation@horizon-sp.com</span>
                </h3>
            </div>
            <div>
                <h3 className='desc text-center'>
                    <span className='flex justify-center gap-4 items-center mb-2 md:mb-4	'>
                        <HiBuildingOffice /> Location
                    </span>
                    <span className='text-sm'>
                        Amman, Alsha’b Roundabout, King Abdullah II, Mena complex 357, 3 floor
                    </span>
                </h3>
            </div>
            <div>
                <h3 className='desc text-center'>
                    <span className='flex justify-center gap-4 items-center mb-2 md:mb-4	'>
                        <HiMiniPhone /> Phone
                    </span>
                    <span className='block text-sm'>+962 06 2266455</span>
                    <span className='text-sm'>+962 07 78490212</span>
                </h3>
            </div>
        </footer>
    );
}

export default Footer;
