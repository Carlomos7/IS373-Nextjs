// app/form-handler/route.ts

import { db } from '@/library/db';
import { NextResponse } from 'next/server';

// POST CONTROLLER - make a task
export async function POST(req: Request) {
    try {

        const { name } = await req.json()

        const response = await db.task.create({
            data: {
                name
            }
        })



        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("Internal error", { status: 500 })
    }
}

// GET CONTROLLER - get all tasks
export async function GET() {
    try {

        const response = await db.task.findMany()

        return NextResponse.json(response)

    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}
