function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 '>
            <div className='relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh] py-20'>
                <div
                    className='absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer text-4xl'
                    onClick={onClose}
                >
                    &times;
                </div>
                {children}
            </div>
        </div>
    );
}
export default Modal;
