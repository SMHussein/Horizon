import Heading from '@components/Heading';
import MessageItem from '@components/MessageItem';
import { getMessages } from '@utils/services';

async function page() {
    const messages = await getMessages();

    return (
        <div>
            <Heading type={1} classes='mb-20'>
                Current messages
            </Heading>
            {messages.length ? (
                <div className='mb-6'>
                    {messages.map((message) => (
                        <MessageItem messageObj={message} key={message.id} />
                    ))}
                </div>
            ) : (
                <p className='text-center text-xl'>No messages yet</p>
            )}
        </div>
    );
}

export default page;
