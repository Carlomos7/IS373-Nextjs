import { TaskForm } from '@/components/form-component'
import { headers } from 'next/headers'
import { db } from '@/library/db'
import { UserButton, currentUser, redirectToSignIn } from "@clerk/nextjs";

const getTasks = async () => {
  try {

    const user = await currentUser()



    if (!user) {
      return redirectToSignIn()
    }

    return await db.task.findMany({
      where: {
        userId: user.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const initializeProfile = async () => {

  const user = await currentUser()

  if (!user) {
    return redirectToSignIn()
  }

  const profile = await db.user.findUnique({
    where: {
      userId: user.id
    }
  })

  if (profile) {
    return profile
  }

  const newProfile = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newProfile
}


export default async function Home() {

  <div>
    <UserButton afterSignOutUrl="/" />
  </div>

  const csrfToken = headers().get('X-CSRF-Token') || 'missing';

  const tasks = await getTasks()

  const profile = await initializeProfile()

  return (

    <>
      <TaskForm csrf_token={csrfToken} tasks={tasks!} />
    </>

  )
}
