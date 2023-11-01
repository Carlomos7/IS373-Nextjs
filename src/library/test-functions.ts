import prisma from '../client'

interface CreateUser {
  name: string;
  email: string;
}

export async function createUser(user: CreateUser) {

    try {
      return await prisma.user.create({
        data: user
    })
    } catch (error) {
        return new Error('User must accept terms!')
    }
    
}
