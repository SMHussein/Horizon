'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { logout } from '@utils/actions';
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2';

const NavLinks = [
    { id: 3, name: 'Contact Info', path: '/admin' },
    { id: 2, name: 'Clients', path: '/admin/clients' },
    { id: 4, name: 'Archive', path: '/admin/archive' },
];

function AdminNav() {
    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <div className='flex flex-col'>
            <nav className=' bg-accent-250 text-white flex-1 pt-3'>
                <ul className='flex flex-col items-center justify-center gap-6'>
                    <li className='mb-12 text-center flex justify-center'>
                        <Link href='/'>
                            <Image
                                src='/assets/icons/logo-orange.svg'
                                width={80}
                                height={100}
                                alt='logo'
                                className='block object-cover'
                            />
                        </Link>
                    </li>
                    {NavLinks.map((link) => {
                        return (
                            <li key={link.id} className='hover:text-orange-300 transition'>
                                <Link
                                    href={link.path}
                                    className={isActive(link.path) ? ' text-orange-300' : ''}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <form action={logout}>
                <Button className='flex justify-center items-center gap-4'>
                    Singout <HiArrowLeftStartOnRectangle className='size-5' />
                </Button>
            </form>
        </div>
    );
}

export default AdminNav;
