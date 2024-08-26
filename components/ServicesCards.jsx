import Heading from './Heading';

function ServicesCards({ text, title }) {
    return (
        <div className='flex flex-col gap-6'>
            <Heading
                type={3}
                classes='bg-primary-100 text-white py-2 px-4 font-normal text-lg capitalize '
            >
                {title}
            </Heading>
            <p>{text}</p>
        </div>
    );
}

export default ServicesCards;
