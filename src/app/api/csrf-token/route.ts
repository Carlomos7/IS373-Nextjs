import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const csrfToken = headers().get('X-CSRF-Token') || 'missing';


    return NextResponse.json({ csrfToken });

}