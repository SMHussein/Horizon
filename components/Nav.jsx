'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { usePathname } from 'next/navigation';

function Nav() {
    const pathname = usePathname();

    return (
        <nav className='flex-between'>
            <Link href='/' className='flex gap-2 flex-center w-[150px] h-[50px]'>
                <Image
                    src='/assets/images/logo.png'
                    alt='Horizon Logo'
                    width={150}
                    height={50}
                    className='object-contain'
                />
            </Link>
            <div className='flex gap-4'>
                <Button href='/contact' variation='outline' active={pathname === '/contact'}>
                    Contact
                </Button>
            </div>
        </nav>
    );
}

export default Nav;
