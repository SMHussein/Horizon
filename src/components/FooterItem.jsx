import Image from 'next/image';

function FooterItem({ icon, alt, text, phone1, phone2, email }) {
    return (
        <div className='flex gap-4 justify-center items-center text-xl font-bold'>
            <Image src={icon} alt={alt} width={50} height={50} />
            <p className='flex flex-col md:flex-row gap-0 md:gap-8'>
                {text && <span>&#x200E;{text}</span>}
                {phone1 && <a href={`tel:${phone1}`}>&#x200E;{phone1}</a>}
                {phone2 && <a href={`tel:${phone2}`}>&#x200E;{phone2}</a>}
                {email && <a href={`mailto:${email}`}>&#x200E;{email}</a>}
            </p>
        </div>
    );
}

export default FooterItem;
