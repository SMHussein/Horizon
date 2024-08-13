import { HiMiniXMark } from 'react-icons/hi2';
import { useEffect, useRef } from 'react';

function Modal({ openModal, closeModal, children, id, className }) {
    const ref = useRef();

    function handleModalDropClick(e) {
        if (ref.current === e.target) {
            console.log(e.target);
            closeModal();
        }
    }

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
            document.addEventListener('click', handleModalDropClick);
        } else {
            ref.current?.close();
            document.removeEventListener('click', handleModalDropClick);
        }

        return () => {
            document.removeEventListener('click', handleModalDropClick);
        };
    }, [openModal]);

    return (
        <dialog ref={ref} onCancel={closeModal} id={id} className={className}>
            <button className='block px-8 py-4' onClick={closeModal}>
                <HiMiniXMark className='size-6' />
                <span className='sr-only text-4xl'>Close menu modal</span>
            </button>
            {children}
        </dialog>
    );
}

export default Modal;
