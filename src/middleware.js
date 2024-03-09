import { NextResponse } from 'next/server'
import { auth } from '@/auth/auth'
export async function middleware(request) {
    const session = await auth()
    console.log(session)
    if (request?.nextUrl?.pathname?.startsWith('/admin') && !session?.user?.email) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request?.nextUrl?.pathname === '/login' && session?.user?.email) {
        return NextResponse.rewrite(new URL('/admin/projects', request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
}