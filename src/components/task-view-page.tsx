import { Task } from '@prisma/client'
import React from 'react'

interface TaskViewPageProps {
    taskData: Task
}

const TaskViewPage = ({ taskData }: TaskViewPageProps) => {
    return (
        <div>
            <h1 className='font-bold'>View Record Page</h1>
            <h2 className='font-semibold'>Task name: {taskData.name}</h2>
        </div>
    )
}

export default TaskViewPage