import LoginForm from '@src/authentication/Login';
import AdminNav from '@src/components/AdminNav';
import '@styles/globals.css';
import '@styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { createClient } from '@/utils/supabase/server';

async function RootLayout({ children }) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    return (
        <html>
            <body>
                <main>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
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
                    <div className='grid grid-cols-[max-content_1fr] h-dvh'>
                        {data.user ? (
                            <>
                                <AdminNav />
                                <div className='p-20'>{children}</div>
                            </>
                        ) : (
                            <LoginForm />
                        )}
                    </div>
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
