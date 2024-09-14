import { useState } from 'react';
import Image from 'next/image';
import NavItems from './NavItems'; // assuming NavItems is a separate component
import { HiMiniXMark } from 'react-icons/hi2';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((cur) => !cur);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                aria-controls='menu-wrapper'
                aria-expanded={isOpen}
                className='block xl:hidden'
            >
                <Image src='/assets/icons/menu.svg' alt='menu' width={24} height={24} />
            </button>

            <div
                className={`fixed inset-0 bg-accent-250 bg-opacity-50 transition-opacity z-40 xl:hidden ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={toggleMenu}
            ></div>

            <nav className='font-bold text-accent-200'>
                <ul
                    id='menu-wrapper'
                    className={`fixed flex flex-col gap-2 top-0 right-0 h-screen w-8/12 bg-white shadow-lg z-50 xl:relative xl:top-auto xl:right-auto xl:h-auto xl:w-full xl:bg-transparent xl:shadow-none xl:flex xl:flex-row xl:gap-8 transition-transform duration-300 ease-in-out transform ${
                        isOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
                    }`}
                >
                    <li>
                        <button
                            className='block px-2 py-4 xl:hidden text-primary-100'
                            onClick={toggleMenu}
                        >
                            <HiMiniXMark className='size-8' />
                            <span className='sr-only text-4xl'>Close menu modal</span>
                        </button>
                    </li>
                    <NavItems toggleMenu={toggleMenu} />
                </ul>
            </nav>
        </>
    );
}

export default Nav;
