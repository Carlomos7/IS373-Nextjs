import { NextResponse, NextRequest } from 'next/server';
import { fromJSON } from 'postcss';

export async function POST(req: Request) {
    try {

        const formData = await req.formData()

        const name = formData.get('input1')
        // Log the form data object to the console

        console.log(name)

        // Return a JSON response with the form data
        return NextResponse.json({ name })

    } catch (error) {
        return new NextResponse("INTERNAL ERROR", { status: 500 })
    }
    
    //return NextResponse.json({ status: 'success'});

    //const {name,value} =(await request.json())
    
    //const data = {name,value}

    //return NextResponse.json(data)
}
