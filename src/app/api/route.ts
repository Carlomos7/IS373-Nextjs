import { db } from '@/library/db'
import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

// Get all users
export async function GET(req: Request) {
  const getAllUsers = await db.user.findMany()

  return NextResponse.json(getAllUsers)
}

// // Create user
// export async function POST(req: Request) {
//   const createUser = await db.user.create({
//     data: {
//       name: faker.person.fullName(),
//       email: faker.internet.email()
//     }
//   })
// }
