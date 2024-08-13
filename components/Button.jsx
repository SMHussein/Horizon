import Link from 'next/link';

function Button({ href, type, variation = 'primary', children, isLoading, active }) {
    let classes = 'text-center transition-all min-w-[200px] inline-block py-2 ';

    if (variation === 'primary') {
        classes += ' bg-primary-50 text-white hover:bg-primary-100';
    }

    if (variation === 'secondary') {
        classes += ' bg-accent-50 hover:bg-accent-100';
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
            </button>
        );

    return element;
}

export default Button;
