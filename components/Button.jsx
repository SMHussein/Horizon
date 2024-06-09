import Link from 'next/link';
import SpinnerMini from './SpinnerMini';

function Button({ href, type, variation = 'primary', children, isLoading, active }) {
    let classes = 'text-center  transition-all mx-auto ';

    if (variation === 'primary') {
        classes +=
            'bg-orange-600 rounded-full px-8 py-3 text-white text-xl font-bold flex justify-center gap-2 items-center w-52 hover:bg-orange-700 ';
    }

    if (variation === 'outline') {
        classes += 'text-gray-600 hover:text-orange-600 ';
    }

    if (active) {
        classes += 'active';
    }

    let element = null;

    if (href)
        element = (
            <Link className={classes} href={href}>
                {children}
            </Link>
        );

    if (!href)
        element = (
            <button type={type} className={classes} disabled={isLoading}>
                {children}
                {isLoading && <SpinnerMini />}
            </button>
        );

    return <div className='text-center mt-8'>{element}</div>;
}

export default Button;
