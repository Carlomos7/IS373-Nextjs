"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Task } from '@prisma/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface EditFormComponentProps {
    csrf_token: string;
    taskData: Task;
}

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please insert a task",
    })
})

const EditFormComponent = ({ csrf_token, taskData }: EditFormComponentProps) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: taskData.name
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values.name)
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