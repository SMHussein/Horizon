import createIntlMiddleware from 'next-intl/middleware';
import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createIntlMiddleware(routing);

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // Skip i18n routing for admin routes
    if (pathname.startsWith('/admin')) {
        const supabase = createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                        response.cookies.set(name, value, options);
                    });
                },
            },
        });

        const {
            data: { user },
        } = await supabase.auth.getUser();

        // If no user, redirect to login page
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        return NextResponse.next(); // Continue to the /admin page if authenticated
    }

    // Handle i18n routing for other non-admin paths
    const response = handleI18nRouting(request);

    // Cache non-admin pages for 1 day
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=300');

    return response;
}

export const config = {
    matcher: ['/', '/(en|ar)/:path*'],
};
