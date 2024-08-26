import Image from 'next/image';

function FooterItem({ icon, alt, text1, text2 }) {
    return (
        <div className='flex gap-4 justify-center items-center text-xl font-bold'>
            <Image src={icon} alt={alt} width={50} height={50} />
            <p className='flex flex-col md:flex-row gap-0 md:gap-8'>
                <span>&#x200E;{text1}</span>
                {text2 && <span>&#x200E;{text2}</span>}
            </p>
        </div>
    );
}

export default FooterItem;
