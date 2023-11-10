"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    name: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "My tasks",
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className="flex gap-3">
                    <Button>Edit</Button>
                    <Button variant="destructive">Delete</Button>
                </div>
            )
        },
    }
]
