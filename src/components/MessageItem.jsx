import MessagesActions from './MessagesActions';

function MessageItem({ messageObj }) {
    const { name, email, phone, message, status, id } = messageObj;

    const isRead = status === 'read';
    const statusClasses = !isRead ? 'text-red-500' : 'text-green-600';

    return (
        <div className='flex justify-between gap-16 mb-16  border-b-2 pb-4'>
            <div>
                <p className='text-sm font-semibold'>{name}</p>
                <p className='text-sm text-gray-500'>{email}</p>
                <p className='text-sm text-gray-500'>{phone}</p>
                <p className='mt-2 text-sm'>{message}</p>
                <p className={`${statusClasses} bold uppercase mt-2`}>{status}</p>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <MessagesActions id={id} isRead={isRead} />
            </div>
        </div>
    );
}

export default MessageItem;
