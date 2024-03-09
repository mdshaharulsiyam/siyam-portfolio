import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth/auth'
export async function middleware() {
    const session = await auth()
    // console.log(session)
    if (request?.nextUrl?.pathname?.startsWith('/admin') && !session?.user?.email) {
        return NextResponse.rewrite(new URL('/', NextRequest.url))
    }

    if (request?.nextUrl?.pathname === '/login' && session?.user?.email) {
        return NextResponse.rewrite(new URL('/admin/projects', NextRequest.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
}