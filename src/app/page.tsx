import { TaskForm } from '@/components/form-component'
import Image from 'next/image'
import Link from 'next/link'
import { headers } from 'next/headers'

export default function Home() {

  const csrfToken = headers().get('X-CSRF-Token') || 'missing';


  return (
    <>
      <TaskForm csrf_token={csrfToken} />
    </>

  )
}
