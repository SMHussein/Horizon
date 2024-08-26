import { lastica } from '@fonts/fonts';

function Heading({ children, type, classes }) {
    //${lastica.className}
    let classNames = 'text-4xl font-bold uppercase ';

    if (type === 1) {
        classNames += ` sm:text-6xl ${lastica.className}`;
    }

    if (type === 2) {
        classNames += ` text-3xl sm:text-5xl ${lastica.className}`;
    }

    if (type > 2) {
        classNames += ' text-xl';
    }

    classNames += ` ${classes}`;
    const Tag = `h${type}`;

    return <Tag className={classNames}>{children}</Tag>;
}
export default Heading;
