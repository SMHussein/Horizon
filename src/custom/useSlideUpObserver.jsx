'use client';

import { useEffect, useRef } from 'react';

function useSlideUpObserver(observe = false) {
    if (!observe) return;
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('animate-slide-up');
                    observer.unobserve(ref.current); // Stop observing after the first animation
                }
            },
            {
                threshold: 0.1, // Adjust this threshold as needed
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const slideClasses = `opacity-0 transform translate-y-8 transition-opacity duration-700 ease-out`;

    return { ref, slideClasses };
}

export default useSlideUpObserver;
