'use client';

import useSlideUpObserver from '@custom/useSlideUpObserver';

function Section({ children, classes, id, observe = false }) {
    let ref = null;
    let slideClasses = '';

    if (observe) {
        const data = useSlideUpObserver(observe);
        ref = data.ref;
        slideClasses = data.slideClasses;
    }

    const classNames = `${classes} ${slideClasses}`;

    return (
        <section ref={ref} className={classNames} id={id}>
            {children}
        </section>
    );
}

export default Section;
