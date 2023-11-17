// middleware.ts
import csrf from 'edge-csrf';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// Initialize protection function
const csrfProtect = csrf({
    cookie: {
        secure: process.env.NODE_ENV === 'production',
    },
});

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    // Configuration option to disable CSRF in testing environment
    const disableCSRFInTest = process.env.NODE_ENV === 'test';

    // Check if CSRF protection should be disabled in the testing environment
    if (!disableCSRFInTest) {
        // CSRF protection
        const csrfError = await csrfProtect(request, response);

        // Check result
        if (csrfError) {
            return new NextResponse('invalid csrf token', { status: 403 });
        }
    }

    return response;
}
