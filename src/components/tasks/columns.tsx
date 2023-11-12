"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"

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

            return (
                <div className="flex gap-3">
                    <Link href={`/task/${taskId}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button variant="destructive">Delete</Button>
                </div>
            )
        },
    }
]
