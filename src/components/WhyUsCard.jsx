import Heading from './Heading';

function WhyUsCard({ title, text }) {
    return (
        <div className='flex gap-1 flex-col bg-primary-100 justify-center text-center pt-4 pb-12 px-2'>
            <Heading type={3} classes='text-white'>
                {title}
            </Heading>
            <p className='text-white'>{text}</p>
        </div>
    );
}

export default WhyUsCard;
