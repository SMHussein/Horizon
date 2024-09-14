import createIntlMiddleware from 'next-intl/middleware';
import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// export default createMiddleware(routing);

const handleI18nRouting = createIntlMiddleware(routing);

export async function middleware(request) {
    const response = handleI18nRouting(request);

    const supabase = createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options }) =>
                    request.cookies.set(name, value)
                );

                cookiesToSet.forEach(({ name, value, options }) =>
                    response.cookies.set(name, value, options)
                );
            },
        },
    });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user && request.nextUrl.pathname.startsWith('/admin')) {
        // no user, potentially respond by redirecting the user to the login page
        const url = request.nextUrl.clone();
        url.pathname = '/admin';
        return NextResponse.redirect(url);
    }

    return response;
}

export const config = {
    matcher: ['/', '/(en|ar)/:path*'],
};
