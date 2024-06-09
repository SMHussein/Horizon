import '@styles/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Horizon',
    description: 'Security and protection services provider',
};

function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradiant' />
                </div>

                <div className='app flex flex-col justify-between gap-10'>
                    <Header />
                    <main className='w-full flex-1 h-screen min-h-[35dvw]'>
                        <Toaster
                            position='top-center'
                            gutter={12}
                            containerStyle={{ margin: '8px' }}
                            toastOptions={{
                                success: {
                                    duration: 5000,
                                },
                                error: {
                                    duration: 5000,
                                },
                                style: {
                                    fontSize: '16px',
                                    maxWidth: '500px',
                                    padding: '16px 24px',
                                    backgroundColor: 'white',
                                    color: 'color-grey-700',
                                    textAlign: 'center',
                                    lineHeight: '1.5',
                                },
                            }}
                        />
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
