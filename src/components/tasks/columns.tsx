"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TaskType = {
    name: string;
    id: string;
}

export const columns: ColumnDef<TaskType>[] = [
    {
        accessorKey: "name",
        header: "My tasks",
        cell: ({ row }) => {
            const name = row.original.name
            const taskId = row.original.id

            return (
                <Link href={`/task/${taskId}`}>
                    <p>{name}</p>
                </Link>
            )
        }
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {

            const taskId = row.original.id


            const onDelete = async (id: string) => {
                try {

                    const response = await axios.get("/api/csrf-token")
                    const csrf_token = response.data.csrfToken



                    await axios.delete(`/api/tasks`, {
                        data: id,
                        headers: {
                            "X-CSRF-Token": csrf_token,
                            'Content-Type': 'application/json',
                        }
                    })



                    toast.success("Task deleted")

                    window.location.reload()
                } catch (error) {
                    console.log(error)
                    toast.error("Something went wrong")
                }
            }

            return (
                <div className="flex gap-3">
                    <Link href={`/task/${taskId}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button onClick={() => onDelete(taskId)} variant="destructive">Delete</Button>
                </div>
            )
        },
    }
]
