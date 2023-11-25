"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Task } from '@prisma/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';

interface EditFormComponentProps {
    csrf_token: string;
    taskData: Task;
}

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please insert a task",
    }),
    id: z.string()
})

const EditFormComponent = ({ csrf_token, taskData }: EditFormComponentProps) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: taskData.name,
            id: taskData.id
        }
    })

    const router = useRouter()



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/tasks`, values)



            toast.success("Task updated")

            router.push("/")
            router.refresh()
        } catch (error) {
            console.log(error)
            toast.error("CSRF Token Invalid!")
        }
    }


    return (
        <div>
            <h1>Edit Task Page</h1>
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

                    <Button type="submit">Edit</Button>
                </form>
            </Form>
        </div>
    )
}

export default EditFormComponent