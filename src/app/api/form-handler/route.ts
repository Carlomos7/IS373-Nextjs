// app/form-handler/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {

        const values = await req.json()

        return NextResponse.json(values);

    } catch (error) {
        return new NextResponse("Internal error", { status: 500 })
    }
}