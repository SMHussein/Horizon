import { Anonymous_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const anonymousPro = Anonymous_Pro({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'], // Specify the weights you want to use
});
export const lastica = localFont({
    src: './lastica.woff2',
    display: 'swap',
});
