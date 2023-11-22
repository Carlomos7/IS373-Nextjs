"use server"
import axios from "axios"

export default async function createTask() {

    try {

        const newTask = {
            name: "Shower"
        }

        return await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            body: JSON.stringify(newTask),
        })

    } catch (err) {
        console.log(err)
    }
}