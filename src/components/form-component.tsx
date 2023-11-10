"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { DataTable } from "./tasks/data-table"
import { columns } from "./tasks/columns"
import { Plus, PlusCircle } from "lucide-react"
import axios from 'axios'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please insert a task",
    })
})

interface TaskFormProps {
    csrf_token: string
}

export function TaskForm({ csrf_token }: TaskFormProps) {

    const [tasks, setTasks] = useState([
        {
            name: "Make Dinner"
        },
        {
            name: "Walk Dog"
        },
        {
            name: "Study"
        }
    ])

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post('/api/form-handler', values, {
                headers: {
                    'X-CSRF-Token': csrf_token,
                    'Content-Type': 'application/json',
                },
            });

            const { name } = response.data

            setTasks([...tasks, { name }])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex gap-3">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Task Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Insert task" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit"><Plus /></Button>
                </form>
            </Form>

            <DataTable columns={columns} data={tasks} />
        </div>
    )
}
