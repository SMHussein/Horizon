import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

const MenusContext = createContext();

function Menus({ children }) {
    const [openId, setOpenId] = useState('');
    const [position, setPosition] = useState(null);

    const close = () => setOpenId('');
    const open = setOpenId;

    return (
        <MenusContext.Provider value={{ openId, close, open, position, setPosition }}>
            {children}
        </MenusContext.Provider>
    );
}

function Toggle({ id }) {
    const { openId, close, open, setPosition } = useContext(MenusContext);

    function handleClick(e) {
        e.stopPropagation();

        const rect = e.target.closest('button').getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8,
        });

        openId === '' || openId !== id ? open(id) : close();
    }

    return (
        <button
            onClick={handleClick}
            className='bg-none border-none p-1 rounded-sm transform translate-x-2 transition-all duration-200 hover:bg-gray-200'
        >
            <HiEllipsisVertical className='w-6 h-6 text-gray-700' />
        </button>
    );
}

function List({ id, children }) {
    const { openId, position, close } = useContext(MenusContext);
    const ref = useOutsideClick(close, false);

    if (openId !== id) return null;

    return createPortal(
        <ul
            ref={ref}
            className='fixed bg-white shadow-md rounded-md  z-20'
            style={{ right: `${position?.x}px`, top: `${position?.y}px` }}
        >
            {children}
        </ul>,
        document.body
    );
}

function Button({ children, icon, onClick }) {
    const { close } = useContext(MenusContext);

    function handleClick() {
        onClick?.();
        close();
    }

    return (
        <li>
            <button
                onClick={handleClick}
                className='w-full text-left bg-none border-none p-3 text-sm transition-all duration-200 flex items-center gap-4 hover:bg-gray-100'
            >
                {icon}
                <span>{children}</span>
            </button>
        </li>
    );
}

Menus.Menu = ({ children }) => <div className='flex items-center justify-end'>{children}</div>;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
