import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get('auth')
    const { pathname } = request.nextUrl

    // Allow public assets
    if (pathname.startsWith('/_next') || pathname === '/favicon.ico' || pathname.startsWith('/public')) {
        return NextResponse.next()
    }

    // If trying to access login page
    if (pathname === '/login') {
        // If already authenticated, redirect to home
        if (authCookie?.value === 'true') {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }

    // If not authenticated and not on login page, redirect to login
    if (authCookie?.value !== 'true') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
