import EditFormComponent from '@/components/edit-form-component';
import { db } from '@/library/db';
import { headers } from 'next/headers';
import { useParams } from 'next/navigation'
import React from 'react'

const getTaskData = async (id: string) => {
    try {
        return await db.task.findUnique({
            where: {
                id
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const EditTaskPage = async ({ params }: { params: { taskId: string } }) => {

    const csrfToken = headers().get('X-CSRF-Token') || 'missing';

    const taskData = await getTaskData(params.taskId)


    return (
        <EditFormComponent taskData={taskData!} csrf_token={csrfToken} />
    )
}

export default EditTaskPage