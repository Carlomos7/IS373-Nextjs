import { TaskForm } from '@/components/form-component'
import { headers } from 'next/headers'
import { db } from '@/library/db'

const getTasks = async () => {
  try {
    return await db.task.findMany()
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {

  const csrfToken = headers().get('X-CSRF-Token') || 'missing';

  const tasks = await getTasks()

  return (
    <>
      <TaskForm csrf_token={csrfToken} tasks={tasks!} />
    </>

  )
}
