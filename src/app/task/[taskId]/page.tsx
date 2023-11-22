import TaskViewPage from '@/components/task-view-page'
import { db } from '@/library/db'
import React from 'react'


const getTask = async (id: string) => {
    try {
        return await db.task.findUnique({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const TaskPage = async ({ params }: { params: { taskId: string } }) => {

    const taskData = await getTask(params.taskId)


    return (
        <TaskViewPage taskData={taskData!} />
    )
}

export default TaskPage