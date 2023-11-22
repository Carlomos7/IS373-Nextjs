"use server"
import { Task } from "@prisma/client"
import axios from "axios"

export default async function fetchTasks() {

    try {
        const response = await axios.get("http://localhost:3000/api/tasks",)


        return response

    } catch (err) {
        console.log(err)
    }
}