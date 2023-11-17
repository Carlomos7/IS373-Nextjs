import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type User = {
    id: number
    name: string
}

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
]

export default function handler(req: NextRequest, res: NextRequest) {
    return NextResponse.json(users)
}