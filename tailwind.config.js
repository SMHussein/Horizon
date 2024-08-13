/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e63839',
                    100: '#bb191b',
                },
                accent: {
                    50: '#ACAAA8',
                    100: '#858585',
                    150: '#0b0909',
                    200: '#304254',
                    250: '#4d6a87',
                },
            },
            keyframes: {
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(2rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'spin-slow': 'spin 1.5s linear infinite',
                'slide-up': 'slideUp 0.7s ease-out forwards',
            },
            backgroundImage: {
                'logo-orange': "url('/assets/icons/logo-orange.svg')",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.background-colored-logo': {
                    position: 'relative',
                    overflow: 'hidden', // Ensure the pseudo-element is contained
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: "url('/assets/icons/logo-orange.svg')",
                        backgroundSize: '300px 150px',
                        backgroundRepeat: 'space',
                        opacity: '0.04',
                        zIndex: '0',
                        pointerEvents: 'none',
                    },
                },
                '.background-gray-logo': {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-20%',
                        width: '150%',
                        height: '100%',
                        backgroundImage: "url('/assets/icons/logo-white.svg')",
                        backgroundSize: '200px 150px',
                        backgroundRepeat: 'space',
                        maskImage: 'linear-gradient(to right, black,transparent )',
                        opacity: '0.3',
                        zIndex: '0',
                        pointerEvents: 'none',
                    },
                },
                '.background-combined-logo': {
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: "url('/assets/images/guard.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: '80% 20%',
                        backgroundRepeat: 'no-repeat',
                        opacity: '0.4',
                        zIndex: '-1',
                        pointerEvents: 'none',
                    },
                },
            });
        },
    ],
};
